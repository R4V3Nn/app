import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRepos } from '../../actions/userActions';

import './userRepos.scss';


class UserRepos extends Component {
	componentDidMount() {
		this.props.loadRepos('https://api.github.com/users/tomafro/repos');
	}
	render() {
		const { userRepos } = this.props;

		return (
			<div>
				<ul className="repos">
					{
						userRepos &&
						userRepos.map(repo => (
							<li key={repo.id}>
								{repo.name}
							</li>
						))


					}

				</ul>

			</div>
		);
	}
}

UserRepos.propTypes = {
	userRepos: PropTypes.object.isRequared,
	loadRepos: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	reposUrl: state.users.user.repos_url,
	userRepos: state.users.userRepos,
});

const mapDispatchToProps = dispatch => ({
	loadRepos: url => dispatch(fetchRepos(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRepos);

