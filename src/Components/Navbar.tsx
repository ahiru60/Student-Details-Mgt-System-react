import { useContext, useEffect, useState } from "react"
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"
import { Nav, Navbar } from "react-bootstrap";
import { UserContext } from "./UserContext";
import { useMultiStepRender } from "../Util/useMultiStepRender";
import Application from "../pages/Application/Application";
import { Dashboard } from "../pages/Dashboard/Dashboard";


export default function Header(){
  const[currentPage,setCurrentpage] = useState("")
  const auth =getAuth();
  const [authing,setAuthing] = useState(false);
  const userContext =useContext(UserContext)
  const [windowSize, setWindowSize] = useState([
    window.innerWidth
  ]);

  useEffect(()=>{var localStoreIndex =localStorage.getItem("NAV_INDEX_SDM_APP")
   goTo(Number(localStoreIndex?localStoreIndex: 1)) },[])

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
      localStorage.setItem("LOG_STATE_SDM",JSON.stringify(false))
      localStorage.clear();  
      location.replace("/login")

    }).catch(error=>{

        console.log(error)
        setAuthing(false)
        
    })

    
    
    
}

const{steps,currentStepIndex,step, isFirstStep,back,next,isLastStep,goTo} = useMultiStepRender([
  //<MainStudentDetails {...data} updateFields={updateFields}/>,
  <></>,
  <Dashboard/>,
  <Application/>
])
  

  
 

    return(<><Navbar className="navbar justify-content-center " data-bs-theme="dark" style={{backgroundColor:"#487E6E",minHeight:"70px"}}>
      <Nav variant="pills" activeKey={currentPage} className="navbar justify-content-end">
  <Nav.Item>
  {windowSize[0]> 500 &&<Nav.Link className="navbar navbar-brand text-light " style={{margin:"2px 5px"}} onClick={()=>{}}>THIS WEBSITE NAME</Nav.Link>}
  </Nav.Item>
    <Nav.Item className="table-hover">
    <Nav.Link style={{color:"white",fontSize:"17.5px", fontWeight:"200"}} onClick={()=>{goTo(1); localStorage.setItem("NAV_INDEX_SDM_APP","1")}} hidden={userContext.user == null? true : false} >Dashboard</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link style={{color:"white",fontSize:"17.5px", fontWeight:"200"}} onClick={()=>{goTo(2);localStorage.setItem("NAV_INDEX_SDM_APP","2")}} hidden={userContext.user == null? true : false}>Application</Nav.Link>
  </Nav.Item>
  
  </Nav> {windowSize[0]> 963 && <button style={{backgroundColor:"#edb077",borderRadius:"5px",padding:"2px 10px",margin:"1px 1px",marginLeft:"18px", fontWeight:"200", fontSize:"17.5px", border:"none",height:"2.2rem",position:"absolute",right:"2.8vw" }} className="nav-link navbar-brand text-light" onClick={()=>logoutWithGoogle()} hidden={userContext.user == null? true : false}>Logout</button>}
  {windowSize[0]< 963 && <button style={{backgroundColor:"#edb077",borderRadius:"5px",padding:"2px 10px",margin:"1px 1px",marginLeft:"18px", fontWeight:"200", fontSize:"17.5px", border:"none",height:"2.2rem",position:"absolute",left:"-1vw"}} className="nav-link navbar-brand text-light" onClick={()=>logoutWithGoogle()} hidden={userContext.user == null? true : false}>Logout</button>}
      </Navbar>{step}</>)
}


