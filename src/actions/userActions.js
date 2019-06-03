import types from './types';

export const fetchUser = id => dispach => {
	fetch(`https://api.github.com/user/${id}`)
		.then(res => res.json())
		.then(data => dispach({
			type: types.FETCH_USER,
			payload: data,
		}));
};

export const fetchRepos = reposUrl => dispach => {
	fetch(reposUrl)
		.then(res => res.json())
		.then(data => dispach({
			type: types.FETCH_USER_REPOS,
			payload: data,
		}));
};

