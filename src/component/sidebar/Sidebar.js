import React from 'react';
import { SidePanel } from '@talend/react-components';

const Sidebar = () => {
	const actions = [
		{ label: 'About', icon: 'talend-user-circle' },
		{ label: 'Repos', icon: 'talend-dataprep' },
	];
	return (
		<SidePanel actions={actions} />
	);
};

export default Sidebar;
