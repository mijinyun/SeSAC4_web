import React from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";

type DiaryProps = {
  diary: TDiary;
}
export type TDiary = { //다른곳에서 TDiary쓰려고 export해주는 것.
  id: number;
  title: string;
  content: string;
  date: string;
}

//var r = { a:1, b:2 };
// var { a: abc, b } = r; // a변수를 abc로 쓰겠다는 뜻
const Diary = ({diary : d} : DiaryProps) => { //이렇게 쓰는 이유는 {diary:d}가 props임. 감싸져있는 형태이기때문에 동일하게 해야함.
  const [diary, setDiary] = useState<TDiary>(d); 
  // diary.~ 를 찾으면 property를 바로 찾을 수 있다.
  // diary.id.foreach 이런 거 다 오류난다. ( 숫자에서는 foreach 못한다! );
  const [isShow, setIsShow] = useState<boolean>(false);
  const dispatch = useDispatch();

  function toggleShow() {
    setIsShow(!isShow);
  }

  return (
    <tr>
      <td>{diary.title}</td>
      <td>{isShow && diary.content}</td>
      <td>
        <button onClick={toggleShow}>내용 {isShow ? "숨기기" : "보기"}</button>
        <button onClick={()=>{dispatch({type: 'DIARY/DELETE', id: diary.id}); }} className="btn_del">
          삭제
        </button>
      </td>
    </tr>
  );
}
export default Diary;