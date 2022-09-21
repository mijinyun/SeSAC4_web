import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Test5 extends Component {
    
    render() {
        
        return (
            <div>
                <h1>{this.props.text}</h1>
                {/* <button onClick={console}>콘솔 메세지</button> */}
                <button onClick={() => { console.log(this.props.valid)}}>콘솔 메세지</button>
            </div>
            
        )
    }
    static defaultProps = {
        text : '이건 기본 text props입니다.'
    }
    static propTypes = {
        name : PropTypes.string
    }

}



export default Test5;