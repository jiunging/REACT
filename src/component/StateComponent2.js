import { useState } from "react";

function StateComponent2() {

  let [count, setCount] = useState(0);

  return (

    <div>
        <h2>실습(++연산자는 state를 즉시 바꾼다라는 의미겠죠?)</h2>
        
        <h2>카운트: {count}</h2>

      <button type="button" onClick={ () => setCount(count += 1)}>증가</button>

      <button type="button" onClick={ () => setCount(count -= 1)}>감소</button>
      <button type="button" onClick={ () => setCount(count = 0)}>초기화</button>
    </div>
  )
  
}

export default StateComponent2