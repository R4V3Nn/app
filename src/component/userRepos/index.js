import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from '@talend/react-components';
import RepoDrawer from '../RepoDrawer';

import { fetchRepos, onToggle, filterRepos, deleteRepo, onSelectAll } from '../../actions/userActions';

import './userRepos.scss';


const getItemProps = props => ({
	classNameKey: 'list-item',
	onOpen: () => console.log('onItemOpen'),
	onSelect: (e, item) => console.log('onItemSelect ', item),
	onToggle: (e, item) => props.onItemToggle(item.id),
	onToggleAll: () => props.selectAll(),
	isSelected: item => props.selectedIds.includes(item.id),
	onCancel: () => console.log('onTitleEditCancel'),
	onChange: () => console.log('onTitleChange'),
	onSubmit: () => console.log('onTitleEditSubmit'),
});

const defaultProps = props => ({
	id: 'talend',
	displayMode: 'table',
	list: {
		columns: [
			{ key: 'name', label: 'Name', order: 0 },
			{ key: 'description', label: 'Description', order: 1 },
			{ key: 'homepage', label: 'Homepage', order: 2 },
			{ key: 'language', label: 'Language', order: 3 },
		],
		items: [],
		titleProps: {
			key: 'name',
			iconKey: 'icon',
			displayModeKey: 'display',
			onClick: (e, item) => {
				props.setShowDrawer({ isDrawerShown: !props.isDrawerShown, item });
				console.log(item);
			},
			onEditCancel: () => console.log('onEditCancel'),
			onEditSubmit: () => console.log('onEditSubmit'),
		},
	},
	toolbar: {
		actionBar: {
			actions: {
				left: [
					{
						id: 'add',
						label: 'Add Repo',
						bsStyle: 'info',
						icon: 'talend-plus-circle',
						onClick: () => console.log('add.onClick'),
					},
					{
						id: 'delete',
						label: 'Delete Repo',
						bsStyle: 'danger',
						icon: 'talend-minus-circle',
						onClick: () => props.deleteRepo(),
					},
				],
			},
		},
		// display: {
		// 	onChange: () => console.log('display.onChange'),
		// },
		// sort: {
		// 	field: 'name',
		// 	onChange: () => console.log('sort.onChange'),
		// 	options: [{ id: 'id', name: 'Id' }, { id: 'name', name: 'Name With Multiple Words' }],
		// },
		filter: {
			docked: props.isFilterOpen,
			onBlur: () => console.log('filter.onBlur'),
			onFocus: () => console.log('filter.onFocus'),
			onFilter: (e, str) => props.reposFilter(str),
			onToggle: () => {
				props.toggleFilter(!props.isFilterOpen);
				props.reposFilter('');
			},
			placeholder: 'search for something',
		},
	},
});

const getItems = props => {
	console.log({ filterRepos: props.filteredRepos });
	let items = [];
	const generateItem = repo => ({
		id: repo.id,
		name: repo.name,
		description: repo.description,
		homepage: repo.homepage,
		language: repo.language,

	});

	if (props.filteredRepos) {
		items = props.filteredRepos.map(repo => generateItem(repo));
	} else if (props.userRepos) {
		items = props.userRepos.map(repo => generateItem(repo));
	}
	return items;
};

const getListProps = props => {
	const defProps = defaultProps(props);
	return ({
		...defProps,
		list: {
			...defProps.list,
			itemProps: getItemProps(props),
			items: getItems(props),
		},
	});
};

function UserRepos(props) {
	useEffect(() => {
		props.loadRepos(props.reposUrl, 5);
	}, [props.reposUrl]);

	const [{ isDrawerShown, item }, setShowDrawer] = useState({ isDrawerShown: false, item: null });
	const [isFilterOpen, toggleFilter] = useState(true);

	const { userRepos } = props;
	if (!userRepos) return null;

	const listProps = getListProps({ ...props, setShowDrawer, isDrawerShown, isFilterOpen, toggleFilter });

	return (
		<React.Fragment>
			<List {...listProps} />
			{ isDrawerShown && <RepoDrawer item={userRepos.find(el => el.id === item.id)} />
			}
		</React.Fragment>
	);
}


UserRepos.propTypes = {
	userRepos: PropTypes.arrayOf(PropTypes.object),
	reposUrl: PropTypes.string,
};

const mapStateToProps = state => ({
	reposUrl: state.users.user.repos_url,
	userRepos: state.users.userRepos,
	filteredRepos: state.users.filteredRepos,
	selectedIds: state.users.selectedIds,
	isDrawerShown: state.users.isDrawerShown,
});

const mapDispatchToProps = dispatch => ({
	loadRepos: (url, id) => dispatch(fetchRepos(url, id)),
	onItemToggle: id => dispatch(onToggle(id)),
	selectAll: () => dispatch(onSelectAll()),
	reposFilter: str => dispatch(filterRepos(str)),
	deleteRepo: () => dispatch(deleteRepo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRepos);

