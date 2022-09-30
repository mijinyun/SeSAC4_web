import React, {Component} from 'react';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name: '1',
            age : 1
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate(props,state) {
        console.log('componentDidUpdate');
        console.log('props : ' , props);
        console.log('state : ' , state); //콘솔찍어보면 이전 state가 나타나게됨. 즉, state :  {name: '1', age: 1}
        console.log('this state: ' , this.state); //콘솔확인하면 this state:  {name: 'hi', age: 1}가 나타남. 특정한 props나 state가 변경되었을 때 확인을 하기위해서 사용함.

        if ( state.age != this.state.age) { //특정한 props나 state가 변경되었을 때 확인을 하기위해서 사용함. //state에서 age가 바뀔때만 실행.
            console.log('age change');
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <div>
                라이프사이클 {this.state.name}
                <button onClick={() => {this.setState({name:'hi'})}}>버튼</button>
                <button onClick={() => {this.setState({age:2})}}>버튼</button>
            </div>
        )
    }
}

export default LifeCycle;