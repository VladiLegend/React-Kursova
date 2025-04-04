import { useState } from "react"

export default function App() {
    const [count, setCount] = useState(1)
    return (<div>Hello Timi
        <button onClick={()=>setCount((count)=>count+ 1)}>count is {count}</button>
    </div>)
}
