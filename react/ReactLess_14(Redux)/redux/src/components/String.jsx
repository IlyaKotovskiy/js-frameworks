import { useDispatch, useSelector } from "react-redux";
import { store } from "../store";
import { initCapAction, lowerAction, modalAction, upperAction } from "../store/stringReducer";

export function String() {
  const string = useSelector(store => store.string);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>String</h2>
      <h3>{string}</h3>
      <div>
        <button onClick={() => dispatch(upperAction())}>To Upper</button>
        <button onClick={() => dispatch(lowerAction())}>To Lower</button>
        <button onClick={() => dispatch(initCapAction())}>Init Cap</button>
        <button onClick={() => dispatch(modalAction(prompt()))}>Modal</button>
      </div>
    </div>
  );
}