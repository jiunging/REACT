// import logo from './logo.svg';
// import './App.css';

import { Fragment } from "react";
import MyComponent from "./component/MyComponent";


import MyComponent3 from "./component/MyComponent3";
import StateComponent from "./component/StateComponent";
import StateComponent2 from "./component/StateComponent2";

// app함수형 컴포넌트 return에 담기는 구문을 jsx라고 부른다.
// jsx는 자바스크립트에 html을 녹이는 형태
function App() {

  return (
    <Fragment>

      <h3>나의 첫번째 컴포넌트</h3>

      <MyComponent name="홍길동" phone={"010-1234-1234"} age={1}/>
      <br/>
      <MyComponent name="이순신" phone={"010-5678-5678"} age={2}/>
      <br/>
      <MyComponent name="엄준식" age={30}/>
      <br/>

      <MyComponent3 age={10}/>

      <hr/>

      <StateComponent/>

      <hr/>
      <StateComponent2/>




    </Fragment>
  );
}

export default App;
