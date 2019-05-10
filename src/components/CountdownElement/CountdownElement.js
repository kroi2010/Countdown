import React from 'react';
import styled from 'styled-components';
import Datepicker from '../DatePicker/Datepicker';
import { MonthNames } from '../DatePicker/Helper';
const ElementStyled = styled.div`
border-radius: 5px;
color: #23e7c0;
background: #003e32;
display: flex;
flex-direction: column;
margin: 20px;
overflow: hidden;
box-shadow: 0 2px 8px rgba(0,0,0,0.3);
padding-bottom: 30px;
`;
const TitleStyled = styled.p`
    text-align: center;
    margin: 0;
    font-size: 22px;
    color: #000;
    padding: 20px 30px;
    background: #fff;
`;
const TimeStyled = styled(TitleStyled)`
    font-size: 20px;
    background: transparent;
    padding: 0 30px;
    margin: 10px 0;
    color: inherit;
`;
export default class CountdownElement extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            deadline:  MonthNames[this.props.date.getMonth()]+" "+this.props.date.getDate()+", "+this.props.date.getFullYear()
        }
    }

    render() {

        const DatepickerData = {
            value: 'Change',
            function : null,
            date: this.state.deadline=='' ? new Date() : this.state.deadline,
            buttonTheme: 'rectangle'
        };

        return(
            <ElementStyled>
                <TitleStyled>{this.props.name}</TitleStyled>
                <TimeStyled>{this.state.deadline}</TimeStyled>
                <Datepicker {...DatepickerData}/>
            </ElementStyled>
        );
    }
}