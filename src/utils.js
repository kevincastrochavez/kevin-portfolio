import { useEffect, useState } from 'react';

// Custom Hooks for utility tasks

const useHeightScrolled = () => {
  const [heightScrolled, setHeightScrolled] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', function () {
      setHeightScrolled(window.scrollY);
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return { heightScrolled };
};

const useWindowSize = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', function () {
      setWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return { width };
};

export { useHeightScrolled, useWindowSize };
