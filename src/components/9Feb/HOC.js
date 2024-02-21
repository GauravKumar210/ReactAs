// MyComponent.js
import React from 'react';
import Theme from './Theme';


const HOC = ({ theme }) => {
  const { isDarkMode, toggleTheme } = theme;

  const themeClass = isDarkMode ? 'dark-theme' : 'light-theme';

  return (
    <div className={themeClass}>
      <p>Change the theme from light to dark on button click using the HOC(09 Feb)</p>
      <button onClick={toggleTheme}>{themeClass}</button>
    </div>
  );
};

export default Theme(HOC);
