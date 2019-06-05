import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List, Drawer } from '@talend/react-components';
import cloneDeep from 'lodash/cloneDeep';

import { fetchRepos } from '../../actions/userActions';

import './userRepos.scss';



const actions = [
	{
		id: 'edit',
		label: 'edit',
		icon: 'talend-pencil',
		onClick: () => console.log('onEdit'),
	},
	{
		id: 'delete',
		label: 'delete',
		icon: 'talend-trash',
		onClick: () => console.log('onDelete'),
	},
	{
		id: 'related',
		displayMode: 'dropdown',
		label: 'related items',
		icon: 'talend-folder',
		items: [
			{
				label: 'document 1',
				onClick: () => console.log('document 1 click'),
			},
			{
				label: 'document 2',
				onClick: () => console.log('document 2 click'),
			},
		],
		pullRight: true,
	},
];

const lotsOfActions = [
	{
		id: 'edit',
		label: 'edit',
		icon: 'talend-pencil',
		onClick: () => console.log('onEdit'),
	},
	{
		id: 'delete',
		label: 'delete',
		icon: 'talend-trash',
		onClick: () => console.log('onDelete'),
	},
	{
		id: 'copy',
		label: 'copy',
		icon: 'talend-files-o',
		onClick: () => console.log('onCopy'),
	},
	{
		id: 'parameters',
		label: 'efit parameters',
		icon: 'talend-cog',
		onClick: () => console.log('onEditParameters'),
	},
	{
		id: 'related',
		displayMode: 'dropdown',
		label: 'related items',
		icon: 'talend-folder',
		items: [
			{
				label: 'document 1',
				onClick: () => console.log('document 1 click'),
			},
			{
				label: 'document 2',
				onClick: () => console.log('document 2 click'),
			},
		],
		pullRight: true,
	},
];

const persistentActions = [
	{
		id: 'edit',
		label: 'edit',
		icon: 'talend-apache',
		onClick: () => console.log('onEdit'),
	},
];

const props = {
	id: 'talend',
	displayMode: 'table',
	list: {
		columns: [
			{ key: 'id', label: 'Id', order: 0 },
			{ key: 'name', label: 'Name', order: 1 },
			{ key: 'author', label: 'Author', order: 3 },
			{ key: 'created', label: 'Created', order: 2 },
			{
				key: 'modified',
				label: 'Modified',
				order: 4,
				header: 'icon',
				data: { iconName: 'talend-scheduler' },
			},
			{ key: 'icon', label: 'Icon', hidden: true, order: 5 },
		],
		items: [
			{
				id: 0,
				name: 'Title with actions',
				created: '2016-09-22',
				modified: '2016-09-22',
				author: 'Jean-Pierre DUPONT',
				actions,
				icon: 'talend-file-s3-o',
				display: 'text',
				className: 'item-0-class',
			},
			{
				id: 1,
				name: 'Title with a lot of actions',
				created: '2016-09-22',
				modified: '2016-09-22',
				author: 'Jean-Pierre DUPONT',
				actions: lotsOfActions,
				icon: 'talend-file-xls-o',
				display: 'text',
				className: 'item-1-class',
			},
			{
				id: 2,
				name:
					'Title with super super super super super super super super super super super super super super super super super super super super super super super super super super super super super super long title oh yeah',
				created: '2016-09-22',
				modified: '2016-09-22',
				author: 'Jean-Pierre DUPONT',
				icon: 'talend-file-xls-o',
				display: 'text',
				className: 'item-1-class',
			},
			{
				id: 3,
				name: 'Title in input mode',
				created: '2016-09-22',
				modified: '2016-09-22',
				author: 'Jean-Pierre DUPONT',
				icon: 'talend-file-json-o',
				display: 'input',
				className: 'item-2-class',
			},
			{
				persistentActions,
				id: 4,
				name: 'Super long title to trigger overflow on tile rendering',
				created: '2016-09-22',
				modified: '2016-09-22',
				author:
					'Jean-Pierre DUPONT with super super super super super super super super super super super super super super super super super super super super super super super long name, but there was not enough long text',
				className: 'item-3-class',
			},
		],
		titleProps: {
			key: 'name',
			iconKey: 'icon',
			displayModeKey: 'display',
			onClick: () => console.log('onTitleClick'),
			onEditCancel: () => console.log('onEditCancel'),
			onEditSubmit: () => console.log('onEditSubmit'),
		},
		itemProps: {
			classNameKey: 'className',
		},
	},
	toolbar: {
		actionBar: {
			actions: {
				left: [
					{
						id: 'add',
						label: 'Add Folder',
						bsStyle: 'info',
						icon: 'talend-plus-circle',
						onClick: () => console.log('add.onClick'),
					},
					{
						displayMode: 'splitDropdown',
						label: 'Add File',
						icon: 'talend-folder',
						onClick: () => console.log('onAdd'),
						items: [
							{
								label: 'From Local',
								onClick: () => console.log('From Local click'),
							},
							{
								label: 'From Remote',
								onClick: () => console.log('From Remote click'),
							},
						],
						emptyDropdownLabel: 'No option',
					},
				],
			},
		},
		display: {
			onChange: () => console.log('display.onChange'),
		},
		sort: {
			field: 'name',
			onChange: () => console.log('sort.onChange'),
			options: [{ id: 'id', name: 'Id' }, { id: 'name', name: 'Name With Multiple Words' }],
		},
		filter: {
			docked: true,
			onBlur: () => console.log('filter.onBlur'),
			onFocus: () => console.log('filter.onFocus'),
			onFilter: () => console.log('filter.onFilter'),
			onToggle: () => console.log('filter.onToggle'),
			placeholder: 'search for something',
		},
	},
};

const itemPropsForItems = {
	classNameKey: 'className',
	onOpen: () => console.log('onItemOpen'),
	onSelect: () => console.log('onItemSelect'),
	onToggle: () => console.log('onItemToggle'),
	onToggleAll: () => console.log('onToggleAll'),
	isSelected: item => true,
	onCancel: () => console.log('onTitleEditCancel'),
	onChange: () => console.log('onTitleChange'),
	onSubmit: () => console.log('onTitleEditSubmit'),
};


const selectedItemsProps = cloneDeep(props);
		selectedItemsProps.toolbar.actionBar.multiSelectActions = {
			left: [
				{
					id: 'remove',
					label: 'Delete selection',
					icon: 'talend-trash',
					onClick: () => console.log('remove'),
				},
			],
		};
		selectedItemsProps.list.itemProps = itemPropsForItems;


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
			itemProps: {
				isSelected: () => true,
				onSelect: () => {
					this.showDrawer();
					console.log('click');
				},
			},
		};

		return userRepos ?
			(
				<React.Fragment>
					<List displayMode="table" {...selectedItemsProps} />
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

