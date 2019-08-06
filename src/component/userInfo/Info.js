import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUser } from '../../actions/userActions';
import Spinner from '../Spinner';

import './user-info.scss';

class UserInfo extends Component {
	componentDidMount() {
		this.props.loadUser(7);
	}
	render() {
		const { user } = this.props;
		const fields = ['login', 'name', 'company', 'blog', 'email', 'followers'];

		if (!user.login) {
			return <Spinner />;
		}

		return (
			<div className="user">
				<img className="image" src={user.avatar_url} alt="avatar" />
				<ul className="info">
					{
						fields.map(field => (
							<li key={field}>
								<span>{`${field}: `}</span>
								{user[field]}
							</li>
						))
					}

				</ul>

			</div>
		);
	}
}

UserInfo.propTypes = {
	user: PropTypes.object.isRequared,
	loadUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	user: state.users.user,
});

const mapDispatchToProps = dispatch => ({
	loadUser: id => dispatch(fetchUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);

