import React, { useEffect, useState } from 'react';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function ScrollUp() {
  const [heightScrolled, setHeightScrolled] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setHeightScrolled(window.scrollY);
    });

    return () => {
      window.removeEventListener('scroll', () => console.log('removed'));
    };
  }, []);

  console.log(heightScrolled);

  return (
    <a
      href='#'
      className={`scrollUp ${heightScrolled >= 560 && 'show__scroll'}`}
    >
      <ArrowUpwardIcon />
    </a>
  );
}

export default ScrollUp;
