import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App1';
import reportWebVitals from './reportWebVitals';

// id가 root인 태그를 받아서, 리액트 루트파일로 지정을 하고, App.js를 넣어준다.
// StrictMode - 개발단계에서 컴포넌트보다 더 먼저 실행, 버그를 찾는데 사용함 (사용 시에 2번씩 실행됨)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
