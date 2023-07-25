import { useEffect } from "react";
import {useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
const App = () => {
   const isDarkMode = useSelector((state)=> state.theme.isDarkMode);
   useEffect(() => {
      // Set the "data-bs-theme" attribute whenever the theme mode changes.
      document.documentElement.setAttribute("data-bs-theme", isDarkMode ? "dark": "light");
      document.body.classList.toggle("dark-mode", isDarkMode);
   }, [isDarkMode]);
  return (
     <>
        <Outlet/>
     </>
  )
}
export default App