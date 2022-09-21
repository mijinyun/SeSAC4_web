import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
// import ClassComponent from './ClassComponent';
//import ClassTestComponent from './Test';
//import ClassTest2Component from './Test2';
// import Test3 from './test3';
// import Test4 from './Test4';
import Test5 from './Test5';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 부모가 자식에게 ClassComponent함수를 호출할때 name과 location을 보낸다.
  // <ClassComponent name = {1} location="문래"> 
  //   <App />
  // </ClassComponent>
  
  // <ClassComponent> 
  //   <App />
  // </ClassComponent>


  //컴포넌트 실습!!!!
  // <>
  //   <App />
  //   <ClassTestComponent name='윤미진'></ClassTestComponent>
  //   <ClassTest2Component></ClassTest2Component>
  // </>

  //props실습1!!!
  // <Test3 food = '떡볶이'></Test3>

  //porps실습2!!
  // <Test4 title='나의 하루는 4시 30분에 시작된다' author='김유진' price='13,500원' type='자기계발서'></Test4>

  //props실습3!!
  <Test5 text="App 컴포넌트에서 넘겨준 text props입니다." valid="콘솔 띄우기 성공!"></Test5>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
