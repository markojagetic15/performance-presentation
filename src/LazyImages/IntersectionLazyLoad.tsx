import {useEffect, useRef} from 'react';

export const IntersectionLazyLoad = ({src, alt}: {
    src: string;
    alt: string;
}) => {
    const imageRef = useRef<HTMLImageElement | null
    >(
        null
    );

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.8,
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleIntersection = (entries: any) => {
        entries.forEach((entry: any) => {
            if (entry.isIntersecting && imageRef.current) {
                imageRef.current.src = src;
                imageRef.current.alt = alt;
            }
        });
    };


    return <img ref={imageRef} style={{height: '500px'}} alt="Placeholder"/>;
};