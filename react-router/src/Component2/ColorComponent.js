import ColorContext from "../contextAPI/ContextAPI"

function ColorComponent() {

  // 첫 번째 매개값의 현재 컨텍스트 API의 값을 전달해 줌
  const 함수 = (value) => {
    return (
      <div style={{color: value.color}}>
        context API 값: {value.color}
      </div>
    )
  }


  return(
    <>
      <ColorContext.Consumer>
        {함수}
      </ColorContext.Consumer>
    </>
  )
}

export default ColorComponent