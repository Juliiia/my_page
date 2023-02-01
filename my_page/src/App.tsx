import React, { useState } from 'react'

import Navbar from "./components/navbar";
import Body from "./components/body";

function App() {
  const [count, setCount] = useState(0)
 //https://dev.to/coderamrin/how-to-build-a-portfolio-website-with-react-tailwind-css-fni
  return (
    <>
        <Navbar />
        <Body />
    </>
  )
}

export default App
