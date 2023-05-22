import Header from "./Components/Navbar"
import Application from "./pages/Application/Application"
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  

 return (<>
 <h1>h</h1>
 <BrowserRouter>
 <Header></Header>
 <Routes>
  <Route path="application" element={<Application/>}/>
 </Routes>
 </BrowserRouter>
 </>)
}

export default App
