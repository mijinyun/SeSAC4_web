import React, { Component } from 'react';

class Event extends Component {

    state = {
        message:""
    }

    constructor(props) {
        super(props);
        this.eventChange = this.eventChange.bind(this);
        this.eventClick = this.eventClick.bind(this);
    }

    eventChange(e) {
    // eventChange = (e) => { : 이렇게 메서드를 정의하면 컨스트럭트를 안해도 된당.
        this.setState({
            [e.target.name]: e.target.value //key를 []로 감싸면 그 안에 넣은 실제값이 key로 사용된다.
        })
    }

    eventClick() {
    // eventClick = () => { : 이렇게 메서드를 정의하면 컨스트럭트를 안해도 된당.
        alert(this.state.username + ": " + this.state.message);
        this.setState({ 
            username:"",
            message : ""});
    }

    eventKeyPress = (e) => {
        if (e.key === "Enter") {
            this.eventClick();
        }
    }

    render() {
        return (
            <div>
                <h1>리액트의 이벤트!!</h1>


                <input 
                    type = "text"
                    name = "username"
                    placeholder='사용자 이름'
                    value={this.state.username}
                    onChange={this.eventChange}
                />

                <input 
                    type = "text"
                    name = "message"
                    placeholder = '이곳에 입력해보세요.'
                    value={this.state.message}
                    // onChange={ (e) => { this.setState({ message : e.target.value}) }} 
                    onChange={this.eventChange}
                    onKeyPress = {this.eventKeyPress}
                />

                {/* <button onClick={ () => {
                    alert(this.state.message);
                    this.setState({ message : ""}); //다시 공백으로 만들어줌.
                }}>클릭</button> */}

                <button onClick={this.eventClick}>클릭</button>
            </div>
        );
    }
}

export default Event;