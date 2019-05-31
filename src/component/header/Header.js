import React from 'react';
import { HeaderBar } from '@talend/react-components';

const Header = () => {
	const brand = {
		id: 'brand',
		label: 'My App',
		onClick: () => console.log('click'),
	};
	return(
		<HeaderBar brand={brand} />
	)
};

export default Header;