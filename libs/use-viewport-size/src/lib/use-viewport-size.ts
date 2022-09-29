import { useEffect, useState, useLayoutEffect } from 'react';

export function useViewportSize() {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  (typeof window !== 'undefined' ? useLayoutEffect : useEffect)(() => {
    handleResize();
  }, []);

  return size;
}
