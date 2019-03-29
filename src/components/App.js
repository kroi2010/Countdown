import React from 'react';
import Clock from './Clock';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Datepicker from './Datepicker/Datepicker'

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
const Button = styled.button`
    width: 50px;
    height: 50px;
    max-width: 50vw;
    max-height: 50vw;
    border-radius: 50%;
    border: 3px solid #23e7c0;
    color: #23e7c0;
    background: transparent;
    margin: 20px;
    font-size: 45px;
    line-height: 45px;
    transition: background 0.2s ease;
    cursor: pointer;

    &:hover{
        background: #ffffff;
    }
`

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: '',
            newDeadline: ''
        }
    }

    changeDeadline() {
        this.setState({
            deadline: this.state.newDeadline
        });
    }

    render() {
        return(
            <AppStyled>
                <GlobalStyle/>
                <Top>
                    <TitleStyled>Countdown to {this.state.deadline}</TitleStyled>
                    <Clock deadline={this.state.deadline}/>
                </Top>
                <Bottom>
                    {/*<input placeholder = "new date" onChange={e => this.setState({newDeadline: e.target.value})}/>*/}
                    <Button onClick={() => this.changeDeadline()}>+</Button>
                    <Datepicker label="Birthday" value="2000-08-15" />
                </Bottom>
            </AppStyled>
        )
    }
}

export default App;