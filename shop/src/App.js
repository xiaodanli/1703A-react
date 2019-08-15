import React from 'react';
import Router from '@/router'
import 'antd-mobile/dist/antd-mobile.css';
import {Provider} from 'react-redux'
import store from '@/store'

function App() {
  return <Provider store={store}>
      <Router/> 
  </Provider>
}

export default App;
