import React, {Component, createRef} from 'react';

class Ref extends Component {

    event1 = () => {
        let input = document.getElementById('input1');
        console.log(input.value);
    }

    event2 = () => {                      //클래스에서는 화살표 함수 하는것 절대절대 잊지말기!!!! (this, bind 스터디 내용 참고!!!!)
        console.log(this.a.value);
    }

    input3 = createRef();   //createRef를 사용할 땐 이것을 꼭 작성해줘야한다~!
    event3 = () => {
        console.log(this.input3.current.value);
    }

    render() {
        return(<>
            <div>
                <input type= 'text' id = 'input1' /> 
                <button onClick={this.event1}>버튼</button>
            </div>
            <div>
                <input type= 'text' ref={(ref) => {this.a = ref }} />
                <button onClick={this.event2}>버튼2</button>
                
                <input type= 'text' ref={this.input3} />
                <button onClick={this.event3}>버튼3</button>
            </div>
        </>);
    }
}

export default Ref;