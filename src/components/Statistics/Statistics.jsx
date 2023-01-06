import PropTypes from "prop-types" 
import React from "react";
import { colorGenerator } from "utills";

import { Section, Title,StatList,Item, TabTitle, Percentage } from "./Statistics.styled";



export const Statistics=({title,stats})=>{ 
  const color ={background:colorGenerator()}
  return <Section>
    {title&&<Title>{title}</Title>}
   
     <StatList>
        {stats.map(({id,label,percentage})=>{
            return <Item key={id} style={color}>
            <TabTitle>{label}</TabTitle>
            <Percentage>{percentage}</Percentage>
          </Item>
        })} 
      
      
    </StatList> 
  </Section>
}

Statistics.propTypes={
    title:PropTypes.string.isRequired,
   stats:PropTypes.arrayOf(PropTypes.exact({
    id:PropTypes.string,
    label:PropTypes.string,
    percentage:PropTypes.number
   }).isRequired,)

}