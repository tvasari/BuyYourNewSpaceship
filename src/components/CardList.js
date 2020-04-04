import React from 'react';
import Card from './Card'
import './CardList.css'

const CardList = ({ ships }) => {
	return (
		<div id="container">
			{

				ships.map((el, i) => {
				return	<Card 
					name={ el.name }
					model={ el.model }
					manufacturer={ el.manufacturer }
					credits={ el.cost_in_credits }
					/>
				})
			}
		</div>		
	);
}

export default CardList;