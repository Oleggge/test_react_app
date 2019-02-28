import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './router'
import * as serviceWorker from './serviceWorker';
//Redux Store
import { Provider } from 'react-redux'
import { configureStore } from './store/index'


const store = configureStore()

ReactDOM.render(
	<Provider store={store}>
		<AppRoutes />
	</Provider>
	, document.getElementById('root'));
serviceWorker.unregister();
