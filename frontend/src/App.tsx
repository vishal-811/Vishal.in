import { Layout } from "./pages/Layout"
import { ThemeContext } from "./contexts/Theme"
import { useEffect, useState } from "react"

function App() {
     const [theme,setTheme]=useState("dark")
  return (
    <>
         <ThemeContext.Provider value={{theme,setTheme}}>
             <Layout/>
         </ThemeContext.Provider>
    </>
  )
}

export default App
