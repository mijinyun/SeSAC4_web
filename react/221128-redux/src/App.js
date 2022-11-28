import './App.css';
import { useState } from 'react';

import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux'; 
//Provider : 어디서 store를 사용할지 알려주는 것. state를 관리하고 싶은 것의 최상위에 있어야함.
//어떤 스토어를 전달할건지 써줘야함.
// useSelector => 리덕스에서 getState()같은 역할 // provider로 감싸져있는 것만 useSelector를 쓸수가있음.

function reducer(state, action) {
  // state : 현재 상태의 state => 아직 바뀌기 전.
  // action : dispatch를 실행할 때 넣었던 객체

  if ( action.type === 'INCREASE') {
    return { number : state.number + 1 }
  }

  if ( action.type === 'DECREASE') {
    return { number : state.number - 1 }
  }

  return { number : 1};
}
const store = createStore(reducer);
function App() {

  return (
    // App에서 Provider를 사용하였기 때문에 App은 useSelector가 적용되는게 아니고 그 하단의 것들이 쓰이는것...?
    <Provider store={store}>
      <div id="app">
        <h1>number : {}</h1>
        <Box1 />
      </div>
    </Provider>
  );
}

const Box1 = () =>{
  const number = useSelector((state) => state.number); //일반 js에서의 getState()역할
  console.log('Box1');
  return (
    <div>
      <h2>Box1 컴포넌트 number : {number}</h2>
      <Box2 />
    </div>
  )
}

const Box2 = () =>{
  const number = useSelector((state) => state.number); 
  console.log('Box2');
  return (
    <div>
      <h3>Box2 컴포넌트 number : {number}</h3>
      <Box3 />
    </div>
  )
}
const Box3 = () =>{
  const number = useSelector((state) => state.number); 
  const dispatch = useDispatch();
  console.log('Box3');
  return (
    <div>
      <h4>Box3 컴포넌트 number : {number}</h4>
      <input type="button" value="+" onClick={() => {dispatch({type:'INCREASE'})}}/>
      <input type="button" value="-" onClick={() => {dispatch({type:'DECREASE'})}}/>
    </div>
  )
}

export default App;
