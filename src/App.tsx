import Header from "./Components/Navbar"
import Application from "./pages/Application/Application"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { AuthRoute } from "./Util/Firebase/AuthRoute"
import { Dashboard } from "./pages/Dashboard/Dashboard"
import { Login } from "./pages/Login/Login"
import { UserContextProvider } from "./Components/UserContext"

function App() {
  

 return (<>
 
 <BrowserRouter>
 <Header></Header>
 <Routes>
  <Route path="application" element={<AuthRoute><UserContextProvider><Application/></UserContextProvider></AuthRoute>}/>
  <Route path="dashboard" element={<AuthRoute><UserContextProvider><Dashboard/></UserContextProvider></AuthRoute>}/>
  <Route path="login" element={<Login/>}/>
 </Routes>
 </BrowserRouter>
 </>)
}

export default App
