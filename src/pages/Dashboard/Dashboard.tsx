import { useContext, useEffect, useRef, useState } from "react"
import { UserContext } from "../../Components/UserContext"
import { Fade } from "react-bootstrap"

export function Dashboard(){
    const userContext =useContext(UserContext)
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
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
    console.log(userContext.user)
    //useEffect(()=>{userContext.user},[])
    //
    useEffect (()=>{ setTimeout(function() {
        setOpen(true)
    }, 2000)
    setTimeout(function() {
        setOpen(false)
    }, 5000);
    setTimeout(function() {
        setOpen2(true)
    }, 6000);
},[])
    return(<>
    <Fade in={open}><h5 id="example-fade-text" style={{position:"absolute",top:"24px",left:"25px" ,color:"white"}}  hidden={windowSize[0]< 963 && true}>Welcome</h5></Fade>
    <Fade in={open2}><h5 id="example-fade-text" style={{position:"absolute",top:"24px",left:"25px" ,color:"white"}} hidden={windowSize[0]< 963 && true}> {userContext.user && userContext.user.displayName}</h5></Fade>
    {window.innerWidth}</>)
}