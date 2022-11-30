import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import {useNavigate} from 'react-router-dom';

function App() {

  const [ data , setData ] = useState();
  // const navigate = useNavigate();

  console.log(data);
  const searchContent = useRef();
  const search = () => {
    console.log(searchContent.current.value);

    axios({
      method: 'get',
      url: '/v1/search/news?query=' + encodeURI(searchContent.current.value) + '&display=20&sort=sim',
      headers: {'X-Naver-Client-Id':'EqQjdxZAA3_CVXsoDeVg', 'X-Naver-Client-Secret': 'hTMy6gJOY9'},
    })
    .then((res) => { return res.data.items})
    .then((data) => {
      setData(data);
    })
  }

  return (
    <div className="App">
      <div>
        <form className="search_section">
          검색 : <input type="text" ref={searchContent} name="searchContent" placeholder="검색창" />
          <button type="button" onClick={search}>검색</button>
          <button type="button">관련순</button>
          <button type="button">최신순</button>
        </form>
      </div>
      <hr />
      <div>
        <div className="result_section">
          {data && data.map((val) => <div><h3 onClick={() => {window.open(val.link)}}>{val.title}</h3><div>{val.description}</div><hr/></div> )}
        </div>
        <div className="page_number_section">
        </div>
      </div>
    </div>
  );
}

export default App;
