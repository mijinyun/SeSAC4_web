import {useState, useEffect} from 'react';

//useEffect가 mount/ update/ unmount 합쳐진것

const Hook = () => {
    const [name, setName] = useState("");
    const [cnt, setCnt] = useState(0);

    const changeName = e => {    //input에 입력한 값이 이름에 쓰이게!
        setName(e.target.value);
    }

    const changeCnt = () => {
        setCnt(cnt+1);
    }

    useEffect(() => {
        console.log("useEffect");
        console.log("name : ",name);
    },[name]); // 빈배열을 넣으면 useEffect가 실행이 안됨. 첫번째는 함수를 받고 두번째인자는 업데이트를 관리함. [name]이라고 하면 useEffect가 실행이됨. 또한, 조건으로 [name]으로 name만 걸어주었기 때문에 cnt횟수가 바껴도 useEffect가 실행되지 않는다. 

    // 👆 위에 useEffect를 class형으로 쓴다면 아래와 같이 코드를 쓸 수 있다. 
    // componentDidUpdate(prevProps,prevState) {
    //     if (prevState.name != this.state.name) {
    //         //실행
    //     }
    // }

    useEffect(() => {
        console.log('name1 : ', name);     // 업데이트 직후 값
        return() => {
            console.log('name2 : ',name); // 얘가 먼저 콘솔이 찍히게 된다. (뒷정리 함수 -업데이트 되기 직전에 처리)
        }
    })
    return (
        <div>
            <div>
            <input value={name} onChange={changeName} />
            <button onClick={changeCnt}>+1</button>
            </div>
            <h3>이름 : {name}</h3>
            <h4>횟수 : {cnt}</h4>
        </div>
    )
}

export default Hook;