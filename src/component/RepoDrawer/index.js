import React from 'react';
import { Drawer } from '@talend/react-components';

import './repoDrawer.scss';

const RepoDrawer = props => {
	const { item } = props;

	return (
		<Drawer>
			<h2>Repo informarion:</h2>
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
			</ul>
		</Drawer>
	);
};

export default RepoDrawer;
