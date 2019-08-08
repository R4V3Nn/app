import React from 'react';
import { shallow } from 'enzyme';

import Sidebar from './Sidebar';

describe('Sidebar component', () => {
	const props = {
		actions: [
			{
				label: 'About',
				icon: 'talend-user-circle',
				onClick: () => jest.fn(),
			},
			{
				label: 'Repos',
				icon: 'talend-hierarchical-view',
				onClick: () => jest.fn(),
			},
		],
		docked: false,
		onToggleDock: jest.fn(),
	};


	it('should render Sidebar component', () => {
		// when
		const wrapper = shallow(<Sidebar {...props} />);

		// then
		expect(wrapper.getElement()).toMatchSnapshot();
	});
});
