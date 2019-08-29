import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'

//velopert source
const rootElement = document.getElementById('root');
ReactDOM.render(
  <App />, rootElement
);

if( module.hot ){
  module.hot.accept();
}
