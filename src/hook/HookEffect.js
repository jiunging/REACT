import { useEffect, useState } from "react"

function HookEffect() {


  let [name, setName] = useState("")
  let [age, setAge] = useState(0)

  console.log(1)


  // // useEffect(실행시킬 콜백, 배열(필수 x) ) - 클래스형컴포넌트의 componentDidMount() 대체함
  // useEffect( () => {
  //   console.log(`렌더링 이후에 실행됨, 스테이트값: ${name}`)
  // })

  // useEffect(실행시킬콜백, [])
  // 첫 번째 렌더링 이후에 단 1번만 실행됨
  // useEffect( () => {
  //   console.log("첫번째 렌더링에만 실행됨")
  // }, [] ) 

  // useEffect(실행시킬 콜백, [스테이트값])
  // 특정 값 [값]이 업데이트 될 때마다 실행됨 - 클래스형컴포넌트의 componentDidUpdate() 대체함
  // useEffect( () => {
  //   console.log("특정값이 업데이트 될 때마다 실행됨")
  // }, [name, age])


  // useEffect(실행시킬 콜백 (return) )
  //
  useEffect( () => {

    console.log("mount 이후에 실행이 됨")

    return () => {
      console.log("unmount될 때 실행됨")
    }

  }, [age])

  // 추가 - useEffect 여러개 만들 수도 있다
  useEffect( () => {
    console.log("두 번째 effect함수 실행됨")
  })


  console.log(2)


  return (
    <>
    이름: <input type="text" name="name" onChange={ (e) => setName(e.target.value)} value={name}/> <br/>
    나이: <input type="text" name="age" onChange={ (e) => setAge(e.target.value)} value={age} /> <br/>

    

    이름: {name}, 나이: {age}
    </>
  )

}

export default HookEffect