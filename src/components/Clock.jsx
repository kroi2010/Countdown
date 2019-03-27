import React from 'react';
import { debug } from 'util';

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
            <div>
                <div className="clock-days">{this.state.days} day{this.state.days > 1 ? "s" : ""}</div>
                <div className="clock-hours">{this.addZero(this.state.hours)} hour</div>
                <div className="clock-minutes">{this.addZero(this.state.minutes)} minute</div>
                <div className="clock-seconds">{this.addZero(this.state.seconds)} second</div>
            </div>
        )
    }
}

export default Clock;