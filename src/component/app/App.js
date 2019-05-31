import React from 'react';
import { Provider } from 'react-redux';
import '@talend/bootstrap-theme/src/theme/theme.scss';

import { Layout, IconsProvider } from '@talend/react-components';
import './app.scss';
import Header from '../header';
import Sidebar from '../sidebar';
import UserInfo from '../userInfo';
import store from '../../store';

const App = () => (
	<div className="t7">
		<Provider store={store}>
			<React.Fragment>

				<IconsProvider />
				<Layout
					hasTheme
					header={<Header />}
					mode="TwoColumns"
					one={<Sidebar />}
				>
					<UserInfo />
				</Layout>
			</React.Fragment>
		</Provider>
	</div>
);

export default App;
