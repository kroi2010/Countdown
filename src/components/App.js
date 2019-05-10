import React from 'react';
import Clock from './Clock';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Datepicker from './DatePicker/Datepicker';
import { MonthNames } from './DatePicker/Helper';
import CountdownElement from './CountdownElement/CountdownElement';

const GlobalStyle = createGlobalStyle`
  body {
    background: #1abc9c;
    width: 100vw;
    height: 100vh;
    margin: 0;
    & * {
        //font-family: Segoe UI;
    }

    & button:focus {
        outline: 0;
    }
  }
 `
const AppStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Top = styled.section`
    background: #ffffff;
    width: 100vw;
    flex-basis: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
const Bottom = styled.section`
    width: 100%;
    padding-top: 20px;
`
const TitleStyled = styled.section`
    text-align: center;
    font-size: 40px;
`
const CountdownContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`
class App extends React.Component {
    constructor(props) {
        super(props);

        this.addNewCountdown = this.addNewCountdown.bind(this);

        this.state = {
            countdownElements: [],
            selectedElement: null
        }
    }

    changeDeadline(newDate){
        this.setState({
            deadline: MonthNames[newDate.getMonth()]+" "+newDate.getDate()+", "+newDate.getFullYear()
        });
      }

    addNewCountdown(name, deadline){
        const newCountdown = {
            name,
            deadline
        }
        this.setState({
            countdownElements: [...this.state.countdownElements, newCountdown],
            selectedElement: newCountdown
        });
    } 

    selectCountdownElement(index) {
        if(!this.state.countdownElements.length > index+1){
            this.setState({selectedElement: this.state.countdownElements[index]})
        }
    }

    displayHeaderMsg = () => (this.state.selectedElement!==null) ? 'Countdown to ' + MonthNames[this.state.selectedElement.deadline.getMonth()]+" "+this.state.selectedElement.deadline.getDate()+", "+this.state.selectedElement.deadline.getFullYear() : 'Please, add new countdown:';

    renderSubText = () => (this.state.selectedElement!==null) ? <Clock deadline={this.state.selectedElement.deadline}/> : null;

    render() {
        const DatepickerData = {
            value: '+',
            function : this.addNewCountdown,
            date: this.state.selectedElement===null ? new Date() : this.state.selectedElement.deadline,
            buttonTheme: 'round'
        };

        const countdownElements = this.state.countdownElements;

        return(
            <AppStyled>
                <GlobalStyle/>
                <Top>
                    <TitleStyled>{this.displayHeaderMsg()}</TitleStyled>
                    {this.renderSubText()}
                </Top>
                <Bottom>
                    <Datepicker {...DatepickerData}/>
                    <CountdownContainer>
                    {countdownElements.length ? countdownElements.map((countdown) => (
                        <CountdownElement name={countdown.name} date={countdown.deadline}/>
                    )) : null}
                    </CountdownContainer>
                </Bottom>
            </AppStyled>
        )
    }
}

export default App;