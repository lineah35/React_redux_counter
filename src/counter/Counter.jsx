import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { increment, decrement, incrementByAmount, decrementByAmount } from "./counterSlice";

export function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);


    return(
        <div>
            <button onClick={() => dispatch(increment())}>Increase</button>
            <span>{count}</span>
            <button onClick={() => dispatch(decrement())}> Decrease </button>
            <button onClick={() => dispatch(incrementByAmount(num))}>Increment by</button>
            <input onChange={(e) => setNum(Number(e.target.value))}/>
            <button onClick={() => dispatch(decrementByAmount(num2))}>Decrement by</button>
            <input onChange={(e) => setNum2(Number(e.target.value))}/>
        </div>
    )
}

