import React from 'react';
import Clock from './Clock';
import '../styling/App.css';

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
            <div className="app">
                <div className="app-title">Countdown to {this.state.deadline}</div>
                <Clock deadline={this.state.deadline}/>
                <div>
                    <input placeholder = "new date" onChange={e => this.setState({newDeadline: e.target.value})}/>
                    <button onClick={() => this.changeDeadline()}>Add new date</button>
                </div>
            </div>
        )
    }
}

export default App;