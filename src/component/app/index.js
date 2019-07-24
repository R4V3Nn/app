import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import '@talend/bootstrap-theme/src/theme/theme.scss';

import './app.scss';
import Wrapper from './Wrapper';
import UserInfo from '../UserInfo';
import UserRepos from '../UserRepos';
import store from '../../store';

const modules = [{
	path: '*',
	component: UserInfo,
	exact: true,
}, {
	path: '#repos',
	component: UserRepos,
}];

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store);


const App = () => (
	<div className="t7">
		<Provider store={store}>
			<HashRouter history={history}>
				<Route path="/" component={Wrapper}>
					{
						modules.map(module => (
							<Route path={module.path} component={module.component} exact={module.exact} />
						))
					}
				</Route>
			</HashRouter>
		</Provider>
	</div>
);


export default App;
