import React, {Component} from 'react';

class EventClass extends Component {

    constructor(props) {
        super(props);

        this.printConsole = this.printConsole.bind(this); // printConsole이라는 함수에서 this를 쓰겠다. 여기서 this는 class 자식..? 근데 함수가 여러개면 bind는 불편한 방식 => 이를 해결하기 위해서 화살표 함수 사용!

    }
    printConsole (msg) {
        console.log("printConsole");
        console.log(msg);
        console.log(this); //여기서 this는 정의되지 않은 this라서 undefined가 나옴. 이것을 해결해주는게 바로 bind!!! 또는 화살표 함수 이용하기~!
    }

    printConsole2 = () => {
        console.log("printConsole2");
        console.log(this);
    }

    sendParameter = () => {
        this.printConsole('2')
    }

    render() {
        return (
            <div>
                <button onClick={this.printConsole}>printConsole</button>
                {/* 클래스에서는 함수명에도 this를 붙여서 정확히 찾아줘야한다. */}
                <button onClick={this.printConsole2}>printConsole2</button>

                <button onClick={this.sendParameter}>printConsole2</button>
                <button onClick={() => {this.printConsole('2')}}>printConsole2</button>
                {/* 위두개가 같은 코드! 그냥 함수안에 화살표함수 내용을 넣은거일 뿐임.*/}
            </div>
        )
    }
}

export default EventClass;