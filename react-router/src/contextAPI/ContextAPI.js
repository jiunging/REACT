import { createContext } from "react"

// 외부에서 관리할 변수
const ColorContext = createContext({color: "red"})

export default ColorContext