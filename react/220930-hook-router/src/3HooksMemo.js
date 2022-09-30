import {useState, useMemo, useEffect,useCallback,useRef} from 'react';


function getAverage(list) {
    console.log('getAverage');
    var sum =0;
    if (list.length == 0) return sum;
    for (let i =0; i< list.length; i++) {
        sum = sum + list[i];
    }
    return sum /list.length;
}

const Memo =() => {
    const [list,setList] = useState([]);
    const [num, setNum] =useState(0);

    const input = useRef(null); //기본으로 연결된 요소를 여기로 보낼 수도 있음(null :초기값 연결할 요소가 없고 그럴경우 null 이나 아무것도 안쓰기도함.)

    // const onChange = e => {
    //     setNum(e.target.value);
    // }

    // const onInsert = e=> {
    //     setList([...list,parseInt(num)]);
    //     // const nextList = list.concat(parseInt(num));
    //     // setList(nextList);
    //     setNum(0);
    // }


    // 위 onChnage, onInsert를 아래에 useCallback을 사용해서 쓸수 있음.
    const onChange = useCallback (e => {
        setNum(e.target.value);
    },[]);  //안에 state를 안쓰기 때문에 빈배열로 해도됨.

    const onInsert = useCallback (e => {
        setList([...list,parseInt(num)]);
        setNum("");
        input.current.focus();
    },[num,list]); // num이랑 , list state를 둘다 쓰고있기 때문에 불러와줘야한다. 만약 안쓰면 여기서 num은 0값만 계쏙 가져올거다.

    const avg = useMemo(() => getAverage(list),[list]); // [list]가 바뀔때만(내가 원하는 것만) 실행을 하도록 설정하는 것. 
    
    // 위 코드 30번째줄을 아래처럼 바꿀 수 있다. 
    // const [avg,setAvg] =useState(0);
    // useEffect(() => {
    //    setAvg(getAverage(list));
    // },[list]);
    return (
        <div>
            <input value={num} onChange={onChange} ref={input}/>
            <button onClick ={onInsert}>등록</button>

            <ul>
                {list.map((v,i) => {
                    <li key={i}>{v}</li>
                })}
            </ul>

            <div>
                {/* <b>평균값: {getAverage(list)} </b> */}
                <b>평균값: {avg} </b>
            </div>

        </div>
    )

}

export default Memo;