import React from 'react';

import styled from 'styled-components';

const DayButton = styled.button`
  display: block;
  flex: 1 0 0%;
  width: calc(100% / 7);
  margin: 0 ;
  padding: 0.8em;
  border: 1px solid #15bfea;
  border-right: none;
  border-bottom: none;
  background: ${props => props.selected ? "#fffff" : "transparent"};
  color: ${props => props.selected ? "#21262d" : "#15bfea"};
  cursor: ${props => props.disabled ? "default" : "pointer"};

  :last-child{
      border-right: 1px solid #15bfea;
  }

  :hover{
      background: ${props => props.disabled ? "transparent" : "#15bfea"};
      color: ${props => props.disabled ? "15bfea" : "#21262d"};
  }
`;

export default function DatepickerDay({date, selected, onDayClick, closeCalendar, changeOldDate}){
    if(selected){
        return <DayButton selected>{date.getDate()}</DayButton>
    }else{
        if(date){
            return <DayButton onClick={() => {
                onDayClick(date);
                closeCalendar();
                changeOldDate(date)
            }}>{date.getDate()}</DayButton>
        }else{
            return <DayButton disabled></DayButton>
        }
    }
   
}