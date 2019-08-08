import React from 'react';
import { shallow } from 'enzyme';

import ItemList from './';

describe('ItemList component', () => {
	it('should render ItemList component', () => {
		// when
		const wrapper = shallow(<ItemList />);

		// then
		expect(wrapper.getElement()).toMatchSnapshot();
	});
});
