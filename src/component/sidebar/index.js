import React, { Component } from 'react';
import { browserHistory } from 'react-router';
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
				onClick: () => browserHistory.push('/about'),
			},
			{
				label: 'Repos',
				icon: 'talend-hierarchical-view',
				onClick: () => browserHistory.push('/repos'),
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

