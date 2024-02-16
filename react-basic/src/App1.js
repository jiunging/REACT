import IterationComponentQ2 from "./component/IterationComponentQ2";
import HookEffect from "./hook/HookEffect";
import HookRef from "./hook/HookRef";

import './css/App.css' // 컴포넌트와 동일한 이름으로 만들고 import
import myStyle from './css/App.module.css'

function App() {

  return(
    
    <>
      <HookEffect/>
      <hr/>
      <HookRef/>
      <hr/>
      <IterationComponentQ2/>

      <hr/>
      <h3 className="myApp">css파일로 디자인하기</h3>
      <h3 style={{backgroundColor : "red"}}>엄준식</h3>
      <h3 className={myStyle.app_wrap}>
        module.css파일로 디자인하기
        <span className={myStyle.app_item}>홍길동</span>
        
        </h3>
      
      <h3 className="title">module.css파일로 디자인하기</h3>

      <h3 className="public_style">public폴더에 css만들고 기본디자인</h3>

    </>
  )
}

export default App;