'use client';

import { useEffect, useState } from 'react';

export default function ParallaxImages() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div
                className="fixed top-0 left-[-15%] h-screen w-[80%] pointer-events-none z-10"
                style={{
                    backgroundImage: `url('/images/dragon-left.png')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '40%', // prueba 30-50%
                    backgroundPosition: 'left center',
                    transform: `translateY(${typeof window !== 'undefined' ? scrollY * -0.05 : 0
                        }px) rotate(-10deg)`,
                }}
            />


            {/* Dragon central con efecto parallax (se mueve lentamente hacia arriba/abajo) */}
                {/* <div
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5 h-2/5 pointer-events-none z-0"
                    style={{
                        backgroundImage: `url('/images/dragon-center.png')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center center',
                        transform: `translateY(${typeof window !== 'undefined' ? scrollY * 0.01 : 0}px)`,
                    }}
                /> */}

            {/* Olas de la derecha con efecto parallax (sube al bajar) */}
            <div
                className="fixed top-0 right-0 h-screen w-1/2 pointer-events-none z-10"
                style={{
                    backgroundImage: `url('/images/waves-right.png')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'right center',
                    transform: `translateY(${typeof window !== 'undefined' ? scrollY * -0.2 : 0}px)`,
                }}
            />
        </>
    );
}
