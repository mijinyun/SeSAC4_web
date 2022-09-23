import React, { Component } from 'react';

class Handler_ex extends Component {

    state = {
        msg : "Hello World!"
    }

    eventClick = () => {
        if (this.state.msg == 'Goodbye World!') {
            this.setState ({
                msg : "Hello World!"})
            } else {
            this.setState ({
                msg : "Goodbye World!"
            })
            }
    }
    

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.eventClick}>클릭</button>
            </div>
        )
    }
}

export default Handler_ex;