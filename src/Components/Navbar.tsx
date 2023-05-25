import { useState } from "react"
import {getAuth, signOut} from "firebase/auth"
import { useNavigate } from "react-router-dom";
const pages = [
  {name: 'Dashboard', href: '/dashboard', current: true},
  {name: 'Application', href: '/application' , current: false}
  
]

export default function Header(){
  const[currentPage,setCurrentpage] = useState({})
  const navigate = useNavigate();
  const auth =getAuth();
  const [authing,setAuthing] = useState(false);

  const logoutWithGoogle = async()=> {
    setAuthing(true);
    signOut(auth).then(response=>{
        //console.log.(response.user.uid)
        navigate("/login")
    }).catch(error=>{
        console.log(error)
        setAuthing(false)
    })

    
}

    return(<><nav className="navbar justify-content-center" style={{backgroundColor:"#487E6E",height:"4.3rem"}} data-bs-theme="dark">
      <ul className="nav justify-content-center">
        {pages.map((page) =>(<li className="nav-item " key={page.name} style={{backgroundColor:"#88C6B4",borderRadius:"5px",margin:"1px 1px",padding:"3px 10px"}}>
          <a style={{padding:"2px 10px",margin:"1px 1px", fontWeight:"300"}} className="nav-link navbar-brand text-light"aria-current="page" href={page.href}>{page.name}</a>
        </li>))}
      </ul>
      {!authing?<button style={{backgroundColor:"#edb077",borderRadius:"5px",padding:"2px 10px",margin:"1px 1px", fontWeight:"300", fontSize:"20.5px", border:"none",height:"2.6rem"}} className="nav-link navbar-brand text-light" onClick={()=>logoutWithGoogle()}>Logout</button>: null}
      </nav></>)
}