import { useDispatch, useSelector } from "react-redux"
import { decrAction, incrAction, inputAction, resetAction } from "../store/countReducer";

export function Counter(){
  const count = useSelector(store => store.count);
  const dispatch = useDispatch();
  

  return(
    <div>
      <h2>Counter</h2>
      <h3>{count}</h3>
      <div>
        <button onClick={() => dispatch(incrAction(1))}>INCR</button>
        <button onClick={() => dispatch(decrAction(1))}>DECR</button>
        <button onClick={() => dispatch(resetAction())}>RESET</button>
        <button onClick={() => dispatch(incrAction(100))}>INCR100</button>
        <button onClick={() => dispatch(decrAction(100))}>DECR100</button>
        <button onClick={() => dispatch(inputAction(+prompt()))}>MODAL</button>
      </div>
    </div>
  )
}