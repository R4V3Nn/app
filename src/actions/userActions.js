import types from './types';

export const fetchUser = id => dispach => {
	fetch(`https://api.github.com/user/${id}`)
		.then(res => res.json())
		.then(data => dispach({
			type: types.FETCH_USER,
			payload: data,
		}));
};

export const fetchUserRepos = url => dispatch => {
	fetch(url)
		.then(res => res.json())
		.then(resp => dispatch({
			type: types.FETCH_USER_REPOS,
			payload: resp,
		}));
};

export const fetchRepos = (reposUrl, id) => dispatch => {
	if (!reposUrl) {
		fetch(`https://api.github.com/user/${id}`)
			.then(res => res.json())
			.then(data => dispatch(fetchUserRepos(data.repos_url)));
	} else {
		dispatch(fetchUserRepos(reposUrl));
	}
};

export const onToggle = id => ({
	type: types.ITEM_TOGGLE,
	payload: id,
});

export const formSubmit = id => ({
	types: types.FORM_SUBMIT,
	payload: id,
});
