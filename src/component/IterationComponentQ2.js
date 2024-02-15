import { useRef, useState } from "react";

function IterationComponentQ2() {

  // 1. select 태그 안에 들어가는 option을 반복으로 그린다.
  const select = ["HTML", "Javascript", "CSS", "Oracle", "Mysql"]

  // 2. 데이터도 반복으로 그린다. (state)
  const data = [
    {id: 1, type: 'Java', teacher: '이순신'},
    {id: 2, type: 'Java', teacher: '홍길자'},
    {id: 3, type: 'Javascript', teacher: '홍길동'},
    {id: 4, type: 'Oracle', teacher: '이순신'},
    {id: 5, type: 'Mysql', teacher: '이순신'},
    {id: 6, type: 'CSS', teacher: '박찬호'},
    {id: 7, type: 'HTML', teacher: 'coding404'}
  ];

  let inputRef = useRef(null)
  const [subject, setSubject] = useState(data);
  const lis = subject.map(a => <li key={a.id}>{a.type} - {a.teacher}</li>)

  // 3. select 태그에서 체인지가 일어나면 state에서 필터링을 하면 된다.
  let changeMenu = (e) => {
    const newData = [...data];
    const newList = newData.filter( item => item.type === e.target.value);
    setSubject(newList);
  }

  // 4. 검색기능 - 인풋태그의 값을 가지고 state에서 필터링
  let searchMenu = () => {
    const newData = [...data];
    const newList = newData.filter ( item => item.type.toLowerCase() == inputRef.current.value.toLowerCase())
    setSubject(newList)
  }


  return (
    <>
      <h2>실습</h2>
      Search: <input type="text" ref={inputRef}></input>
      <button type="button" onClick={searchMenu}>검색</button> <br/>
      
      과목찾기: 
      <select onChange={changeMenu}>
      <option>HTML</option>
      <option>Javascript</option>
      <option>CSS</option>
      <option>Java</option>
      <option>Oracle</option>
      <option>Mysql</option>
      </select>

      {lis}

    </>
  )
  
}

export default IterationComponentQ2