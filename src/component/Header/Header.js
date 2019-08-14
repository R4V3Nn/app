import React from 'react';
import { browserHistory } from 'react-router';
import { HeaderBar } from '@talend/react-components';

const Header = () => {
	const brand = {
		id: 'brand',
		label: 'My App',
		onClick: () => browserHistory.push('/'),
	};
	return (
		<HeaderBar brand={brand} />
	);
};

export default Header;
