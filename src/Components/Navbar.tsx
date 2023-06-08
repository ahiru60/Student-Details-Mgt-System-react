import { useContext, useEffect, useState } from "react"
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"
import { Nav, Navbar } from "react-bootstrap";
import { UserContext } from "./UserContext";
import { useMultiStepRender } from "../Util/useMultiStepRender";
import Application from "../pages/Application/Application";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import PulseLoader from "react-spinners/PulseLoader";
import { checkStaff, getStudent } from "../Util/Firebase/Controller";


export default function Header(){
  const [id,SetId] = useState("")
  const[currentPage,setCurrentpage] = useState("")
  const auth =getAuth();
  const [authing,setAuthing] = useState(false);
  const userContext =useContext(UserContext)
  const [windowSize, setWindowSize] = useState([
    window.innerWidth
  ]);

  useEffect(()=>{var localStoreIndex =localStorage.getItem("NAV_INDEX_SDM_APP")
  console.log("page set triggered")
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
let e
    if(userContext.user?.uid== "SfLgfs9KocYxbhpXkx8pL4hePlz2"){e = <Dashboard/>} else if(userContext.user?.uid==undefined){e=null}else{e= <Application/>}

const{steps,currentStepIndex,step, isFirstStep,back,next,isLastStep,goTo} = useMultiStepRender([
  //<MainStudentDetails {...data} updateFields={updateFields}/>,
  <PulseLoader size={20} color="#487E6E"style={{height:"5px",display:"flex",justifyContent:"center",marginTop:"470px"}}/>,
  //e? e: <></>
  <Dashboard></Dashboard>,
  <Application></Application>
])
  

  
 

    return(<div style={{backgroundColor:"#F9FBF7"}}><Navbar className="navbar justify-content-center " data-bs-theme="dark" style={{backgroundColor:"#487E6E",height:"58px"}}>
      <Nav variant="pills" activeKey={currentPage} className="navbar justify-content-end">
  
  {userContext.user?.uid== userContext.user?.uid/*"SfLgfs9KocYxbhpXkx8pL4hePlz2"*/?<> <Nav.Item className="table-hover">
  {windowSize[0]> 500 ?<Nav.Link className="navbar navbar-brand text-light " style={{color:"white",fontSize:"19px",fontWeight:"350",marginRight:"0"}} onClick={()=>{goTo(1); localStorage.setItem("NAV_INDEX_SDM_APP","1")}} hidden={userContext.user == null? true : false} >Dashboard</Nav.Link>:<Nav.Link className="navbar navbar-brand text-light " style={{color:"white",fontSize:"8px",fontWeight:"350",marginRight:"0"}} onClick={()=>{goTo(1); localStorage.setItem("NAV_INDEX_SDM_APP","1")}} hidden={userContext.user == null? true : false} >Dashboard</Nav.Link>}
  </Nav.Item>
  |<Nav.Item>
  {windowSize[0]> 500 ?<Nav.Link className="navbar navbar-brand text-light " style={{color:"white",fontSize:"19px",fontWeight:"350",marginRight:"0"}} onClick={()=>{goTo(2);localStorage.setItem("NAV_INDEX_SDM_APP","2")}} hidden={userContext.user == null? true : false}>Application</Nav.Link>:<Nav.Link className="navbar navbar-brand text-light " style={{color:"white",fontSize:"8px",fontWeight:"350",marginRight:"0"}} onClick={()=>{goTo(2);localStorage.setItem("NAV_INDEX_SDM_APP","2")}} hidden={userContext.user == null? true : false}>Application</Nav.Link>}
</Nav.Item></>:<></>}
  
  </Nav> {windowSize[0]> 963 && <button style={{backgroundColor:"#edb077",padding:"2px 10px", fontWeight:"200", fontSize:"14.5px", border:"none",height:"100%",position:"absolute",right:"0" }} className="nav-link text-light" onClick={()=>logoutWithGoogle()} hidden={userContext.user == null? true : false}>Logout</button>}
  {windowSize[0]< 963 && <button style={{backgroundColor:"#edb077",padding:"2px 10px",  fontWeight:"200", fontSize:"14.5px", border:"none",height:"100%",position:"absolute",left:"0"}} className="nav-link text-light" onClick={()=>logoutWithGoogle()} hidden={userContext.user == null? true : false}>Logout</button>}
      </Navbar>{step}</div>)

      /*<nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
    <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
    <ul className="navbar-nav px-3">
      <li className="nav-item text-nowrap">
        <a className="nav-link" href="#">Sign out</a>
      </li>
    </ul>
  </nav>*/
}


