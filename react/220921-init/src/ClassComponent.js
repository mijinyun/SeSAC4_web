import React, { Component } from 'react';
//리액트에서 컴포넌트를 불러온 후, 사용
//클래스 컴포넌트를 쓰면 이 구조가 기본적 (외워라~!)
//클래스는 렌더함수안에서 리턴해야함.
import PropTypes from 'prop-types';


//1.클래스형 컴포넌트
class ClassComponent extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <h2>ClassComponent - function</h2>
                <h5> name : {this.props.name}</h5>
                <h5> location: {this.props.location}</h5>
            </div>
        );
    }
    static propTypes = {
        name : PropTypes.string
    } //ClassComponent.propTypes를 클래스 안에 넣어주고 싶으면 static ~ 이렇게해서 하면 됨!
}



// //2. 함수형 컴포넌트
// function ClassComponent (props) {   //부모컴포넌트 (index.js)에서 <ClassComponent name="SeSAC">지정을 해주면 props로 받아온다.
//     return (
        
//         <div>
//             {props.children}
//             <h2>ClassComponent - function</h2>
//             <h5> name : {props.name}</h5>
//             <h5> location: {props.location}</h5>
//         </div>
//     )
// }

ClassComponent.defaultProps = {
    name: '기본이름',
    location:'기본위치'
}

// ClassComponent.propTypes = {
//     name : PropTypes.string
// } 

// 이걸 설정해주기 위해서는 import PropTypes from 'prop-types'; 호출해줘야함!
// 이런 검사를 하는 이유는 자바스크립트가 너무 유연하기 때문에! 웬만하면 통과시키기 때문에 추후에 문제 생기는 것을 방지하기 위해서 타입을 확인하는 검사를 하면 좋음 (특히 자바스크립트만 이용할 때 많이 씀)
export default ClassComponent;