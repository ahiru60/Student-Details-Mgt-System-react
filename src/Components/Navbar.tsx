import React, { useContext, useEffect, useState } from "react"
import {getAuth, signOut} from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { UserContext } from "./UserContext";


export default function Header(){
  const[currentPage,setCurrentpage] = useState("")
  const navigate = useNavigate();
  const auth =getAuth();
  const [authing,setAuthing] = useState(false);
  const userContext =useContext(UserContext)
  const [windowSize, setWindowSize] = useState([
    window.innerWidth
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const logoutWithGoogle = async()=> {
    setAuthing(true);
    signOut(auth).then(response=>{
        //console.log.(response.user.uid)
        //window.location.reload();
        window.location.replace("/login")
    }).catch(error=>{
        console.log(error)
        setAuthing(false)
    })
    
    
}
//console.log(userContext.user)
 

    return(<><Navbar className="navbar justify-content-center " data-bs-theme="dark" style={{backgroundColor:"#487E6E",minHeight:"70px"}}>
      <Nav variant="pills" activeKey={currentPage} className="navbar justify-content-end">
  <Nav.Item>
  {windowSize[0]> 500 &&<Nav.Link className="navbar navbar-brand text-light " style={{marginLeft:"45px"}} href="/dashboard">THIS WEBSITE NAME</Nav.Link>}
  </Nav.Item>
  <Nav.Item>
    <Nav.Link style={{color:"white",fontSize:"17.5px", fontWeight:"200"}}  href="/">Dashboard</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link style={{color:"white",fontSize:"17.5px", fontWeight:"200"}}  href="/application">Application</Nav.Link>
  </Nav.Item>
  </Nav> {windowSize[0]> 963 && <button style={{backgroundColor:"#edb077",borderRadius:"5px",padding:"2px 10px",margin:"1px 1px",marginLeft:"18px", fontWeight:"200", fontSize:"17.5px", border:"none",height:"2.2rem",position:"absolute",right:"2.8vw" }} className="nav-link navbar-brand text-light" onClick={()=>logoutWithGoogle()} hidden={userContext.user == null? true : false}>Logout</button>}
  {windowSize[0]< 963 && <button style={{backgroundColor:"#edb077",borderRadius:"5px",padding:"2px 10px",margin:"1px 1px",marginLeft:"18px", fontWeight:"200", fontSize:"17.5px", border:"none",height:"2.2rem",position:"absolute",left:"-1vw"}} className="nav-link navbar-brand text-light" onClick={()=>logoutWithGoogle()} hidden={userContext.user == null? true : false}>Logout</button>}
      </Navbar></>)
}


