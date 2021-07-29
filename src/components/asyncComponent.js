import 'nprogress/nprogress.css';
import Nprogress from 'nprogress';
import React, { Component } from 'react';

import '../assets/scss/loader.scss';

export default function asyncComponent(importComponent) {
    class AsyncFunc extends Component {
        constructor(props) {
            super(props);
            this.state = {
                component: null,
            };

            Nprogress.configure({ showSpinner: false });
            Nprogress.start();
        }

        componentWillUnmount() {
            this.mounted = false;
            //Nprogress.remove();
        }

        async componentDidMount() {
            this.mounted = true;
            const { default: Component } = await importComponent();
            Nprogress.done();
            if (this.mounted) {
                this.setState({
                    component: <Component {...this.props} />,
                });
            }
        }

        render() {
            return (
                <>{this.state.component || <div className="lds-ripple"><div/><div/></div>}</>
            )
        }
    }
    return AsyncFunc;
}