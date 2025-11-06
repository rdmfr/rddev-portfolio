import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText(displayText + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [displayText, index, text, speed]);

  return <span>{displayText}</span>;
};

export default TypingEffect;