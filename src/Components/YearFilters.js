import React from 'react'
import { Button,Divider } from 'semantic-ui-react'

const YearFilters = (props) => {
    const startYear = parseInt(props.startYear)
    const currentYear = new Date().getFullYear()
    const buttons = [];
    for(let i=startYear;i<=currentYear;i++){
        const isOdd = i%2===0;
    const customClass = props.filterApplied === i ? "applied" : "";
    buttons.push(<Button color="olive"  data="year" key={i.toString()} className={`${isOdd} ${customClass}`}  onClick={props.param.handleClick} >{i}</Button>)
    if(!isOdd){
        buttons.push( <Divider key={`${i.toString()}divider`} hidden />)
    }else {
        buttons.push(<Divider vertical hidden />)
    }
    }
return buttons  

}
export default YearFilters