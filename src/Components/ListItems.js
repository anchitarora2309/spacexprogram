import React from 'react'
import { List } from 'semantic-ui-react'

const ListItems = (props) => {
    
    const listItems = [];
    if(props.data){
        props.data.forEach((element,index) => {
            listItems.push(<List.Item key={index.toString()} as="li">{element}</List.Item>)
        });

    }
    
        
    return listItems
}
export default ListItems