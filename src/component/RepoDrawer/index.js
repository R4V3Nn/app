import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from '@talend/react-components';
import DrawerForm from '../DrawerForm';

import './repoDrawer.scss';

const RepoDrawer = props => (
	<Drawer.Container stacked={false} >
		<Drawer.Title
			title="Repo edit"
			onCancelAction={{
				label: 'Cancel',
				bsStyle: 'default btn-inverse',
				name: 'cancel',
				onClick: () => props.onClose(false) }}
		/>
		<Drawer.Content>
			<DrawerForm {...props} />
		</Drawer.Content>
	</Drawer.Container>
);

RepoDrawer.propTypes = {
	onClose: PropTypes.func,
};

export default RepoDrawer;
