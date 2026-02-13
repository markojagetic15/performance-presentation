import {memo, useCallback, useState} from "react";

const Button = memo(({handleClick}: { handleClick: () => void }) => {
    console.log("Child component rendered");
    return <button onClick={handleClick}>Click me!</button>;
});

export const UseCallbackDemo = () => {
    const [count, setCount] = useState(0);

    console.log("Parent component rendered");

    // const handleClick = () => {
    //     console.log('Button clicked! Count is', count);
    // }

    const handleClick = useCallback(() => {
        console.log("Button clicked! Count is", count);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <Button handleClick={handleClick}/>
        </div>
    );
};
