import { createContext, useState } from "react";

// 컨텍스트 API의 Provider와 Consumer를 외부에서 관리

// 1. 컨텍스트의 초기값
const UserContext = createContext({
  state : {id: 'aaa', name: '홍길동'},
  action : {
    setData: () => {} // 함수
  }
})

// 2. Provider 컴포넌트 -> 컴포넌트 사이의 값은 children으로 전달됨
const UserProvider = ({children}) => {

  console.log(children) // Provider에 사이로 들어오는 값
  
  // 변경할 값은 state로 관리
  let [data, setData] = useState({id: 'aaa', name: '홍길동'})

  const value = {
    state : data, // state의 초기값
    action : {setData} // 여러 action값 관리할 수 있도록 객체로 선언
  }
  
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

// 3. Consumer도 export
const UserConsumer = UserContext.Consumer // userContext.Consumer는 
export {UserProvider, UserConsumer}

// 4. CreateContext객체 export
export default UserContext