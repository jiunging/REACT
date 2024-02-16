import { useState } from "react"

const EventComponentQ2 = () => {


  // let [um, setUm] = useState("");
  // let fuck;

  // let add = (e) => {
  //   fuck = e.target.value
  // }
  // let add2 = () => {
  //   setUm(fuck)
  // }

  const [form, setForm] = useState({data: "", result: ""})

  let handleChange = (e) => {
    setForm( {...form, data: e.target.value})
  }

  let handleClick = () => {
    // data값을 -> result에 넣는다. 그다음에 data는 초기화
    let obj = {data: '', result: form.data}
    setForm(obj)
  }

  return (

    <div>

      <h3>인풋데이터 핸들링(실습)</h3>
      클릭 시 데이터는 공백으로 결과는 인풋이 입력한 값으로 처리

      <br/>
      <input type="input" onChange={handleChange}></input>
      <button type="button" onClick={handleClick}>추가하기</button>

      <h2>결과</h2> <br/>
      {form.result}


    </div>

  )

}


export default EventComponentQ2