import { useState } from "react";

const EventComponentQ = () => {

  const [menu, setMenu] = useState("메뉴를 선택하세요");
  let changeMenu = (e) => {
    setMenu(e.target.value);
  }


  return (
    <div>
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
      <h3>{menu}</h3>

    </div>

  )
}

export default EventComponentQ