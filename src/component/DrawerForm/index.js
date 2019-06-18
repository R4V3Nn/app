import React from 'react';
import Form from '@talend/react-forms';

const data = {
	jsonSchema: {
		title: 'Repo information:',
		type: 'object',
		properties: {
			id: {
				type: 'number',
				title: 'Id',
			},
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
};

const DrawerForm = ({ item }) => {
	const formConfig = {
		...data,
		properties: item,
	};
	return (<Form data={formConfig} onSubmit={(e, el) => console.log('onSubmit - ', el)} />);
};

export default DrawerForm;
