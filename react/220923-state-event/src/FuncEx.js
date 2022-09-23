import React, {useState} from 'react';

function FuncEx() {

    const [num, setNum] = useState(0);

    function Increase() {
        setNum(num + 1);
    }

    function Decrease() {
        setNum(num - 2);
    }
    
    return (


        <div>
            <h3>함수형 컴포넌트</h3>
            <h4> 여기 숫자 = {num} </h4>
            
            <button onClick={Increase}>Increase(+1)</button>
            <button onClick={Decrease}>Increase(-2)</button>
        </div>
    )
}

export default FuncEx;