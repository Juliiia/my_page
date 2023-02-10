import React from 'react'
import { useRoutes } from 'react-router-dom';
import Navbar from "./components/navbar";
import routes from "./components/routes";

function App() {
    const content = useRoutes(routes);
 //https://dev.to/coderamrin/how-to-build-a-portfolio-website-with-react-tailwind-css-fni
  return (
    <>
        <Navbar />
        {content}
    </>
  )
}

export default App
