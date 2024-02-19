import A from "./Component2/A"
import B from "./Component2/B"
import { UserProvider } from "./contextAPI/ContextAPI2"

function App() {
  return (
    <div>
      <h3>ContextAPI 분리하기</h3>

      {/* 4. provider의 사용 */}
      <UserProvider>
        <A/>
        <B/>
      </UserProvider>

      


    </div>
  )
}

export default App