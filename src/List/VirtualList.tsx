import {useState} from "react";

export const VirtualizedList = ({items, itemHeight}: {
    items: { id: number; content: string }[];
    itemHeight: number;
}) => {
    const [scrollTop, setScrollTop] = useState(0);
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
        startIndex + Math.ceil(600 / itemHeight),
        items.length
    );

    const visibleItems = items.slice(startIndex, endIndex);

    const invisibleItemsHeight = (startIndex + visibleItems.length - endIndex) * itemHeight;

    const handleScroll = (event: any) => {
        setScrollTop(event.target.scrollTop);
    };

    return (
        <div
            onScroll={handleScroll}
            className='list'
        >
            <div style={{height: `${items.length * itemHeight}px`}}>
                <div
                    style={{
                        position: "relative",
                        height: `${visibleItems.length * itemHeight}px`,
                        top: `${startIndex * itemHeight}px`,
                    }}
                >
                    {visibleItems.map((item) => {
                        return (
                            <div key={item.id} className='list-item'>
                                {item.content}
                            </div>
                        )
                    })}
                </div>
                <div style={{height: `${invisibleItemsHeight}px`}}/>
            </div>
        </div>
    );
}