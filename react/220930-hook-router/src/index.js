import React from 'react';
import ReactDOM from 'react-dom/client';
import Hook from './1HooksEffect';
import Reducer from './2HooksReducer'
import Memo from './3HooksMemo';
import Origin from './4Origin';
import UseSass from './5UseSass';
import CSSModule from './6CSSModule'
import StyleComponent from './7StyledComponent';
import Example66 from './ex66';
import Example66_2 from './ex66_2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Hook />
    <hr />
    <Reducer />
    <hr />
    <Memo /> */}
    {/* <Origin />
    <hr />
    <UseSass />
    <hr />
    <CSSModule />
    <hr />
    <StyleComponent />
    <hr /> */}
    {/* <Example66 /> */}
    <Example66_2 />
  </React.StrictMode>
);
