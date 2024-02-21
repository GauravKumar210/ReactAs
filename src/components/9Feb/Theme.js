// withTheme.js
import React from 'react';
import useTheme from './ThemeProvider';


const Theme = (WrappedComponent) => {
  return function WithTheme(props) {
    const theme = useTheme();
    return <WrappedComponent {...props} theme={theme} />;
  };
};

export default Theme;