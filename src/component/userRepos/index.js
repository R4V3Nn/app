import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from '@talend/react-components';
import { fetchRepos } from '../../actions/userActions';

import './userRepos.scss';


class UserRepos extends Component {
	componentDidMount() {
		this.props.loadRepos(this.props.reposUrl, 5);
	}

	render() {
		const { userRepos } = this.props;
		const listColumns = [
			{ key: 'id', label: 'Id', order: 0 },
			{ key: 'name', label: 'Name', order: 1 },
			{ key: 'description', label: 'Description', order: 3 },
			{ key: 'homepage', label: 'Homepage', order: 4 },
		];
		const listItems = userRepos && userRepos.map(repo => ({
			id: repo.id,
			name: repo.name,
			description: repo.description,
			homepage: repo.homepage,
		}
		));
		const listProps = {
			columns: listColumns,
			items: listItems,
		};

		return userRepos ? (<List displayMode="table" list={listProps} />) : null;
	}
}

UserRepos.propTypes = {
	userRepos: PropTypes.arrayOf(PropTypes.object),
	loadRepos: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	reposUrl: state.users.user.repos_url,
	userRepos: state.users.userRepos,
});

const mapDispatchToProps = dispatch => ({
	loadRepos: (url, id) => dispatch(fetchRepos(url, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRepos);

