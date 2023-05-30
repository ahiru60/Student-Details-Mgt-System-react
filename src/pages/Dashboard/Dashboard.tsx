import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Components/UserContext"
import { Button, Card, Fade, Form } from "react-bootstrap"
import { searchStudents } from "../../Util/Firebase/Controller";
import { QuerySnapshot, DocumentData, doc } from "firebase/firestore";

export function Dashboard(){
    const userContext =useContext(UserContext)
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    //const [queryData, setQueryData] = useState <QuerySnapshot<DocumentData>>();
    const [windowSize, setWindowSize] = useState([
        window.innerWidth
      ]);
      //console.log(location)
      const [searchKeyword, setSearchKeyword] = useState("");
      useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize([window.innerWidth, window.innerHeight]);
        };
    
        window.addEventListener('resize', handleWindowResize);
        
        
        

        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);
    //console.log(userContext.user)
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

  async function searchHandel(keyword:string){
            console.log(` seach hndl fun ${keyword}`)
    const value = await searchStudents(keyword)
    const queryData = value
    queryData? queryData.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        
        }) : null
  }

    return(<>
    <Fade in={open}><h5 id="example-fade-text" style={{position:"absolute",top:"24px",left:"25px" ,color:"white"}}  hidden={windowSize[0]< 963 && true}>Welcome</h5></Fade>
    <Fade in={open2}><h5 id="example-fade-text" style={{position:"absolute",top:"24px",left:"25px" ,color:"white"}} hidden={windowSize[0]< 963 && true}> {userContext.user && userContext.user.displayName}</h5></Fade>
    {window.innerWidth}
    <div className="container" style={{padding:"0"}}>
  <div className="row align-items-start">
    <div className="col text-bg-primary w-100" >
      <div style={{
          position:'relative',
          background:'white',
          border: '1px solid black',
          padding:"3%", paddingBottom:"1%",
          margin:'2.4% 1%', fontSize:'100%',
          maxWidth:'100%'
          }}
          className="shadow rounded">
        <Form>
          <div style={{
            marginTop:'1rem',
            display:'flex',
            gap:".5rem",
            justifyContent:'flex-end',
          }}>
    
          
          
          </div>
          <div style={{
            marginTop:"3rem",
            position:'relative',
            bottom:'.7rem',
            display:'flex',
            justifyContent:"center",
            fontSize:'1.1rem',
            fontWeight:'700'
          }}>
            
          </div>
        </Form>
        
        </div>
      
    </div>
    <div className="col text-bg-success" style={{maxWidth:"32vw",height:"80vh"}}>
      <div style={{
          position:'relative',
          background:'white',
          border: '1px solid black',
          padding:"3%", paddingBottom:"1%",
          margin:'4% 1%', fontSize:'100%',
          maxWidth:'100%'
          }}
          className="shadow rounded">
        <Form>
          <div style={{
            marginTop:'1rem',
            display:'flex',
            gap:".5rem",
            justifyContent:'flex-end',
          }}>
    
        <Form.Control type="text" placeholder="Search" value={searchKeyword} onChange={e=>{setSearchKeyword(e.target.value);searchHandel(e.target.value.toLowerCase())}}></Form.Control>
          <Button onClick={()=>{searchHandel(searchKeyword)}}>Search</Button>
          </div>
          <div style={{
            marginTop:"3rem",
            position:'relative',
            bottom:'.7rem',
            display:'flex',
            justifyContent:"center",
            fontSize:'1.1rem',
            fontWeight:'700'
          }}>
            
          </div>
        </Form>
        
        </div>
      
    </div>
    </div>
  </div>
    </>)
}