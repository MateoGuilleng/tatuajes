'use client';

import { useEffect, useState } from 'react';

export default function ParallaxImages() {
    const [scrollY, setScrollY] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        // Set initial window height on client side
        setWindowHeight(window.innerHeight);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {/* <div className="absolute top-0 left-0 w-1/5 h-auto" style={{ transform: `translateY(${-scrollY * 0.15}px)` }}>
                <img src="/images/decoracion.jpg" alt="Tattoo Decoration 1" className="w-full h-auto object-cover opacity-70" />
            </div>
            <div className="absolute bottom-0 right-0 w-1/5 h-auto" style={{ transform: `translateY(${-scrollY * 0.1}px)` }}>
                <img src="/images/decoracion2.jpg" alt="Tattoo Decoration 2" className="w-full h-auto object-cover opacity-70" />
            </div>
            <div className="absolute top-1/2 left-0 w-1/5 h-auto -translate-y-1/2" style={{ transform: `translateY(${-scrollY * 0.2}px)` }}>
                <img src="/images/decoracion3.jpg" alt="Tattoo Decoration 3" className="w-full h-auto object-cover opacity-70" />
            </div>
            <div className="absolute bottom-1/2 right-0 w-1/5 h-auto translate-y-1/2" style={{ transform: `translateY(${-scrollY * 0.05}px)` }}>
                <img src="/images/decoracion4.jpg" alt="Tattoo Decoration 4" className="w-full h-auto object-cover opacity-70" />
            </div>
            <div className="absolute top-0 right-0 w-1/5 h-auto" style={{ transform: `translateY(${-scrollY * 0.12}px)` }}>
                <img src="/images/decoracion5.jpg" alt="Tattoo Decoration 5" className="w-full h-auto object-cover opacity-70" />
            </div> */}
        </>
    );
}
