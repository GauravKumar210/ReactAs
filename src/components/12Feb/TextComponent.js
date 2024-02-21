// TextComponent.js
import React from 'react';
import { useStyling } from './StylingContext';

const TextComponent = ({ children }) => {
  const { textStyle, updateStyle } = useStyling();

  return (
    <div style={textStyle}>
      {children}
      <button onClick={() => updateStyle({ color: 'red' })}>Change Color</button>
      <button onClick={() => updateStyle({ fontFamily: 'Courier New, monospace' })}>
        Change Font
      </button>
    </div>
  );
};

export default TextComponent;
