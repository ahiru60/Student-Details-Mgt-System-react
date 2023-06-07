
import Application from "./pages/Application/Application"
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
import { AuthRoute } from "./Util/Firebase/AuthRoute"
import { Dashboard } from "./pages/Dashboard/Dashboard"
import { Login } from "./pages/Login/Login"
import { UserContext, UserContextProvider } from "./Components/UserContext"
import Header from "./Components/Navbar"
import { Register } from "./pages/Login/Register"
import { useContext, useEffect, useState } from "react"
import { NotFound } from "./pages/NotFound"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { checkStaff } from "./Util/Firebase/Controller"

function App() {

   const logged = localStorage.getItem("LOG_STATE_SDM")
   var localStoreIndex =localStorage.getItem("NAV_INDEX_SDM_APP")
   
    
 return (<>
 
 <Routes >
 { logged == "true"?
 <Route path="*" element={<UserContextProvider><Header></Header></UserContextProvider>}/>:
 <><Route path="/login" element={<UserContextProvider><Login/></UserContextProvider>}/>
 <Route path="/register" element={<UserContextProvider><Register/></UserContextProvider>}/>
 <Route path='*' element={<Navigate to='/login' />} /></>}
 
 </Routes>
 
 </>)
}

export default App

/*
<UserContextProvider><Header></Header></UserContextProvider>
<Routes>

  { logged? (<><Route path="/application" element={<AuthRoute><UserContextProvider><Application/></UserContextProvider></AuthRoute>}/>
  <Route path="/dashboard" element={<AuthRoute><UserContextProvider><Dashboard/></UserContextProvider></AuthRoute>}/><Route path="*" element={<NotFound/>}/></>) : null}
  <Route path="/login" element={<UserContextProvider><Login/></UserContextProvider>}/>
  <Route path="/register" element={<UserContextProvider><Register/></UserContextProvider>}/>
  
 </Routes>*/