
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUsers } from '../../actions/userActions';
import Spinner from '../Spinner';

import './users.scss';

export class Users extends Component {
	componentDidMount() {
		this.props.loadUsers();
	}
	render() {
		const { users } = this.props;

		if (!users) {
			return <Spinner />;
		}

		const ListOfUsers = users.map(user => <li>
			Login: <span>{user.login}</span> <a href={user.html_url}>open repo</a></li>);

		return (
			<div className="users">
				<ul className="info">
					{ ListOfUsers }
				</ul>

			</div>
		);
	}
}

Users.propTypes = {
	users: PropTypes.object.isRequared,
	loadUsers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	users: state.users.users,
});

const mapDispatchToProps = dispatch => ({
	loadUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);

