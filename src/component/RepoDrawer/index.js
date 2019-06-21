import React from 'react';
import { Drawer } from '@talend/react-components';
import DrawerForm from '../DrawerForm';

import './repoDrawer.scss';

const RepoDrawer = props => (
	<Drawer title={'REPO INFORMATION:'} footerActions={{}}>
		<DrawerForm {...props} />
	</Drawer>
);

export default RepoDrawer;
