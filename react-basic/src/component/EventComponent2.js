import { useState } from "react"

function EventComponent2() {

  // 스테이트를 객체로 관리하기
  let [data, setData] = useState({name: "", topic: ""})
  
  let handleInput = (e) => {
    // e.target.value = 현재 사용자가 입력한 값
    let value = {...data, [e.target.name]: e.target.value} // 기존값은 복사, 특정 키만 바꾸는 문법
    console.log(e.target.value);
    setData(value);
  }

  return (

    <div>
      <h3>인풋태그 핸들링</h3>

      <input type="text" onChange={handleInput} name="topic" value={data.topic} placeholder="할일"/> <br/>
      <input type="text" onChange={handleInput} name="name" value={data.name} placeholder="이름"/>
      <br/>
      <button type="button" onClick={ () => setData({name: "", topic: ""})}>초기화!</button>
      할일: {data.topic} , 이름: {data.name}

    </div>

  )

}

export default EventComponent2