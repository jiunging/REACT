import { useRef } from "react"

function HookRef() {

  // 특정태그에 이름달기 -> 제어할 태그에 ref 속성에 넣어주면 됨
  let inputRef = useRef(null)

  let handleClick = () => {
    // 요기에서는 ionput의 value값을 얻어야 합니다..?
    console.log(inputRef)
    // inputRef.current.value // 얘가 태그임
    console.log(`input태그 입력값: ${inputRef.current.value}`)
    console.log(`input태그 type: ${inputRef.current.type}`)
    inputRef.current.value = ""
    inputRef.current.focus();
  }


  return(
    <div>
      할일: <input type="text" ref={inputRef}/> <br/>
      <button type="button" onClick={handleClick}>useRef사용하기</button>
    </div>
  )
}

export default HookRef