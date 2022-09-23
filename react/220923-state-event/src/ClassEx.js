import React, { Component } from 'react';

class ClassEx extends Component {
    state = {
        num : 0
    }

    render() {
        return (

            <div>
                <h3>Class Example 1</h3>
                <p> 여기 숫자! {this.state.num}</p>
                <button onClick={() => 
                {
                    // this.setState({num : this.state.num + 2});
                    this.setState(prevState => { 
                        return {num : prevState.num + 2 }
                });
                }}>+2</button>

                <button onClick={() => 
                {
                    // this.setState({num : this.state.num - 1});
                    this.setState(prevState => { 
                        return {num : prevState.num - 1 }
                    });

                }}>-1</button>

                
            </div>
        )
    }

}

export default ClassEx;