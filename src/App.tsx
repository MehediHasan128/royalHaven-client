import { useEffect } from "react"
import MainLayout from "./components/layout/MainLayout"
import Aos from "aos"
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
      Aos.init({
        duration: 2000,
      })
    }, []);

  return (
    <div style={{overflowY: "auto", scrollbarWidth: "thin"}}>
      <MainLayout />
    </div>
  )
}

export default App
