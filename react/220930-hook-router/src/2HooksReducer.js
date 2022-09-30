import {useReducer} from 'react';

const Reducer = () => {

    //함수형 컴포넌트 바깥에서 하는것. useState가 컴포넌트 안에서만 동작할 수 있다는 것을 극복한 것이 바로 useReducer
    function reducer(state,action) { //두개의 파라미터를 받는다. 
        switch (action.type) {  //{dispatch({type: 'DECREMENT'})} 이렇게 전달받았기 때문에 action.type으로 실행하는 것. 
            case "INCREMENT":
                return {value: state.value + 1};
            case "DECREMENT":
                return {value: state.value - 1};
            default:
                return state;
        }
    }

    const [state,dispatch] = useReducer(reducer, {value:0});  //첫번째 파라미터는 함수!(즉, 이름은 내맘대로), 두번째파라미터는 reducer의 기본값. 리듀서가 상태를 관리하는데 그상태의 기본값. 즉.state의 value값이 0이다 라는 것. 
    // 여기서 [state,dispatch]에서 state는 reducer함수의 state, 현재 상태값! dispatch는 무언가 행동할 수 있게하는 것(함수가 반환..?).dispatch는 필요한 액션값을 전달받음. 그것은 아래 {dispatch({type: 'DECREMENT'})} 여기서 전달받은것! 이것이 reducer함수에서의 action이 전달받는것?

    return(
        <div>
            <h1>{state.value}</h1>

            <button onClick={() => {dispatch({type: 'DECREMENT'})}}>-1</button>
            <button onClick={() => {dispatch({type: 'INCREMENT'})}}>+1</button>
        </div>
    )
}

export default Reducer;