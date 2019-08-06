import React from 'react';
import { mount } from 'enzyme';

import { UserInfo } from './Info';

describe('Info component', () => {
	const props = {
		user: {
			login: '10',
			id: 21185613,
			node_id: 'MDEyOk9yZ2FuaXphdGlvbjIxMTg1NjEz',
			avatar_url: 'https://avatars2.githubusercontent.com/u/21185613?v=4',
			gravatar_id: '',
			url: 'https://api.github.com/users/10',
			html_url: 'https://github.com/10',
			followers_url: 'https://api.github.com/users/10/followers',
			following_url: 'https://api.github.com/users/10/following{/other_user}',
			gists_url: 'https://api.github.com/users/10/gists{/gist_id}',
			starred_url: 'https://api.github.com/users/10/starred{/owner}{/repo}',
			subscriptions_url: 'https://api.github.com/users/10/subscriptions',
			organizations_url: 'https://api.github.com/users/10/orgs',
			repos_url: 'https://api.github.com/users/10/repos',
			events_url: 'https://api.github.com/users/10/events{/privacy}',
			received_events_url: 'https://api.github.com/users/10/received_events',
			type: 'Organization',
			site_admin: false,
			name: null,
			company: null,
			blog: '',
			location: null,
			email: null,
			hireable: null,
			bio: null,
			public_repos: 0,
			public_gists: 0,
			followers: 0,
			following: 0,
			created_at: '2016-08-23T00:32:30Z',
			updated_at: '2019-07-17T16:28:11Z',
		},
		loadUser: jest.fn(),
	};

	it('should render UserInfo component', () => {
		// when
		const wrapper = mount(<UserInfo {...props} />);

		// then
		expect(wrapper.getElement()).toMatchSnapshot();
	});
});
