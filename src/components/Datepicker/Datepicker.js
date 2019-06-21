import React from 'react';
import styled from 'styled-components';
import DatepickerMonth from './DatepickerMonth';
import {MonthNames} from './Helper'; 
import {NameField} from './NameField';
import TimePicker from '../TimePicker/TimePicker';

const DatepickerContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const HeaderRow = styled.div`
    font-weight: ${(props) => props.centered ? "normal" : "bold"};
    text-align: center;
    font-size: ${(props) => props.centered ? "1em" : "1.2em"};
    display: flex;
    flex-direction: row;
    justify-content: ${(props) => props.centered ? "center" : "space-between"};
    align-items: center;
    line-height: 1.5em;
`;

const Container = styled.div`
  padding: 15px;
  color: #15bfea;
  background: #21262d; 
  width: 100%;
  max-width: 300px;
  border-radius: 5px;
  position: absolute;
  z-index: 20;
  left: 0;
  right: 0;
  top: calc(100vh / 2 - 170px);
  margin: auto;
  box-shadow: 0 5px 29px 0px rgba(0,0,0,0.2),0 40px 50px -50px rgba(0,0,0,0.3);
`;
const DateButton = styled.button`
width: ${props => props.theme == 'round' ? '50px' : '100%'};
height: 50px;
max-width: 50vw;
max-height: 50vw;
border-radius: ${props => props.theme == 'round' ? '50%' : '5px'};
border: 3px solid #23e7c0;
color: #23e7c0;
background: transparent;
font-size: ${props => props.theme == 'round' ? '45px' : '18px'};
line-height: 45px;
transition: background 0.2s ease;
cursor: pointer;
transition: transform 0.1s;
margin: 0 30px;

&:hover{
    background: #ffffff;
}

&:active{
    transform: scale(0.8);
}
`;
const Overlay = styled.div`
  background: rgba(0,0,0,0.8);
  position: absolute;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PreviousArrow = styled.div`
  width: 0;
  height: 0;
  border: solid transparent;
  border-color: rgba(136, 183, 213, 0);
  border-right-color: rgba(136, 183, 213, 0.3);
  border-width: 8px;
  cursor: pointer;
  margin: ${(props) => props.centered ? "0 15px" : "0"};

  :hover{
    border-right-color: rgba(136, 183, 213, 0.8);
  }
`;

const NextArrow = styled.div`
  width: 0;
  height: 0;
  border: solid transparent;
  border-left-color: rgba(136, 183, 213, 0.3);
  border-width: 8px;
  cursor: pointer;
  margin: ${(props) => props.centered ? "0 15px" : "0"};

  :hover{
    border-left-color: rgba(136, 183, 213, 0.8);
  }
`;
const ConfirmButtonHolderStyled = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;
const CancelButtonStyled = styled.button`
    width: 100%;
    color: #15bfea;
    font-weight: bold;
    line-height: 33px;
    letter-spacing: 1px;
    background: transparent;
    border: none;
    cursor: pointer;

    &::before{
        position: absolute;
        content: '';
        width: 1px;
        background-color: #15bfea;
        height: 0;
        transition: height 1s;
        top: 0;
        left: 50%;
    }
    
    &::after{

    }
    &:hover{
        width: 50%;
        &::before{
            height: 35px;
        }
    }
`;
const DummyButton = styled.button`
    width: 100%;
    background: transparent;
    border-radius: 5px;
    position: absolute;
    border: 1px solid #15bfea;
    height: 35px;
    pointer-events: none;
`;
const ConfirmButtonStyled = styled.button`
    background: transparent;
    border: none;
    color: transparent;
    margin-left: auto;
    padding: 0;
    width: 0;
    cursor: pointer;
`;


class Datepicker extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen : false,
            currentDate   : this.props.date,
            oldDate: new Date(this.props.date)
        }

        this.switchState = this.switchState.bind(this);
        this.changeDate = this.changeDate.bind(this);
        this.changeOldDate = this.changeOldDate.bind(this);
        this.handleNextMonthClick = this.handleNextMonthClick.bind(this);
        this.handleNextYearClick = this.handleNextYearClick.bind(this);
        this.handlePrevMonthClick = this.handlePrevMonthClick.bind(this);
        this.handlePrevYearClick = this.handlePrevYearClick.bind(this);
    }

    switchState(){
        this.setState({
            isOpen : !this.state.isOpen
        })
    }

    changeOldDate(date){
        this.setState({
            oldDate : date
        })
    }

    handlePrevMonthClick(){
        const param = {
            incr : false,
            obj  : "month"
        }

        this.changeDate(param);
    }

    handleNextMonthClick(){
        const param = {
            incr : true,
            obj  : "month"
        }

        this.changeDate(param);
    }

    handlePrevYearClick(){
        const param = {
            incr : false,
            obj  : "year"
        }

        this.changeDate(param);
    }

    handleNextYearClick(){
        const param = {
            incr : true,
            obj  : "year"
        }

        this.changeDate(param);
    }

    changeDate(param){

        let newDate = this.state.currentDate;

        if(param.incr){
            
            switch(param.obj){
                case "month" : newDate.setMonth(newDate.getMonth() + 1);
                               break;
                case "year"  : newDate.setYear(newDate.getFullYear() + 1);
                               break;
            }
        }else{
            
            switch(param.obj){
                case "month" : newDate.setMonth(newDate.getMonth() - 1);
                               break;
                case "year"  : newDate.setYear(newDate.getFullYear() - 1);
                               break;
            }
        }

        this.setState({
            currentDate : newDate
        });
    }


    render() {
        const MonthData = {
            date         : this.state.currentDate,
            function     : this.props.function,
            closeCalendar: this.switchState,
            changeOldDate: this.changeOldDate,
            oldDate      : this.state.oldDate
        };

        const TimepickerData = {
            buttonValue : 'Add Time'
        };    

        const DatepickerDiv = this.state.isOpen &&  <div><Overlay onClick={this.switchState}></Overlay>
                                            <Container>
                                            <NameField/>
                                            <HeaderRow centered><PreviousArrow centered onClick={this.handlePrevYearClick}></PreviousArrow>
                                            {MonthData.date.getFullYear()}<NextArrow centered onClick={this.handleNextYearClick}></NextArrow></HeaderRow>
                                          <HeaderRow><PreviousArrow onClick={this.handlePrevMonthClick}></PreviousArrow>
                                          {MonthNames[MonthData.date.getMonth()]}
                                          <NextArrow onClick={this.handleNextMonthClick}></NextArrow></HeaderRow>
                                        <DatepickerMonth  {...MonthData}/>
                                        <TimePicker {...TimepickerData}/>
                                        <ConfirmButtonHolderStyled>
                                        <DummyButton></DummyButton>
                                        <CancelButtonStyled>Cancel</CancelButtonStyled>
                                        <ConfirmButtonStyled>Start Countdown!</ConfirmButtonStyled>
                                        </ConfirmButtonHolderStyled>
                                      </Container></div>;
                        
        return(
            <DatepickerContainer className="date-picker">
                <DateButton theme={this.props.buttonTheme} onClick={this.switchState}>{this.props.value}</DateButton>
                {DatepickerDiv}
            </DatepickerContainer>
        )
    }
}

export default Datepicker;