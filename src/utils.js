import { useEffect, useState } from 'react';

const useHeightScrolled = () => {
  const [heightScrolled, setHeightScrolled] = useState(0);
  console.log(heightScrolled);

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

export { useHeightScrolled };
