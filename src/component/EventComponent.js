import { useState } from "react"

function EventComponent() {

  // input value값을 state로 관리
  const [topic, setTopic] = useState("")
  const [name, setName] = useState("")
  const [menu, setMenu] = useState("");


  let handleTopic = (e) => { // 이벤트 함수 첫번째 매개변수는 event객체
    console.log(e.target); // 현재 이벤트가 발생한 대상
    console.log(e.target.value) // 사용자가 입력한 값
    setTopic(e.target.value);
  }

  let handleName = (e) => setName(e.target.value);

  let handleChange = () => {
    alert(`${name} 님의 할 일 ${topic}`);
    setTopic("");
    setName("");
  }

  let handlePress = (e) => {
    if(e.key == "Enter") { // 사용자가 엔터를 눌렀음~
      handleChange();
    }
  }

  let changeMenu = (e) => {
    setMenu(e.target.value);
  }

  
  return (
    <div>
      <h3>인풋태그 핸들링</h3>
      <input type="text" onChange={handleTopic} value={topic} placeholder="할일"/> <br/>
      <input type="text" onChange={handleName} onKeyUp={handlePress} value={name} placeholder="이름"/> <br/>
      <button type="button" onClick={handleChange}>클릭!</button>
      할일: {topic}

      <hr/>

      <h3>셀렉트 태그 핸들링(실습)</h3>
      <h4>셀렉트 태그가 체인지될 때 선택한 결과를 아래에 출력</h4>
      <select onChange={changeMenu}>
        <option>피자</option>
        <option>치킨</option>
        <option>햄버거</option>
        <option>엄준식</option>
        <option>엄홍식</option>
        <option>잉?</option>
      </select>

      <h3>선택한 결과</h3>
      <h4>메뉴를 선택하세요</h4>
      <h3>{menu}</h3>


    </div>
  )
}

export default EventComponent