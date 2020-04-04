import React from 'react';
import './Card.css'
import deathstar from '../icons/deathstar.png';
import executor from '../icons/executor.png';
import imperialshuttle from '../icons/imperialshuttle.png';
import xwing from '../icons/x-wing.png';
import ywing from '../icons/y-wing.png';
import millenniumfalcon from '../icons/millenniumfalcon.png';
import tieadvancedx1 from '../icons/tieadvancedx1.png';
import ef76nebulonbescortfrigate from '../icons/ef76nebulon-bescortfrigate.png';
import sentinelclasslandingcraft from '../icons/sentinel-classlandingcraft.png';
import slave1 from '../icons/slave1.png';


const Card = ({ name, model, manufacturer, credits }) => {
	let mySrc;
	if (name.replace(/\s/g, '').toLowerCase() === 'deathstar') {
		mySrc = deathstar;
	} else if (name.replace(/\s/g, '').toLowerCase() === 'executor') {
		mySrc = executor;
	} else if (name.replace(/\s/g, '').toLowerCase() === 'imperialshuttle') {
		mySrc = imperialshuttle;
	} else if (name.replace(/\s/g, '').toLowerCase() === 'x-wing') {
		mySrc = xwing;
	} else if (name.replace(/\s/g, '').toLowerCase() === 'y-wing') {
		mySrc = ywing;
	} else if (name.replace(/\s/g, '').toLowerCase() === 'millenniumfalcon') {
		mySrc = millenniumfalcon;
	} else if (name.replace(/\s/g, '').toLowerCase() === 'tieadvancedx1') {
		mySrc = tieadvancedx1;
	} else if (name.replace(/\s/g, '').toLowerCase() === 'ef76nebulon-bescortfrigate') {
		mySrc = ef76nebulonbescortfrigate;
	} else if (name.replace(/\s/g, '').toLowerCase() === 'sentinel-classlandingcraft') {
		mySrc = sentinelclasslandingcraft;
	} else if (name.replace(/\s/g, '').toLowerCase() === 'slave1') {
		mySrc = slave1;
	}
	

	return (
		<div id="card">
			<img src={ mySrc } alt="logo"/>
			<ul>
				<li>
					<h2>Name: { name }</h2>
				</li>
				<li>
					<h3>Model: { model }</h3>
				</li>
				<li>
					<h4>By: { manufacturer }</h4>
				</li>
				<li>
					<h5>Price: { credits }</h5>
				</li>
			</ul>
		</div>
	);
};

export default Card;