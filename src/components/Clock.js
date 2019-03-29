import React from 'react';
import { debug } from 'util';
import styled from 'styled-components';

const ClockStyled = styled.span`
    margin: 10px;
`
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor((time/1000/60/60) % 24);
        const days = Math.floor((time/1000/60/60/24));

        this.setState({
            days,
            hours,
            minutes,
            seconds
        });
    }

    addZero(num) {
        return num < 10 ? "0" + num : num;
    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    render() {

        return(
            <Container>
                <ClockStyled>{this.state.days} day{this.state.days > 1 ? "s" : ""}</ClockStyled>
                <ClockStyled>{this.addZero(this.state.hours)} hour</ClockStyled>
                <ClockStyled>{this.addZero(this.state.minutes)} minute</ClockStyled>
                <ClockStyled>{this.addZero(this.state.seconds)} second</ClockStyled>
            </Container>
        )
    }
}

export default Clock;