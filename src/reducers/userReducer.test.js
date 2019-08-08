import userReducer from './userReducer';
import { FETCH_USER } from '../actions/types';

describe('userReducer', () => {
	test('is correct', () => {
		const action = { type: 'default_action' };


		expect(userReducer(undefined, action)).toMatchSnapshot();
	});
});

describe('FETCH_USER', () => {
	test('is correct', () => {
		const action = { type: FETCH_USER, payload: [] };


		expect(userReducer(undefined, action)).toMatchSnapshot();
	});
});
