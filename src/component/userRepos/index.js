import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from '@talend/react-components';
import RepoDrawer from '../RepoDrawer';

import { fetchRepos, onToggle } from '../../actions/userActions';

import './userRepos.scss';


const getItemProps = props => ({
	classNameKey: 'list-item',
	onOpen: () => console.log('onItemOpen'),
	onSelect: (e, item) => console.log('onItemSelect ', item),
	onToggle: (e, item) => props.onItemToggle(item.id),
	onToggleAll: () => console.log('onToggleAll'),
	isSelected: item => item.id === props.selectedId,
	onCancel: () => console.log('onTitleEditCancel'),
	onChange: () => console.log('onTitleChange'),
	onSubmit: () => console.log('onTitleEditSubmit'),
});

const defaultProps = props => ({
	id: 'talend',
	displayMode: 'table',
	list: {
		columns: [
			{ key: 'id', label: 'Id', order: 0 },
			{ key: 'name', label: 'Name', order: 1 },
			{ key: 'description', label: 'Description', order: 3 },
			{ key: 'homepage', label: 'Homepage', order: 4 },
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
	// toolbar: {
	// 	// actionBar: {
	// 	// 	actions: {
	// 	// 		left: [
	// 	// 			{
	// 	// 				id: 'add',
	// 	// 				label: 'Add Folder',
	// 	// 				bsStyle: 'info',
	// 	// 				icon: 'talend-plus-circle',
	// 	// 				onClick: () => console.log('add.onClick'),
	// 	// 			},
	// 	// 			{
	// 	// 				displayMode: 'splitDropdown',
	// 	// 				label: 'Add File',
	// 	// 				icon: 'talend-folder',
	// 	// 				onClick: () => console.log('onAdd'),
	// 	// 				items: [
	// 	// 					{
	// 	// 						label: 'From Local',
	// 	// 						onClick: () => console.log('From Local click'),
	// 	// 					},
	// 	// 					{
	// 	// 						label: 'From Remote',
	// 	// 						onClick: () => console.log('From Remote click'),
	// 	// 					},
	// 	// 				],
	// 	// 				emptyDropdownLabel: 'No option',
	// 	// 			},
	// 	// 		],
	// 	// 	},
	// 	// },
	// 	display: {
	// 		onChange: () => console.log('display.onChange'),
	// 	},
	// 	sort: {
	// 		field: 'name',
	// 		onChange: () => console.log('sort.onChange'),
	// 		options: [{ id: 'id', name: 'Id' }, { id: 'name', name: 'Name With Multiple Words' }],
	// 	},
	// 	filter: {
	// 		docked: true,
	// 		onBlur: () => console.log('filter.onBlur'),
	// 		onFocus: () => console.log('filter.onFocus'),
	// 		onFilter: () => console.log('filter.onFilter'),
	// 		onToggle: () => console.log('filter.onToggle'),
	// 		placeholder: 'search for something',
	// 	},
	// },
});


const getListProps = props => {
	const defProps = defaultProps(props);
	return ({
		...defProps,
		list: {
			...defProps.list,
			itemProps: getItemProps(props),
			items: props.userRepos && props.userRepos.map(repo => ({
				id: repo.id,
				name: repo.name,
				description: repo.description,
				homepage: repo.homepage,

			})),
		},
	});
};

function UserRepos(props) {
	useEffect(() => {
		props.loadRepos(props.reposUrl, 5);
	}, [props.reposUrl]);

	const [{ isDrawerShown, item }, setShowDrawer] = useState({ isDrawerShown: false, item: null });

	const { userRepos } = props;
	if (!userRepos) return null;

	const listProps = userRepos ? getListProps({ ...props, setShowDrawer, isDrawerShown }) : {};

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
	loadRepos: PropTypes.func.isRequired,
	reposUrl: PropTypes.string,
};

const mapStateToProps = state => ({
	reposUrl: state.users.user.repos_url,
	userRepos: state.users.userRepos,
	selectedId: state.users.selectedId,
	isDrawerShown: state.users.isDrawerShown,
});

const mapDispatchToProps = dispatch => ({
	loadRepos: (url, id) => dispatch(fetchRepos(url, id)),
	onItemToggle: id => dispatch(onToggle(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRepos);

