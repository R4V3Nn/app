import React from 'react';
import { Drawer } from '@talend/react-components';
import DrawerForm from '../DrawerForm';

import './repoDrawer.scss';

const RepoDrawer = props => (
	<Drawer>
		<DrawerForm {...props} />
		{/* <h2>Repo informarion:</h2>
		<ul className="drawer-items">
			{
				Object.keys(item).map(key => (
					typeof item[key] === 'string' ?
						<li>
							<span className="title">{`${key}:`} </span>
							<span>{`${item[key]}`}</span>
						</li> : null

				))
			}
		</ul> */}
	</Drawer>
);

export default RepoDrawer;
