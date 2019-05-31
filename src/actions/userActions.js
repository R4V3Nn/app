import types from './types';

const fetchUser = id => dispach => {
	fetch(`https://api.github.com/user/${id}`)
		.then(res => res.json())
		.then(data => dispach({
			type: types.FETCH_USER,
			payload: data,
		}));
};

export default fetchUser;
