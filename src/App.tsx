import Header from "./Components/Navbar"
import Application from "./pages/Application/Application"
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  

 return (<>
 
 <BrowserRouter>
 <Header></Header>
 <h1>hi</h1>
 <Routes>
  <Route path="/application" element={<Application/>}/>
 </Routes>
 </BrowserRouter>
 </>)
}

export default App
