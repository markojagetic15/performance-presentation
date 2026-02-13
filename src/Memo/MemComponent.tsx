import {memo, useEffect} from "react";

const ComponentToMemo = ({count}: { count: number }) => {
    useEffect(() => {
        const wrapper = document.getElementById('memoized-component');

        if (wrapper) {
            wrapper.style.background = 'red';
        }

        const timeout = setTimeout(() => {
            if (wrapper) {
                wrapper.style.background = 'transparent';
            }
        }, 100);

        return () => clearTimeout(timeout);
    }, [count]);


    return (
        <div id='memoized-component'>
            <h1>This is a memoized component {count}</h1>
        </div>
    )
}

export default memo(ComponentToMemo)