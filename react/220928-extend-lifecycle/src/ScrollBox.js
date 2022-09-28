import React, { Component,createRef } from 'react';

class ScrollBox extends Component {

    box = React.createRef();
    // ScrollBottom = () => {
    //     const {scrollHeight, clientHeight} = this.box;
    //     this.box.scrollTop = scrollHeight - clientHeight;
    // }
    // ScrollTop = () => {
    //     const {scrollHeight, clientHeight} = this.box;
    //     this.box.scrollTop = 0;
    // }

    ToBottom = () => {
        const {scrollHeight, clientHeight} = this.box.current; //여기서 this.box의 div는 current에 들어있는 것이다! (안쓰면 작동안함~! 지시를 안해줬기 때문에!)
        this.box.current.scrollTop = scrollHeight - clientHeight;
    }

    ToTop = () =>  {
        this.box.current.scrollTop = 0;
    }


    render() {
        const box = {
            border : '1px solid black',
            width : '300px',
            height : '400px',
            overflow : 'auto',
            position : 'relative',
            scrollBehavior: 'smooth'
        };

        const innerBox = {
            width: '100%',
            height: '1000px',
            background: 'linear-gradient(white, skyblue)'
        }

        return(
            
            <>
            {/* <div style={box} ref={(ref) => {this.box = ref}}> */}
            <div style={box} ref={this.box}>
                <div style={innerBox}></div>
            </div>
            <button onClick={this.ToBottom}>아래로</button>
            <button onClick={this.ToTop}>위로</button>
            </>
        )
    }

}

export default ScrollBox;