import { useParams } from "react-router-dom"

function Info() {

    // useParams - URL 파라미터를 받는 훅
    let params = useParams()
    console.log(params);
    console.log(params.a); // params안에는 라우터에 설정한 키가 있음, app.js에서 경로 뒤에 /:a 줘서 a로 받아온거임

    // a를 이용해서 데이터를 가져온다.
    let {a, b} = params;
    
    // 퀴즈: info페이지에서는 URL파라미터를 2개 받고 싶다면?


    return(
        <div>
            인포 <br/>
            첫 번째 데이터: {a} <br/>
            두 번째 데이터: {b}
        </div>
    )
}

export default Info