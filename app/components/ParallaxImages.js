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
      {/* Borde izquierdo con efecto parallax (sube al bajar) */}
      <div
        className="fixed top-0 left-0 h-full w-40 pointer-events-none z-10 opacity-70"
        style={{
          backgroundImage: `url('/images/descarga (3).png')`,
          backgroundRepeat: 'repeat-y',
          backgroundSize: '100% auto',
          backgroundPositionY: `${scrollY * -0.2}px`,
        }}
      />

      {/* Borde derecho con efecto parallax (baja al bajar) */}
      <div
        className="fixed top-0 right-0 h-full w-40 pointer-events-none z-10 opacity-70"
        style={{
          backgroundImage: `url('/images/descarga (4).png')`,
          backgroundRepeat: 'repeat-y',
          backgroundSize: '100% auto',
          backgroundPositionY: `${scrollY * 0.3}px`,
        }}
      />
    </>
  );
}
