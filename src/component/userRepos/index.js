import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List, Drawer } from '@talend/react-components';
import { fetchRepos } from '../../actions/userActions';

import './userRepos.scss';


class UserRepos extends Component {
	constructor() {
		super();
		this.state = {
			showDarwer: false,
		};
	}


	componentDidMount() {
		this.props.loadRepos(this.props.reposUrl, 5);
	}

	showDrawer = () => {
		this.setState({
			showDarwer: !this.state.showDarwer,
		});
	}


	render() {
		const { userRepos } = this.props;
		const { showDarwer } = this.state;
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
			titleProps: {
				onClick: () => this.showDrawer(),
			},
		};

		return userRepos ?
			(
				<React.Fragment>
					<List displayMode="table" list={listProps} />
					{ showDarwer && <Drawer> {<List displayMode="table" list={listProps} /> }</Drawer> }
				</React.Fragment>
			) : null;
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

