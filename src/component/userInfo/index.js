import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchUser from '../../actions/userActions';

import './user-info.scss';

class UserInfo extends Component {
	componentDidMount() {
		this.props.loadUser(1073);
	}
	render() {
		const { user } = this.props;
		const fields = ['login', 'name', 'company', 'blog', 'email', 'followers', 'birth_year'];

		return (
			<div className="user">
				<img className="user__image" src={user.avatar_url} alt="avatar" />
				<ul className="user__info">
					{
						fields.map(field => (
							<li key={field}>
								<span>{`${field.replace('_', ' ')}: `}</span>
								{user[field]}
							</li>
						))
					}

				</ul>

			</div>
		);
	}
}

const mapStateToProps = state => ({
	user: state.users.user,
});

const mapDispatchToProps = dispatch => ({
	loadUser: id => dispatch(fetchUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);

