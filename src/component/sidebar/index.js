import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { SidePanel } from '@talend/react-components';

export default class Sidebar extends Component {
	constructor() {
		super();
		this.state = {
			docked: true,
		};
	}
	toggleDock = () => {
		this.setState({
			docked: !this.state.docked,
		});
	}

	render() {
		const actions = [
			{
				label: 'About',
				icon: 'talend-user-circle',
				onClick: () => hashHistory.push('/#about'),
			},
			{
				label: 'Repos',
				icon: 'talend-hierarchical-view',
				onClick: () => hashHistory.push('/#repos'),
			},
		];
		return (
			<SidePanel
				actions={actions}
				docked={this.state.docked}
				onToggleDock={() => this.toggleDock()}
			/>
		);
	}
}

