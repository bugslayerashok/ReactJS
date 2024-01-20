import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount } from "./CounterSlice";

function AddAmount() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [addValue, setAddValue] = useState(0);
    return (
        <>
            <input type="text" value={addValue} onChange={(e) => setAddValue(e.target.value)} />
            <button onClick={() => dispatch(incrementByAmount(Number(addValue) || 0))}>addValue</button>
        </>
    );
}

export default AddAmount;
