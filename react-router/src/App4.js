import ColorComponent from "./Component2/ColorComponent"
import ColorContext from "./contextAPI/ContextAPI"

function App() {
  return (
    <div>
      <h3>컨텍스트 API 예시</h3>
      {/* provider는 하위 consumer로 변경된 값을 전달하는 역할 */}
      <ColorContext.Provider value={{color: "blue"}}>
        <ColorComponent/>
      </ColorContext.Provider>
      
    </div>
  )

}
export default App