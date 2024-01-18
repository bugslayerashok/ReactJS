import React, { useReducer } from "react";

function UseReducerEx() {
    const inntialvalue = {
        id: 1,
    };
    const reducer = (state, action) => {
        if (action) {
            console.log({ state });
            console.log({ action });
            console.log({ ...state, id: state.id + action.id });
            return { ...state, id: state.id + action.id };
        } else return inntialvalue;
    };
    const [emp, dispatch] = useReducer(reducer, inntialvalue);
    const change = () => {
        dispatch({ id: 1 });
    };
    const reset = () => {
        dispatch();
    };
    return (
        <>
            <button onClick={change}>{emp.id}</button>
            <button onClick={reset}>Reset</button>
        </>
    );
}

export default UseReducerEx;
