// import img1 from '/img/img1.png'

import { useState } from "react"

function IterationComponentQ() {

  /*
  img or css파일 참조하는 방법 - 2가지 방법
  만약, src폴더에 넣는 경우 - import문장
  2. public폴더에 넣는 경우 - 경로참조만 시켜주면 됨
  */
  const arr = [
    {src : '/img/img1.png', title : '아이폰10', price: 1000},
    {src : '/img/img2.png', title : '아이폰11', price: 2000},
    {src : '/img/img3.png', title : '아이폰12', price: 3000},
    {src : '/img/img4.png', title : '아이폰13', price: 4000},
  ]

  const [list, setList] = useState(arr);
  const [img, setImg] = useState("/img/img1.png")


  let handleImg = (e) => {
    setImg(e.target.src)
  }

  const newList = list.map( item => <div key={item.src}>
                      <img src={item.src} onClick={handleImg}/>
                      <p>{item.title}</p>
                      <p>{item.price}</p>
                    </div>
          )

  return (
    // <img src={img1} alt="이미지1" />
    // <img src={"/img/1.png"}/>
    <>
      <img src={img}/>
      <div style={{display: "flex", justifyContent: "space-around"}}>
          {newList}
      </div>
    </>
  )
}

export default IterationComponentQ