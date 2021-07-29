import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRoutes from './router';
import './assets/scss/master.scss';
import { store, history } from "./redux/store";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    // Connect global store to components toward the router
    <Provider store={store}><AppRoutes history={history} /></Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
