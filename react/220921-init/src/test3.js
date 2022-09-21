import React, { Component } from 'react';

function Test3 (props) {

    return (
        <div>
            <h3> 좋아하는 음식 : <span style={{color:'red'}}>{props.food}</span> </h3>
            <h4> <span style={{color:'red'}}>{props.food}</span>는 최고야 </h4>
        </div>
    )
}

Test3.defaultProps = {
    food : '기본값'
}

export default Test3;