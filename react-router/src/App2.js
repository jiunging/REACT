import { useEffect, useState } from "react"

function App() {

    const [data, setData] = useState(null)
    const [example, setExample] = useState(null);

    // 클릭 시에 데이터를 가져옴
    let handleClick = () => {
        // mock에서 데이터를 가져옴
        
        fetch("https://run.mocky.io/v3/9669e050-cc2e-405b-8c41-5c37b1ff5f38")
        .then( response => response.json() )
        .then( data => setData(data) )
    }

    // 화면이 렌더링 되는 순간, 데이터를 가져옴
    // 바로 맨화면에 이렇게 하면 무한루프에 빠짐, 딱 1번만 돌리게 해야함 맨화면에는
    // const [example, setExample] = useState(null);
    // fetch("https://run.mocky.io/v3/9669e050-cc2e-405b-8c41-5c37b1ff5f38")
    // .then( response => response.json() )
    // .then( data => setExample(data) )

    // 그래서 이렇게 해야함
    useEffect( () => {
        fetch("https://run.mocky.io/v3/9669e050-cc2e-405b-8c41-5c37b1ff5f38")
        .then( response => response.json() )
        .then( data => setExample(data) )
    }, []) // 첫 번째 렌더링에만 실행
    

    return (
        <div>
            hello world
            <button onClick={handleClick}>mock에서 데이터 가져오기</button>
                
            {
                data === null ?
                null
                :
                <div>
                    {data.name} <br/>
                    {data.info.age} <br/>
                    {data.info.phone} <br/>
                </div>
            }

            <hr/>

            {/* 위에 구문과 동일한 문장 example이 null이면, 뒤를 실행 안 하고, null이 아니면 뒤를 */}
            {
                // example === null ?
                // null
                // :
                example &&
                <div>
                    {example.name} <br/>
                    {example.info.age} <br/>
                    {example.info.phone} <br/>
                </div>
            }

            
            
            

        </div>
    )
}

export default App