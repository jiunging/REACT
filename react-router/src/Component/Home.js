import {Link} from "react-router-dom"
function Home() {
    return(
        <div>
            <h3>홈...</h3>
            <ul>
                <li><Link to="/user">유저페이지 이동(to</Link></li>

                {/* 쿼리스트링 방식 */}
                <li><Link to="/user?name=홍길동&age=20">유저페이지 이동(쿼리스트링)</Link></li>
                
                {/* URL파라미터 방식 */}
                <li><Link to="/info/1/apple">인포페이지 이동 - 1</Link></li>
                <li><Link to="/info/2/banana">인포페이지 이동 - 2</Link></li>
                <li><Link to="/info/3/mango">인포페이지 이동 - 3</Link></li>
            </ul>
        </div>
    )
}

export default Home