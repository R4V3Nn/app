import React from 'react';
import { HeaderBar } from '@talend/react-components';

const Header = () => {
	const brand = {
		id: 'brand',
		label: 'My App',
	};
	return (
		<HeaderBar brand={brand} />
	);
};

export default Header;
