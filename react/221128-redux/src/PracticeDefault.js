import { createRef, useEffect, useRef, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'; 


function PracticeDefault() {
  const money = useSelector((state) => state.money);
  // console.log(money);

  return (
    <div style={{textAlign: 'center'}}>
      <h1>코딩온 은행</h1>
      <h3>잔액 : {money}원</h3>
      <Button />
    </div>
  );
}

const Button = () => {
  const money = useSelector((state) => state.money);
  const dispatch = useDispatch();

  // 1. useRef 사용해보기
  const charge2 = useRef();

  // 2. useState 사용해보기
  const [charge , setCharge] = useState();


  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      
      <input type="text" ref={charge2} placeholder='입금'/>
      <button type='button' onClick={() => {dispatch({type:'INPUT', charge: charge2.current.value})}}>입금</button>

      <input type="text" onChange={(e) => setCharge(Number(e.target.value))} placeholder='출금'/>
      <button type='button' onClick={() => {dispatch({type:'OUTPUT', charge: charge})}}>출금</button>
    </div>
  )
}


export default PracticeDefault;
