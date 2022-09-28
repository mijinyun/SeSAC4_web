import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Ref from './Ref';
import Validation from './Validation';
import App2 from './App2';
import Scroll from './Scroll';
import ScrollBox  from './ScrollBox';
import App3 from './App3';
import LifeCycle from './LifeCycle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <Ref />
    <Ref /> */}
    {/* <Validation /> */}
    {/* <App2>
    <Scroll />
    </App2> */}

    {/* 1. 기존 콜백함수 사용해서 */}
    {/* <App3>
      <ScrollBox />
    </App3> */}

    {/* 2. createRef 사용해서 */}
    {/* <ScrollBox /> */}

    <LifeCycle />
  </React.StrictMode>
);
