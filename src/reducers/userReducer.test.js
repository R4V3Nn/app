import userReducer from './userReducer';
import types from '../actions/types';

const initialState = {
	filteredRepos: null,
	selectedIds: [],
	user: {},
};

describe('userReducer', () => {
	it('should return the initial state', () => {
		expect(userReducer(undefined, {})).toEqual(initialState);
	});

	it('check FETCH_USER case', () => {
		const state = {
			...initialState,
			user: {
				id: 'id',
				name: 'Tony Stark',
			},
		};
		const action = {
			type: types.FETCH_USER,
			payload: {
				id: 'id',
				name: 'Tony Stark',
			},
		};

		expect(userReducer(initialState, action)).toEqual(state);
	});

	it('check FETCH_USER_REPOS case', () => {
		const state = {
			...initialState,
			userRepos: {
				id: 'id',
				name: 'App',
			},
		};
		const action = {
			type: types.FETCH_USER_REPOS,
			payload: {
				id: 'id',
				name: 'App',
			},
		};

		expect(userReducer(initialState, action)).toEqual(state);
	});
});

