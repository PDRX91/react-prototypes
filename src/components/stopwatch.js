import React, {Component} from 'react';
import Time from './format_time';


class Stopwatch extends Component {
    constructor(props){
        super(props);
        this.stop = this.stop.bind(this);
        this.update = this.update.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            status: 'stopped',
            start: null,
            elapsed: 0
        }
    }

    stop() {
        this.setState({
            status: 'stopped'
        })
    }

    start() {
        const {start, elapsed} = this.state;
        let newStart = new Date().getTime();
        if(start){
            newStart -= elapsed;
        }
        this.setState({
            status: 'running',
            start: newStart
        })
        setTimeout(this.update, 10);
    }

    update() {
        const {status, start} = this.state;
        if(status === 'running') {
            this.setState({
                elapsed: new Date().getTime() - start
            });
            setTimeout(this.update, 10);
        }
    }

    reset() {
        this.setState({
            status: 'stopped',
            start: null,
            elapsed: 0
        })
    }

    render() {
        const {elapsed} = this.state;
        return(
            <div className='jumbotron'>
                <h1 className="display-3"><Time elapsed={elapsed}/></h1>
                <hr className="my-3"/>
                <p className="lead text-center">{this.state.status}</p>
                <p className="text-center">
                    <button onClick={this.start.bind(this)} className='btn btn-outline-success mx-3'>Start</button>
                    <button onClick={this.stop} className='btn btn-outline-danger mx-3'>Stop</button>
                    <button onClick={this.reset} className='btn btn-outline-warning mx-3'>Reset</button>
                </p>
            </div>
        )
    }
}

export default Stopwatch;