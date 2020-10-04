import React from 'react'
import { List } from 'semantic-ui-react'
import ListItems from './ListItems'

const MissionLists = (props) => {
    return <List.List as='ul'size="small" bulleted className='missionName'>
       
            <ListItems data={props.data}/>
     
    </List.List>
        

}
export default MissionLists