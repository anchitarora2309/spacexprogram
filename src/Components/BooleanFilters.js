import React from 'react'
import { Button } from 'semantic-ui-react'

const BooleanFilters = (props) => {
    
    return [<Button color="olive" onClick={props.param.handleClick} data={props.name} key={`${props.name.toString()}0`}>True</Button>,
        <Button color="olive" onClick={props.param.handleClick} data={props.name} key={`${props.name.toString()}1`}>False</Button>]
    
  

}
export default BooleanFilters