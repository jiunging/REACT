import { useContext } from "react"
import UserContext from "../contextAPI/ContextAPI2"

function C() {

  const {state, action} = useContext(UserContext)
  return (
    <div>
      <h3>C컴포넌트</h3>
      A컴포넌트에서 바꾼 값: {state.id} <br/>
      A컴포넌트에서 바꾼 값: {state.name} <br/>
    </div>
  )
}

export default C