import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import '@talend/bootstrap-theme/src/theme/theme.scss';

import './app.scss';
import Wrapper from './Wrapper';
import UserInfo from '../UserInfo';
import UserRepos from '../UserRepos';
import store from '../../store';

// const modules = [{
// 	path: '/about',
// 	component: UserInfo,
// }, {
// 	path: '/repos',
// 	component: UserRepos,
// }];

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);


const App = () => (
	<div className="t7">
		<Provider store={store}>
			<Router history={history}>
				<Route path="/" component={Wrapper}>
					<Route path="about" component={UserInfo} exact />
					<Route path="repos" component={UserRepos} exact />
				</Route>
			</Router>
		</Provider>
	</div>
);


export default App;
