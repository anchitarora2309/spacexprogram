import React from 'react'
import Tile from './Tiles'
const Cards = (props) => {
    const cards= []
    props.data.forEach((element,index) => {
        cards.push(<Tile key={index.toString()} data={element} />)
        
    });
   return cards;
}
export default Cards