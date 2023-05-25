import Header from "./Components/Navbar"
import Application from "./pages/Application/Application"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Login } from "./pages/Login/Login"
import { AuthRoute } from "./Util/Firebase/AuthRoute"
import { Dashboard } from "./pages/Dashboard/Dashboard"

function App() {
  

 return (<>
 
 <BrowserRouter>
 <Header></Header>
 <Routes>
  <Route path="application" element={<AuthRoute><Application/></AuthRoute>}/>
  <Route path="dashboard" element={<AuthRoute><Dashboard/></AuthRoute>}/>
  <Route path="login" element={<Login/>}/>
 </Routes>
 </BrowserRouter>
 </>)
}

export default App
