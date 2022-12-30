//import { useContext } from "react"
//import {CounterContext} from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter";

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
    //const {counter} = useContext(CounterContext);
    const {counter} = useCounterContext();

    // 5 - context mais complexo
    const {color, dispatch} = useTitleColorContext()

    // 6 - alterando state mais complexo
    const setTitleColor = (color) => {
        dispatch({type: color})
    }

  return (
    <div>
        <h1 style={{color: color}}>Home</h1>
        <p>Counter value {counter}</p>
        {/* 3 - alterando valor contexto */}
        <ChangeCounter />
        {/* 6 - alterando state mais complexo */}
        <div>
            <button onClick={() => setTitleColor("RED")}>Red</button>
            <button onClick={() => setTitleColor("BLUE")}>Blue</button>
        </div>
    </div>
  )
}
export default Home