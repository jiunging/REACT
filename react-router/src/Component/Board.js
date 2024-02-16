import { Link, NavLink, Outlet } from "react-router-dom"

function Board() {

    const myStyle = {
        color: "red",
        backgroundColor: "yellow"
    }


    return (
        <div>
            <h3>공통 글 목록</h3>
            <ul>
                {/* <li><Link to="/board/1">1번</Link></li>
                <li><Link to="/board/2">2번</Link></li>
                <li><Link to="/board/3">3번</Link></li> */}
            
                {/* NavLink 컴포넌트에서 함수를 정의하면 첫 번째 매개변수로, 현재 라우터 주소와 동일한 경우 true값을 전달함 */}
                <li><NavLink to="/board/1" style={ ({isActive}) => ( isActive ? myStyle : null) }>1번</NavLink></li>
                <li><NavLink to="/board/2" style={ ({isActive}) => ( isActive ? myStyle : null) }>2번</NavLink></li>
                <li><NavLink to="/board/3" style={ ({isActive}) => ( isActive ? myStyle : null) }>3번</NavLink></li>

            </ul> 

            {/* 하위 라우팅 컴포넌트를 그린다 */}
            <Outlet/>

        </div>
    )
}

export default Board