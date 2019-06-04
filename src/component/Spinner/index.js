import React from 'react';
import './Spinner.scss';

const Spinner = () => (
	<div className="spinner">
		<div className="loader">
			<div className="circle" />
			<div className="circle" />
			<div className="circle" />
		</div>
	</div>
);

export default Spinner;
