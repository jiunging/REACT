import { useParams } from "react-router-dom"

function BoardContent() {

    let {num} = useParams()

    return (
        <div>
            <h3>글 상세</h3>
            {num}번 데이터~~
        </div>
    )
}

export default BoardContent