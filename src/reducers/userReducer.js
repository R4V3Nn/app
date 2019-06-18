import types from '../actions/types';

const initialState = {
	user: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case types.FETCH_USER:
			return {
				...state,
				user: action.payload,
			};
		case types.FETCH_USER_REPOS:
			return {
				...state,
				userRepos: action.payload,
			};
		case types.ITEM_TOGGLE:
			return {
				...state,
				selectedId: action.payload,
			};
		case types.FORM_SUBMIT:
			return {
			
			}
		default:
			return state;
	}
}

