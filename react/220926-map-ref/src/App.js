import React,{useState} from "react";

function App() {
  const [list, setList] = useState(['s','e','s']);
  // useState는 함수이기 때문에 함수안에 인자를 넣어줘야함. 즉, userState()이렇게
  // 검색기능을 만들때 useState를 사용하면 된다.

  // filter 설명 예시 
    function filterCheck() {
      let lists = ['test','testing','apple','sesac','hahaha'];

      // 방식1
      let newList = [];
      for (let i =  0; i <lists.length; i ++) {
        if (lists[i].length>4) { newList.push(lists[i])};
      }

      // 방식2
      let result = lists.filter((value) => {
        return value.length > 4;
      })
    } 
  //여기까지~!



  function addElement() {
    // list.push('s');     //이렇게만 작성할 경우 list에 추가는 되지만 웹에는 나타나 보이지 않음. --> useState를 써서상태를 변경해줘야함.
    // // 리액트에서 푸시를 쓰면 리스트변화를 감지하지 못함. => 자세한 이유 구글링해보기
    // setList(list);
    // console.log(list);

    //리액트에서 푸시는 재렌더링하는 함수에 영향을 못끼치기 때문에 전개구문[...Arg]을 사용해서 추가해줘야함.
    console.log([...list,'s']);
    setList([...list,'s']);

  }

  return (
    <div>
      <ul>
        {list.map((name,i) => {
          return <li key={'li_'+i}>{i}. {name}</li> //key로 index를 그대로 쓰는 건 좋지 않다. 
        })}

      </ul>
      <button onClick={addElement}>추가</button>
    </div>
  );
}

export default App;
