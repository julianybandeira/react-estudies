import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

const Products = () => {
    const {counter} = useContext(CounterContext);

  return (
    <div>
        <h1>Products</h1>
        <p>Counter value {counter}</p>
    </div>
  )
}
export default Products