import React from 'react';
import Clock from './Clock';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Datepicker from './DatePicker/Datepicker';
import { MonthNames } from './DatePicker/Helper';

const GlobalStyle = createGlobalStyle`
  body {
    background: #1abc9c;
    width: 100vw;
    height: 100vh;
    margin: 0;
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
    
`
const TitleStyled = styled.section`
    text-align: center;
    font-size: 40px;
`

class App extends React.Component {
    constructor(props) {
        super(props);

        this.changeDeadline = this.changeDeadline.bind(this);

        this.state = {
            deadline: '',
            newDeadline: ''
        }
    }

    changeDeadline(newDate){
        this.setState({
            deadline: MonthNames[newDate.getMonth()]+" "+newDate.getDate()+", "+newDate.getFullYear()
        });
      }

    render() {
        const DatepickerData = {
            value: '+',
            function : this.changeDeadline,
            date: this.state.deadline=='' ? new Date() : this.state.deadline
        };

        return(
            <AppStyled>
                <GlobalStyle/>
                <Top>
                    <TitleStyled>Countdown to {this.state.deadline}</TitleStyled>
                    <Clock deadline={this.state.deadline}/>
                </Top>
                <Bottom>
                    {/*<input placeholder = "new date" onChange={e => this.setState({newDeadline: e.target.value})}/>*/}
                    <Datepicker {...DatepickerData}/>
                </Bottom>
            </AppStyled>
        )
    }
}

export default App;