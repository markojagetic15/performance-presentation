import {useState} from "react";
import {VirtualizedList} from "./VirtualList.tsx";

export const List = () => {
    const arraOfItems = Array.from({length: 10000}, (_, index) => ({
        id: index,
        content: `Item ${index + 1}`,
    }));


    const [virtualized, setVirtualized] = useState(false)

    return (
        <>
            <button onClick={() => setVirtualized(!virtualized)} className='enable-scroll'>Toggle Virtualization
            </button>

            {
                !virtualized ? <>
                    <div className='list'></div>

                    <div className='list-above'></div>
                    <div className='list-below'></div>
                    <div className='fake-list-wrapper'>
                        <div className='fake-list'>
                            {
                                arraOfItems.map((item, index) => (
                                    <li key={index} className='list-item'>{item.content}</li>
                                ))
                            }
                        </div>
                    </div>
                </> : <VirtualizedList items={arraOfItems} itemHeight={
                    30
                }/>
            }


        </>
    )
}