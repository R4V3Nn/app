import React from 'react';
import { mount } from 'enzyme';

import { UserRepos } from './Repos';

describe('Repos component', () => {
	const props = {
		userRepos: [{
			id: 11374954,
			node_id: 'MDEwOlJlcG9zaXRvcnkxMTM3NDk1NA==',
			name: 'ace',
			full_name: 'evanphx/ace',
			private: false,
			html_url: 'https://github.com/evanphx/ace',
			description: 'Ace (Ajax.org Cloud9 Editor)',
			fork: true,
			url: 'https://api.github.com/repos/evanphx/ace',
			created_at: '2013-07-12T18:12:26Z',
			updated_at: '2018-02-18T20:56:11Z',
			pushed_at: '2013-07-12T07:04:43Z',
			git_url: 'git://github.com/evanphx/ace.git',
			clone_url: 'https://github.com/evanphx/ace.git',
			svn_url: 'https://github.com/evanphx/ace',
			homepage: 'http://ace.ajax.org',
			language: 'JavaScript',
		}, {
			id: 53301806,
			node_id: 'MDEwOlJlcG9zaXRvcnkxMTM3NDk1NA==',
			name: 'ace',
			full_name: 'evanphx/ace',
			private: false,
			html_url: 'https://github.com/evanphx/ace',
			description: 'Ace (Ajax.org Cloud9 Editor)',
			fork: true,
			url: 'https://api.github.com/repos/evanphx/ace',
			created_at: '2013-07-12T18:12:26Z',
			updated_at: '2018-02-18T20:56:11Z',
			pushed_at: '2013-07-12T07:04:43Z',
			git_url: 'git://github.com/evanphx/ace.git',
			clone_url: 'https://github.com/evanphx/ace.git',
			svn_url: 'https://github.com/evanphx/ace',
			homepage: 'http://ace.ajax.org',
			language: 'JavaScript',
		}],
		reposUrl: 'https://api.github.com/repos',
		filteredRepos: [],
		selectedIds: ['11374954'],
		isDrawerShown: false,
		loadRepos: jest.fn(),
		onItemToggle: jest.fn(),
		selectAll: jest.fn(),
		reposFilter: jest.fn(),
		deleteRepo: jest.fn(),
	};

	it('should render Repos component', () => {
		const wrapper = mount(<UserRepos {...props} />);

		expect(wrapper.getElement()).toMatchSnapshot();
	});
});
