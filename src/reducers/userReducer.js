import types from '../actions/types';

const initialState = {
	user: {},
	filteredRepos: null,
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
		case types.ITEM_TOGGLE: {
			const id = state.selectedId === action.payload ? null : action.payload;
			return {
				...state,
				selectedId: id,
			};
		}

		case types.UPDATE_REPOS:
			return {
				...state,
				userRepos: action.payload,
			};
		case types.FILTER_REPOS:
			return {
				...state,
				filteredRepos: action.payload,
			};
		case types.DELETE_REPO:
			return {
				...state,
				userRepos: action.payload,
			};
		default:
			return state;
	}
}

