import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import PropTypes from 'prop-types';
import '@talend/bootstrap-theme/src/theme/theme.scss';

import { Layout, IconsProvider } from '@talend/react-components';
import './app.scss';
import Header from '../Header';
import Sidebar from '../Sidebar';
import UserInfo from '../UserInfo';
import UserRepos from '../UserRepos';
import store from '../../store';

const modules = [{
	path: '/about',
	component: UserInfo,
	exact: true,
}, {
	path: '/repos',
	component: UserRepos,
}];

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

const Wrapper = props => (
	<div>
		<IconsProvider />
		<Layout
			hasTheme
			header={<Header />}
			mode="TwoColumns"
			one={<Sidebar />}
		>
			{props.children}
		</Layout>
	</div>
);

const App = () => (
	<div className="t7">
		<Provider store={store}>
			<Router history={history}>
				<Route path="/" component={Wrapper}>
					{
						modules.map(module => (
							<Route path={module.path} component={module.component} exact={module.exact} />
						))
					}
				</Route>
			</Router>
		</Provider>
	</div>
);

App.propTypes = {
	
}

export default App;
