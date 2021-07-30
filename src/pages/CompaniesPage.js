import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import HeaderComponent from "../components/HeaderComponent";
import LoaderComponent from "../components/LoaderComponent";
import {COMPANIES_PAGE} from "../constants/pageNameConstants";
import AppLayoutContainer from "../containers/AppLayoutContainer";
import ErrorAlertComponent from "../components/ErrorAlertComponent";
import TableSearchComponent from "../components/TableSearchComponent";
import FormModalComponent from "../components/modals/FormModalComponent";
import {emitCompaniesFetch, emitNextCompaniesFetch} from "../redux/companies/actions";
import CompaniesCardsComponent from "../components/companies/CompaniesCardsComponent";
import CompanyDetailsContainer from "../containers/companies/CompanyDetailsContainer";
import {storeCompaniesRequestReset, storeNextCompaniesRequestReset} from "../redux/requests/companies/actions";
import {dateToString, formatNumber, needleSearch, requestFailed, requestLoading} from "../functions/generalFunctions";

// Component
function CompaniesPage({companies, companiesRequests, hasMoreData, page, dispatch, location}) {
    // Local states
    const [needle, setNeedle] = useState('');
    // const [newCompanyModal, setNewCompanyModal] = useState({show: false, header: ''});
    const [companyDetailsModal, setCompanyDetailsModal] = useState({show: false, header: "DETAIL DE L'ENTREPRISE", id: ''});

    // Local effects
    useEffect(() => {
        dispatch(emitCompaniesFetch());
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, []);

    const handleNeedleInput = (data) => {
        setNeedle(data)
    }

    // Reset error alert
    const shouldResetErrorData = () => {
        dispatch(storeCompaniesRequestReset());
        dispatch(storeNextCompaniesRequestReset());
    };

    // Fetch next companies data to enhance infinite scroll
    const handleNextCompaniesData = () => {
        dispatch(emitNextCompaniesFetch({page}));
    }

   /* // Show new company modal form
    const handleNewCompanyModalShow = () => {
        setNewCompanyModal({newCompanyModal, header: "NOUVELLE ENTREPRISE", show: true})
    }

    // Hide new company modal form
    const handleNewCompanyModalHide = () => {
        setNewCompanyModal({...newCompanyModal, show: false})
    }*/

    // Show company details modal form
    const handleCompanyDetailsModalShow = ({id}) => {
        setCompanyDetailsModal({...companyDetailsModal, show: true, id})
    }

    // Hide company details modal form
    const handleCompanyDetailsModalHide = () => {
        setCompanyDetailsModal({...companyDetailsModal, show: false})
    }

    // Render
    return (
        <>
            <AppLayoutContainer pathname={location.pathname}>
                <div className="content-wrapper">
                    <HeaderComponent title={COMPANIES_PAGE} icon={'fa fa-university'} />
                    <section className="content">
                        <div className='container-fluid'>
                            <div className="row">
                                <div className="col-12">
                                    <div className="card custom-card-outline">
                                        {/* Search input */}
                                        <div className="card-header">
                                            <div className="card-tools">
                                                <TableSearchComponent needle={needle} handleNeedle={handleNeedleInput} />
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            {/* Error message */}
                                            {requestFailed(companiesRequests.list) && <ErrorAlertComponent message={companiesRequests.list.message} />}
                                            {requestFailed(companiesRequests.next) && <ErrorAlertComponent message={companiesRequests.next.message} />}
                                            {/*<button type="button"
                                                    className="btn btn-theme ml-2 mb-2"
                                                    onClick={handleNewCompanyModalShow}
                                            >
                                                <i className="fa fa-plus" /> Nouvelle entreprise
                                            </button>*/}
                                            {/* Search result & Infinite scroll */}
                                            {(needle !== '' && needle !== undefined)
                                                ? <CompaniesCardsComponent companies={searchEngine(companies, needle)}
                                                                           handleCompanyDetailsModalShow={handleCompanyDetailsModalShow}
                                                />
                                                : (requestLoading(companiesRequests.list) ? <LoaderComponent /> :
                                                        <InfiniteScroll hasMore={hasMoreData}
                                                                        loader={<LoaderComponent />}
                                                                        dataLength={companies.length}
                                                                        next={handleNextCompaniesData}
                                                                        style={{ overflow: 'hidden' }}
                                                        >
                                                            <CompaniesCardsComponent companies={companies}
                                                                                     handleCompanyDetailsModalShow={handleCompanyDetailsModalShow}
                                                            />
                                                        </InfiniteScroll>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </AppLayoutContainer>
            {/* Modal */}
            {/*<FormModalComponent modal={newCompanyModal} handleClose={handleNewCompanyModalHide}>
                <CompanyNewContainer handleClose={handleNewCompanyModalHide} />
            </FormModalComponent>*/}
            <FormModalComponent modal={companyDetailsModal} handleClose={handleCompanyDetailsModalHide}>
                <CompanyDetailsContainer id={companyDetailsModal.id} />
            </FormModalComponent>
        </>
    )
}

// Search engine
function searchEngine(data, _needle) {
    // Avoid empty filtering
    if(_needle !== '' && _needle !== undefined) {
        // Filter
        data = data.filter((item) => {
            return (
                needleSearch(item.name, _needle) ||
                needleSearch(item.phone, _needle) ||
                needleSearch(item.manager, _needle) ||
                needleSearch(dateToString(item.creation), _needle) ||
                needleSearch(formatNumber(item.sims.length), _needle)
            )
        });
    }
    // Return data
    return data;
}

// Prop types to ensure destroyed props data type
CompaniesPage.propTypes = {
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    companies: PropTypes.array.isRequired,
    hasMoreData: PropTypes.bool.isRequired,
    companiesRequests: PropTypes.object.isRequired,
};

export default React.memo(CompaniesPage);