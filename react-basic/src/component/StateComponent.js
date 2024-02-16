import { useState } from "react"

function StateComponent() {
  // 함수형 컴포넌트에서 userState() 훅을 사용한다.
  // const arr = useState("초기값")
  // console.log(arr);
  // let data = arr[0];
  // let setData = arr[1];

  let [data, setData] = useState("지엉아 정신차려");
  let [color, setColor] = useState("black");


  let change = function() {
    setData("지엉이 정신을 차렸습니다!") // state 값을 체인지 -> 화면을 다시 그리게 된다
    console.log(data)
  }

  // 1st
  // let unChange = () => {
  //   setData("지엉아 정신차려")
  // }

  // 2nd
  // let unChange = () => setData("지엉아 정신차려");

  return (
    <div>
      {/* style= {{속성명: 값}}*/}
      <h3 style={{color: color}}>스테이트 사용하기</h3>

      <button type="button" onClick={change}>정신차려!</button>

      <button type="button" onClick={() => setData("지엉아 정신차려!")}>다시 자도 돼!</button>

      <button type="button" onClick={ () => setColor("red")}>붉은색</button>

      {data}
    </div>
  )
}

export default StateComponent