import React from 'react';
import { useParams } from "react-router-dom";
import {useSelector} from "react-redux";
import Diary, { TDiary } from "./Diary";

type RootState = {
  dates: []
  diaries: TDiary[]
}

export default function Date() {
  const { date } = useParams();
  const allDiaries: TDiary[] = useSelector((state: RootState) => state.diaries); 
  //위는 RootState에서 diaries만 가져오기때문에 TDiary[]를 쓴것.
  const diaries = allDiaries.filter((diary) => diary.date == date );

  return (
    <>
      <h2>{date}</h2>
      {diaries.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {diaries.map((diary:TDiary) => (
            <Diary diary={diary} key={diary.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
