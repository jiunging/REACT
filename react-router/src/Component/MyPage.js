import { Navigate, useNavigate } from "react-router-dom";

function MyPage() {

    let loginYN = true; // 만약, 이 값이 true면 로그인이 된 사용자

    // 컴포넌트 첫 번째 렌더링에서는 useNavigate()를 사용할 수 없음
    // let nav = useNavigate()
    // if(loginYN == false) {
    //     nav("/")
    // }

    // to = 경로, replace=history를 남기지 않음
    if(loginYN == false) {
        return <Navigate to="/" replace={true} />
    }

    return (
        <div>
            권한이 있는 사람만 접근이 가능함
        </div>
    )

}

export default MyPage