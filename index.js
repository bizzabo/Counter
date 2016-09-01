import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'
import storeFactory from './store/store'
import {Provider} from 'react-redux'


const store = storeFactory();
const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(
      <Provider store={store}>
        <Counter/>
      </Provider>,rootEl
  );
}

render()

