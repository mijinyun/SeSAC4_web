import React, {useState} from 'react'; // 새롭게 생긴것이기 때문에 useState를 불러와줘야함.

function StateFunction() {

    const [msg, setMsg] = useState(""); //StateClass에서 썼던 name, list같은거~ setMsg는 Msg의 뭐를 변경하기 위한 함수? useState() : 초기값
    const [list , setList] = useState([]);
    // this.state {
        // msg : ""  }
    

    function changeMsg() {
        setMsg("메세지")
        // Class 일 경우, setState{msg:"메세지"}
    }

    return (
        <div>
            <p>{msg}</p>
            StateFunction
            <button onClick={changeMsg}>클릭</button>
        </div>
    )
}

export default StateFunction;