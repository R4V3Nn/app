import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import store from '../../store';


import DrawerForm from './';

describe('DrawerForm component', () => {
	const props = {
		jsonSchema: {
			type: 'object',
			properties: {
				name: {
					type: 'string',
					title: 'Name',
				},
				html_url: {
					type: 'string',
					title: 'Url',
				},
				description: {
					type: 'string',
					title: 'Description',
				},
				homepage: {
					type: 'string',
					title: 'Homepage',
				},
				size: {
					type: 'number',
					title: 'Size',
				},
				language: {
					type: 'string',
					title: 'language',
				},
			},
		},
		onSubmit: jest.fn(),

	};


	it('should render DrawerForm component', () => {
		// when
		const wrapper = mount(
			<Provider store={store}>
				<DrawerForm {...props} />
			</Provider>
			);

		// then
		expect(wrapper.getElement()).toMatchSnapshot();
	});
});
