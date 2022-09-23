import React, { Component } from 'react';


class StateClass extends Component { //이 코드에서 component에 props를 받아라는게 정의되어있음.
    // 1. 기존 버전
    constructor(props) { //constructor는 인자로 props가 담겨있어야한다~!
        super(props); //부모클래스 생성자의 참조이다. super를 호출하기전에는 this를 사용할 수 없다.

        this.state = {
            name : 'SeSAC',
            cnt: 0,
            list : ['s','e','s','a','c']
        };//여러 변수들이 state에 묶여서 저장되는것이기 때문에 부를때는 state.~ 이렇게 하면된다.
    }
    //2. 최신 버전 - 구조체를 쓰지않고 그냥 state만 만들어서 쓸 수 도 있다.
    // state = {
    //     name : 'SeSAC',
    //     list : ['s','e','s','a','c'] 
    // };

    render() {
        return (
            <div>
                <div> {this.state.name} StateClass {this.state.cnt}</div>
                <button onClick={() => 
                    { 
                        // this.setState({name : '청년취업사관학교', cnt : this.state.cnt + 1}); 
                        // this.setState({name : '영등포 캠퍼스', cnt : this.state.cnt + 1});

                        this.setState(prevState => { 
                            //전달받고 리턴시켜서 순서대로 진행할 수 있는것..
                            return { cnt: prevState.cnt + 1 }
                        });
                        this.setState(prevState => {
                            return { cnt : prevState.cnt + 1 }
                        })
                        
                    }}>클릭</button>
                {/* setState ==> name을 청년취업사관학교로 바꾸라는것. 값이 바뀐친구만 렌더해라. 
                setState는 바꾸고싶은 것들만 적어주면 됨.*/}
                <button onClick={() => { this.setState({list : ['c','l','i']})}}>클릭2</button>
                <ul>
                    {this.state.list.map((txt) => {
                        return <li>{txt}</li>
                    })} 
                    {/* json안에서 반복문 돌릴때 사용하는거..?map..? */}
                </ul>
            </div>
        )
    }
}

export default StateClass;

{/* 
// var car1 = new Car();
// car1.getName();
// car1.name;

// class Car {
//     constructor() { //컨스트럭터는 클래스가 실행될때 가장먼저 실행되는 것!!!
//         this.name = '자동차';
//     }
// } */}