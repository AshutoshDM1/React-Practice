import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { incrementCounter, decrementCounter } from "../store/actions/types";

const Counter = () => {
  //@ts-ignore
  const count = useSelector((state: RootState) => state.counter?.value ?? 0);
  const dispatch = useDispatch();

  return (
    <>
      <h2 className="text-2xl my-5">Count: {count}</h2>
      <div className="flex items-center justify-center gap-2 mb-4">
        <button onClick={() => dispatch(incrementCounter())}> increment</button>
        <button onClick={() => dispatch(decrementCounter())}> decrement</button>
      </div>
    </>
  );
};

export default Counter;
