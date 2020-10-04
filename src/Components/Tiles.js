import React from 'react'
import { List, Table,Image, Card } from 'semantic-ui-react'
import MissionLists from './MissionLists'
import './Tiles.css'

const Tile = (props) => {
    const cores = props.data.rocket.first_stage.cores;
    const flag = cores.length > 0 ? cores[cores.length-1].land_success : null;
    const landSuccess  = flag ? flag.toString():"";
    return <Card className="spaceship">
        <Image src={props.data.links.mission_patch_small}  />
        <Card.Content>
        <List floated='left' size="small" >
            <List.Item className='missions'><Table.HeaderCell>Mission Ids</Table.HeaderCell><MissionLists data={props.data.mission_id} /></List.Item>
            <List.Item > <Table.HeaderCell>Launch Year</Table.HeaderCell><Table.Cell>: {props.data.launch_year}</Table.Cell></List.Item>
            <List.Item > <Table.HeaderCell>Successful Launch</Table.HeaderCell><Table.Cell>: {`${props.data.launch_success}`}</Table.Cell></List.Item>
            <List.Item > <Table.HeaderCell>Successful Land</Table.HeaderCell><Table.Cell>: {landSuccess}</Table.Cell></List.Item>
        </List>

        </Card.Content>
    </Card>
        

}
export default Tile