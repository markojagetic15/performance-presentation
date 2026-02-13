import {useMemo, useState} from "react";


const expensiveComputation = (num: number) => {
    console.log('Running expensive computation...');
    let i = 0;
    while (i < 1000000000) i++;
    return num * num;
};

export const UseMemoDemo = () => {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState('');


    console.log('Component rendered');

    const memoizedValue = useMemo(() => expensiveComputation(count), [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <p>Square: {memoizedValue}</p>
            <p>Other state: {otherState}</p>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
            <input type="text" onChange={(e) => setOtherState(e.target.value)}/>
        </div>
    );
}