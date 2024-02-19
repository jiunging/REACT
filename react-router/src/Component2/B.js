import C from "./C"
import { useContext } from "react"
import UserContext from "../contextAPI/ContextAPI2"

function B() {

  const {state, action} = useContext(UserContext)
  return (
    <div>
      <h3>B컴포넌트</h3>
      A컴포넌트에서 바꾼 값: {state.id} <br/>
      A컴포넌트에서 바꾼 값: {state.name} <br/>
      <C/>
    </div>
  )
}

export default B