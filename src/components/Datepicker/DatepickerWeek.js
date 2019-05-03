import React from 'react';

import styled from 'styled-components';
const Weekday = styled.div`
  display: block;
  flex: 1 0 0%;
  padding: 0.2em;
  font-size: 1em;
  text-align: center;
`;

export default function DatepickerWeek({title}){
        return(
            <Weekday>{title}</Weekday>
        )
    
}