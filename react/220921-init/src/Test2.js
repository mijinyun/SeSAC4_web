import React, { Component } from 'react';
import img from './img.jpg';

class ClassTest2Component extends Component {
    render() {

        const style = {
            color: 'orange',
            fontSize: '40px',
            padding: '20px'
        }

        return (
            <div style={style}>
                <h2>안녕하세요</h2>
                <img src={img}></img>
            </div>
        )
    }
}

export default ClassTest2Component;