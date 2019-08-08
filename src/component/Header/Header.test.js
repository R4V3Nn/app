import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Header  component', () => {
	it('should render Header  component', () => {
		// when
		const wrapper = shallow(<Header />);

		// then
		expect(wrapper.getElement()).toMatchSnapshot();
	});
});
