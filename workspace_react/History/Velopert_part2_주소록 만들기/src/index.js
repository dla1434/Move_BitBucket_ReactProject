import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App'; //App.js에서 js 확장자는 생략 가능

const rootElement = document.getElementById('root');

ReactDom.render(<App />, rootElement);
