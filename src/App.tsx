
import Application from "./pages/Application/Application"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { AuthRoute } from "./Util/Firebase/AuthRoute"
import { Dashboard } from "./pages/Dashboard/Dashboard"
import { Login } from "./pages/Login/Login"
import { UserContextProvider } from "./Components/UserContext"
import Header from "./Components/Navbar"

function App() {
  

 return (<>
 
 <BrowserRouter>
 <UserContextProvider><Header></Header></UserContextProvider>
 <Routes>
  <Route path="application" element={<AuthRoute><UserContextProvider><Application/></UserContextProvider></AuthRoute>}/>
  <Route path="/" element={<AuthRoute><UserContextProvider><Dashboard/></UserContextProvider></AuthRoute>}/>
  <Route path="login" element={<UserContextProvider><Login/></UserContextProvider>}/>
 </Routes>
 </BrowserRouter>
 </>)
}

export default App
