import { Link, Outlet, useNavigate } from "react-router-dom";

const { Fragment } = require("react");

function Header() {

// navigate훅 => history 객체를 대신함
const nav = useNavigate()
console.log(nav);

const goHome = () => {
    nav("/home") // 홈으로
}

const goBack = () => {
    nav(-1) // 뒤로가기
}



    return (
        <Fragment>

            {/* 이 헤더태그가 주소는 변함없이, info, user, home의 공통 레아이웃으로 설정 */}
            <header>
                <p>제목</p>
                <ul>
                    <li><Link to="/home">목록</Link></li>
                    <li><Link to="/user">목록</Link></li>
                    <li><Link to="/info/:a/:b">목록</Link></li>
                </ul>
                <div>
                    <button onClick={goHome}>버튼1(홈으로)</button>
                    <button onClick={goBack}>버튼2(뒤로)</button>
                </div>

                <Outlet/>

            </header>
        </Fragment>
    )
}

export default Header