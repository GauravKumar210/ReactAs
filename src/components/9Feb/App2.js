import React from 'react'
import { ThemeProvider } from './ThemeProvider'
import HOC from './HOC'

function App2 () {
  return (
    <div>
    <ThemeProvider>
        <HOC/>
    </ThemeProvider>
    </div>
  )
}

export default App2;