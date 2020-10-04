import React from 'react'
import {  Divider, Segment,Card, Grid } from 'semantic-ui-react';
import YearFilters from './YearFilters'
import BooleanFilters from './BooleanFilters'
import Cards from './Cards'

const Layout = (props) => (

<Segment>

    <Grid columns={2} >
      <Grid.Column key="0gridcolunn" width={4}>
    
    <YearFilters filterApplied={props.filters.year} key="0yearfilters" startYear="2006" param={props.param} ></YearFilters>  
 <Divider horizontal>Successfull Launch</Divider>
    <BooleanFilters filterApplied={props.filters.launch_success} key="1booleanfilters" name='launch_success' param={props.param} ></BooleanFilters>  
<Divider horizontal>Successfull Landing</Divider>
<BooleanFilters filterApplied={props.filters.land_success} key="2booleanfilters" name='land_success' param={props.param} ></BooleanFilters>
</Grid.Column>

<Grid.Column key="1gridcolunn" width={12}>
<Card.Group itemsPerRow={4}>
        <Cards key="cards0" data={props.data}/>
        </Card.Group>
</Grid.Column>
</Grid>
</Segment>

)

export default Layout