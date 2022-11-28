import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import PracticeDefault from './PracticeDefault';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const root = ReactDOM.createRoot(document.getElementById('root'));

function reducer(state, action) {

  if (action.type === 'INPUT') {

    return { money: state.money + Number(action.charge)};
  }

  if (action.type === 'OUTPUT') {
    return { money : state.money - action.charge};
  }

  return { money : 0};
}
const store = createStore(reducer,composeWithDevTools());


root.render(
  <>
    {/* <App /> */}
    <Provider store={store}>
      <PracticeDefault />
    </Provider>
  </>
);

