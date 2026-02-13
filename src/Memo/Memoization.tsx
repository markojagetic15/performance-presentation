import ComponentToMemo from "./MemComponent.tsx";
import {useState} from "react";

export const Memoization = () => {
    const [countParent, setCountParent] = useState(0);

    console.log("Parent rendered");
    console.log("--------------");


    return (
        <div>
            <button onClick={() => setCountParent(prev => prev + 1)} className='enable-scroll'>
                This is parent count: {countParent}
            </button>

            <ComponentToMemo count={0}/>
        </div>
    );
};
