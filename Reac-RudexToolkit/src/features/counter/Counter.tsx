import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";
import type { RootState } from "../../app/store";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h2 className="text-2xl my-5">Count: {count}</h2>
      <div className="flex items-center justify-center gap-2 mb-4">
        <button onClick={() => dispatch(increment())}> increment</button>
        <button onClick={() => dispatch(decrement())}> decrement</button>
      </div>
    </>
  );
};

export default Counter;
