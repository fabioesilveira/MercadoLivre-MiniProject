import { Route, Routes } from "react-router-dom";
import Playsation from "./pages/Playsation";
import Xbox from "./pages/Xbox";


function App() {
  return (
    <>
    <Routes>
      <Route index element={< Playsation/>}/>
      <Route path="/xbox" element={< Xbox/>}/>
    </Routes>
    </>
  )
}

export default App;