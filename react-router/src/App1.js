import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import User from "./Component/User";
import Info from "./Component/Info";
import Board from "./Component/Board";
import BoardContent from "./Component/BoardContent";
import Header from "./header/Header";
import MyPage from "./Component/MyPage";



function App() {
  return (
    // 2. Routes 컴포넌트
    <div>
      <Routes>
        {/* <Route path="/" element={ <Home/>} /> */}
        {/* 쿼리스트링 방식 - 별도의 설정이 필요 x */}
        {/* <Route path="/user" element={ <User/>} /> */}
        {/* URL파라미터 방식 */}
        {/* <Route path="/info/:a/:b" element={ <Info/>} /> */}

        {/* 각각 페이지 별로 다른 화면이 보인다 
        <Route path="/board" element={ <Board/>} />
        <Route path="/board:num" element={ <BoardContent/>} />
        */}

        {/* 중첩라우터 = 상위 컴포넌트에 Outlet을 사용해서 자식컴포넌트를 그린다*/}
        <Route path="/board" element={<Board/>}>
          <Route path=":num" element={<BoardContent/>}></Route>
        </Route>

        <Route path="/" element={<Header />}>
          <Route path="/home" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/info/:a/:b" element={<Info />} />
        </Route>


        {/* navigate컴포넌트 - 권한처리 */}
        <Route path="/mypage" element={<MyPage/>}></Route>

      </Routes>

    </div>
  );
}

export default App;
