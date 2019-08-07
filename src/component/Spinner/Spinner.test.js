import React from 'react';
import { shallow } from 'enzyme';

import Spinner from './';

describe('Spinner component', () => {
	it('should render Spinner component', () => {
		// when
		const wrapper = shallow(<Spinner />);

		// then
		expect(wrapper.getElement()).toMatchSnapshot();
	});
});
