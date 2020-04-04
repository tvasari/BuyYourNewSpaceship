import React, { Component } from 'react';
import CardList from '../components/CardList'
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			ships: [],
			searchfield: '',
		}
	}

	componentDidMount() {
		fetch('https://swapi.co/api/starships/')
		.then(res => res.json())
		.then(ships => this.setState({ships: ships.results}))
	}

	render() {
		return(
			<div>
				<h1 className="tc ma3 f1">BUY NOW YOUR NEW SPACESHIP!</h1>
				<CardList ships={ this.state.ships }/>
			</div>

		);
	}


}

export default App;
