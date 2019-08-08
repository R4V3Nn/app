import React from 'react';
import { shallow } from 'enzyme';

import RepoDrawer from './';

describe('RepoDrawer component', () => {
	it('should render RepoDrawer component', () => {
		// when
		const wrapper = shallow(<RepoDrawer />);

		// then
		expect(wrapper.getElement()).toMatchSnapshot();
	});
});
