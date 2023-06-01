import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Components/UserContext"
import { Button, Card, Fade, Form } from "react-bootstrap"
import { getStudent, searchStudents } from "../../Util/Firebase/Controller";
import { QuerySnapshot, DocumentData, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth/cordova";

export function Dashboard(){
    const userContext =useContext(UserContext)
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [searchData, setsearchData] = useState<DocumentData>();
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




  /*async function searchHandel(keyword:string){
            console.log(` seach hndl fun ${keyword}`)
    const value = await searchStudents(keyword)
    const queryData = value
    setsearchData(queryData)
    console.log(queryData.docs)
  }*/

  async function searchHandel(keyword:string){
    console.log(` seach hndl fun ${keyword}`)
    const value = await searchStudents(keyword)
    const queryData = value
    setsearchData(queryData)
    console.log(queryData.docs)
  }

    return(<>
    <Fade in={open}><h5 id="example-fade-text" style={{position:"absolute",top:"24px",left:"25px" ,color:"white"}}  hidden={windowSize[0]< 963 && true}>Welcome</h5></Fade>
    <Fade in={open2}><h5 id="example-fade-text" style={{position:"absolute",top:"24px",left:"25px" ,color:"white"}} hidden={windowSize[0]< 963 && true}> {userContext.user && userContext.user.displayName}</h5></Fade>
    {window.innerWidth}
    <div className="container" style={{padding:"0",color:"black"}}>
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
    <div className="col " style={{maxWidth:"32vw",height:"80vh" ,}}>
      <div style={{
          position:'relative',
          background:'white',
          //border: '1px solid black',
          padding:"3%", paddingBottom:"1%",
          margin:'4% 1%', fontSize:'100%',
          maxWidth:'100%',
          backgroundColor:"#f5f5f5"
          }}
          className=" rounded">
        <Form >
          <div style={{
            marginTop:'1rem',
            display:'flex',
            gap:".5rem",
            justifyContent:'flex-end',
            color:"black",
            
          }}>
    
        <Form.Control style={{boxShadow:"none",border: "grey"}} type="search" placeholder="Search" value={searchKeyword} onChange={e=>{setSearchKeyword(e.target.value);searchHandel(e.target.value.toLowerCase())}}></Form.Control>
          {/* <Button onClick={()=>{searchHandel(searchKeyword)}}>Search</Button> */}
            
          </div>
          <p style={{fontSize:"0.7rem",margin:"0.3rem",color:"#757575",marginLeft:"0.4rem"}}>Email, Surname or Other name, Nationality, MonashID, Passport Number </p>
          <div className="rounded scrollbar" style={{
            marginTop:"1.2rem",
            padding:"0.8rem 0rem",
            paddingTop:"0rem",
            paddingRight:"0.2rem",
            position:'relative',
            bottom:'.7rem',
            justifyContent:"start",
            fontSize:'0.785rem',
            fontWeight:'500',
            backgroundColor:"rgba(52, 52, 52, 0.0)",
            maxHeight:"600px",
            overflow:"hidden",
            overflowY: "scroll"

          }}>

            {searchData?.docs.map((doc: { data: () => any; }) => <div id="searchResult" className="rounded" style={{color:"black",marginTop:"0.2rem",padding:"0.3rem 1rem",cursor:"pointer"}}><div style={{fontSize:"1rem",fontWeight:"600",color:"#424242",pointerEvents: "none"}}>{ `${doc.data().title}. ${doc.data().otherNames.charAt(0).toUpperCase() + doc.data().otherNames.slice(1)} ${doc.data().surname}`}</div><div style={{pointerEvents: "none"}}>{`${doc.data().monashId?doc.data().monashId:""} ${doc.data().passportNumber?doc.data().passportNumber:""} ${doc.data().nationality?doc.data().nationality.charAt(0).toUpperCase() + doc.data().nationality.slice(1):""} ${doc.data().email?doc.data().email:""}`}</div></div>)}
            {searchData?.docs.map((doc: { data: () => any; }) => <div id="searchResult" className="rounded" style={{color:"black",marginTop:"0.2rem",padding:"0.3rem 1rem",cursor:"pointer"}}><div style={{fontSize:"1rem",fontWeight:"600",color:"#424242",pointerEvents: "none"}}>{ `${doc.data().title}. ${doc.data().otherNames.charAt(0).toUpperCase() + doc.data().otherNames.slice(1)} ${doc.data().surname}`}</div><div style={{pointerEvents: "none"}}>{`${doc.data().monashId?doc.data().monashId:""} ${doc.data().passportNumber?doc.data().passportNumber:""} ${doc.data().nationality?doc.data().nationality.charAt(0).toUpperCase() + doc.data().nationality.slice(1):""} ${doc.data().email?doc.data().email:""}`}</div></div>)}
            {searchData?.docs.map((doc: { data: () => any; }) => <div id="searchResult" className="rounded" style={{color:"black",marginTop:"0.2rem",padding:"0.3rem 1rem",cursor:"pointer"}}><div style={{fontSize:"1rem",fontWeight:"600",color:"#424242",pointerEvents: "none"}}>{ `${doc.data().title}. ${doc.data().otherNames.charAt(0).toUpperCase() + doc.data().otherNames.slice(1)} ${doc.data().surname}`}</div><div style={{pointerEvents: "none"}}>{`${doc.data().monashId?doc.data().monashId:""} ${doc.data().passportNumber?doc.data().passportNumber:""} ${doc.data().nationality?doc.data().nationality.charAt(0).toUpperCase() + doc.data().nationality.slice(1):""} ${doc.data().email?doc.data().email:""}`}</div></div>)}
            {searchData?.docs.map((doc: { data: () => any; }) => <div id="searchResult" className="rounded" style={{color:"black",marginTop:"0.2rem",padding:"0.3rem 1rem",cursor:"pointer"}}><div style={{fontSize:"1rem",fontWeight:"600",color:"#424242",pointerEvents: "none"}}>{ `${doc.data().title}. ${doc.data().otherNames.charAt(0).toUpperCase() + doc.data().otherNames.slice(1)} ${doc.data().surname}`}</div><div style={{pointerEvents: "none"}}>{`${doc.data().monashId?doc.data().monashId:""} ${doc.data().passportNumber?doc.data().passportNumber:""} ${doc.data().nationality?doc.data().nationality.charAt(0).toUpperCase() + doc.data().nationality.slice(1):""} ${doc.data().email?doc.data().email:""}`}</div></div>)}
            {searchData?.docs.map((doc: { data: () => any; }) => <div id="searchResult" className="rounded" style={{color:"black",marginTop:"0.2rem",padding:"0.3rem 1rem",cursor:"pointer"}}><div style={{fontSize:"1rem",fontWeight:"600",color:"#424242",pointerEvents: "none"}}>{ `${doc.data().title}. ${doc.data().otherNames.charAt(0).toUpperCase() + doc.data().otherNames.slice(1)} ${doc.data().surname}`}</div><div style={{pointerEvents: "none"}}>{`${doc.data().monashId?doc.data().monashId:""} ${doc.data().passportNumber?doc.data().passportNumber:""} ${doc.data().nationality?doc.data().nationality.charAt(0).toUpperCase() + doc.data().nationality.slice(1):""} ${doc.data().email?doc.data().email:""}`}</div></div>)}
            {searchData?.docs.map((doc: { data: () => any; }) => <div id="searchResult" className="rounded" style={{color:"black",marginTop:"0.2rem",padding:"0.3rem 1rem",cursor:"pointer"}}><div style={{fontSize:"1rem",fontWeight:"600",color:"#424242",pointerEvents: "none"}}>{ `${doc.data().title}. ${doc.data().otherNames.charAt(0).toUpperCase() + doc.data().otherNames.slice(1)} ${doc.data().surname}`}</div><div style={{pointerEvents: "none"}}>{`${doc.data().monashId?doc.data().monashId:""} ${doc.data().passportNumber?doc.data().passportNumber:""} ${doc.data().nationality?doc.data().nationality.charAt(0).toUpperCase() + doc.data().nationality.slice(1):""} ${doc.data().email?doc.data().email:""}`}</div></div>)}
            {searchData?.docs.map((doc: { data: () => any; }) => <div id="searchResult" className="rounded" style={{color:"black",marginTop:"0.2rem",padding:"0.3rem 1rem",cursor:"pointer"}}><div style={{fontSize:"1rem",fontWeight:"600",color:"#424242",pointerEvents: "none"}}>{ `${doc.data().title}. ${doc.data().otherNames.charAt(0).toUpperCase() + doc.data().otherNames.slice(1)} ${doc.data().surname}`}</div><div style={{pointerEvents: "none"}}>{`${doc.data().monashId?doc.data().monashId:""} ${doc.data().passportNumber?doc.data().passportNumber:""} ${doc.data().nationality?doc.data().nationality.charAt(0).toUpperCase() + doc.data().nationality.slice(1):""} ${doc.data().email?doc.data().email:""}`}</div></div>)}
            {searchData?.docs.map((doc: { data: () => any; }) => <div id="searchResult" className="rounded" style={{color:"black",marginTop:"0.2rem",padding:"0.3rem 1rem",cursor:"pointer"}}><div style={{fontSize:"1rem",fontWeight:"600",color:"#424242",pointerEvents: "none"}}>{ `${doc.data().title}. ${doc.data().otherNames.charAt(0).toUpperCase() + doc.data().otherNames.slice(1)} ${doc.data().surname}`}</div><div style={{pointerEvents: "none"}}>{`${doc.data().monashId?doc.data().monashId:""} ${doc.data().passportNumber?doc.data().passportNumber:""} ${doc.data().nationality?doc.data().nationality.charAt(0).toUpperCase() + doc.data().nationality.slice(1):""} ${doc.data().email?doc.data().email:""}`}</div></div>)}
            {searchData?.docs.map((doc: { data: () => any; }) => <div id="searchResult" className="rounded" style={{color:"black",marginTop:"0.2rem",padding:"0.3rem 1rem",cursor:"pointer"}}><div style={{fontSize:"1rem",fontWeight:"600",color:"#424242",pointerEvents: "none"}}>{ `${doc.data().title}. ${doc.data().otherNames.charAt(0).toUpperCase() + doc.data().otherNames.slice(1)} ${doc.data().surname}`}</div><div style={{pointerEvents: "none"}}>{`${doc.data().monashId?doc.data().monashId:""} ${doc.data().passportNumber?doc.data().passportNumber:""} ${doc.data().nationality?doc.data().nationality.charAt(0).toUpperCase() + doc.data().nationality.slice(1):""} ${doc.data().email?doc.data().email:""}`}</div></div>)}
            {searchData?.docs.map((doc: { data: () => any; }) => <div id="searchResult" className="rounded" style={{color:"black",marginTop:"0.2rem",padding:"0.3rem 1rem",cursor:"pointer"}}><div style={{fontSize:"1rem",fontWeight:"600",color:"#424242",pointerEvents: "none"}}>{ `${doc.data().title}. ${doc.data().otherNames.charAt(0).toUpperCase() + doc.data().otherNames.slice(1)} ${doc.data().surname}`}</div><div style={{pointerEvents: "none"}}>{`${doc.data().monashId?doc.data().monashId:""} ${doc.data().passportNumber?doc.data().passportNumber:""} ${doc.data().nationality?doc.data().nationality.charAt(0).toUpperCase() + doc.data().nationality.slice(1):""} ${doc.data().email?doc.data().email:""}`}</div></div>)}
            {searchData?.docs.map((doc: { data: () => any; }) => <div id="searchResult" className="rounded" style={{color:"black",marginTop:"0.2rem",padding:"0.3rem 1rem",cursor:"pointer"}}><div style={{fontSize:"1rem",fontWeight:"600",color:"#424242",pointerEvents: "none"}}>{ `${doc.data().title}. ${doc.data().otherNames.charAt(0).toUpperCase() + doc.data().otherNames.slice(1)} ${doc.data().surname}`}</div><div style={{pointerEvents: "none"}}>{`${doc.data().monashId?doc.data().monashId:""} ${doc.data().passportNumber?doc.data().passportNumber:""} ${doc.data().nationality?doc.data().nationality.charAt(0).toUpperCase() + doc.data().nationality.slice(1):""} ${doc.data().email?doc.data().email:""}`}</div></div>)}
            {searchData?.docs.map((doc: { data: () => any; }) => <div id="searchResult" className="rounded" style={{color:"black",marginTop:"0.2rem",padding:"0.3rem 1rem",cursor:"pointer"}}><div style={{fontSize:"1rem",fontWeight:"600",color:"#424242",pointerEvents: "none"}}>{ `${doc.data().title}. ${doc.data().otherNames.charAt(0).toUpperCase() + doc.data().otherNames.slice(1)} ${doc.data().surname}`}</div><div style={{pointerEvents: "none"}}>{`${doc.data().monashId?doc.data().monashId:""} ${doc.data().passportNumber?doc.data().passportNumber:""} ${doc.data().nationality?doc.data().nationality.charAt(0).toUpperCase() + doc.data().nationality.slice(1):""} ${doc.data().email?doc.data().email:""}`}</div></div>)}
            {searchData?.docs.map((doc: { data: () => any; }) => <div id="searchResult" className="rounded" style={{color:"black",marginTop:"0.2rem",padding:"0.3rem 1rem",cursor:"pointer"}}><div style={{fontSize:"1rem",fontWeight:"600",color:"#424242",pointerEvents: "none"}}>{ `${doc.data().title}. ${doc.data().otherNames.charAt(0).toUpperCase() + doc.data().otherNames.slice(1)} ${doc.data().surname}`}</div><div style={{pointerEvents: "none"}}>{`${doc.data().monashId?doc.data().monashId:""} ${doc.data().passportNumber?doc.data().passportNumber:""} ${doc.data().nationality?doc.data().nationality.charAt(0).toUpperCase() + doc.data().nationality.slice(1):""} ${doc.data().email?doc.data().email:""}`}</div></div>)}
            {searchData?.docs.map((doc: { data: () => any; }) => <div id="searchResult" className="rounded" style={{color:"black",marginTop:"0.2rem",padding:"0.3rem 1rem",cursor:"pointer"}}><div style={{fontSize:"1rem",fontWeight:"600",color:"#424242",pointerEvents: "none"}}>{ `${doc.data().title}. ${doc.data().otherNames.charAt(0).toUpperCase() + doc.data().otherNames.slice(1)} ${doc.data().surname}`}</div><div style={{pointerEvents: "none"}}>{`${doc.data().monashId?doc.data().monashId:""} ${doc.data().passportNumber?doc.data().passportNumber:""} ${doc.data().nationality?doc.data().nationality.charAt(0).toUpperCase() + doc.data().nationality.slice(1):""} ${doc.data().email?doc.data().email:""}`}</div></div>)}
            {searchData?.docs.map((doc: { data: () => any; }) => <div id="searchResult" className="rounded" style={{color:"black",marginTop:"0.2rem",padding:"0.3rem 1rem",cursor:"pointer"}}><div style={{fontSize:"1rem",fontWeight:"600",color:"#424242",pointerEvents: "none"}}>{ `${doc.data().title}. ${doc.data().otherNames.charAt(0).toUpperCase() + doc.data().otherNames.slice(1)} ${doc.data().surname}`}</div><div style={{pointerEvents: "none"}}>{`${doc.data().monashId?doc.data().monashId:""} ${doc.data().passportNumber?doc.data().passportNumber:""} ${doc.data().nationality?doc.data().nationality.charAt(0).toUpperCase() + doc.data().nationality.slice(1):""} ${doc.data().email?doc.data().email:""}`}</div></div>)}
            {searchData?.docs.map((doc: { data: () => any; }) => <div id="searchResult" className="rounded" style={{color:"black",marginTop:"0.2rem",padding:"0.3rem 1rem",cursor:"pointer"}}><div style={{fontSize:"1rem",fontWeight:"600",color:"#424242",pointerEvents: "none"}}>{ `${doc.data().title}. ${doc.data().otherNames.charAt(0).toUpperCase() + doc.data().otherNames.slice(1)} ${doc.data().surname}`}</div><div style={{pointerEvents: "none"}}>{`${doc.data().monashId?doc.data().monashId:""} ${doc.data().passportNumber?doc.data().passportNumber:""} ${doc.data().nationality?doc.data().nationality.charAt(0).toUpperCase() + doc.data().nationality.slice(1):""} ${doc.data().email?doc.data().email:""}`}</div></div>)}
            {searchData?.docs.map((doc: { data: () => any; }) => <div id="searchResult" className="rounded" style={{color:"black",marginTop:"0.2rem",padding:"0.3rem 1rem",cursor:"pointer"}}><div style={{fontSize:"1rem",fontWeight:"600",color:"#424242",pointerEvents: "none"}}>{ `${doc.data().title}. ${doc.data().otherNames.charAt(0).toUpperCase() + doc.data().otherNames.slice(1)} ${doc.data().surname}`}</div><div style={{pointerEvents: "none"}}>{`${doc.data().monashId?doc.data().monashId:""} ${doc.data().passportNumber?doc.data().passportNumber:""} ${doc.data().nationality?doc.data().nationality.charAt(0).toUpperCase() + doc.data().nationality.slice(1):""} ${doc.data().email?doc.data().email:""}`}</div></div>)}
            {searchData?.docs.map((doc: { data: () => any; }) => <div id="searchResult" className="rounded" style={{color:"black",marginTop:"0.2rem",padding:"0.3rem 1rem",cursor:"pointer"}}><div style={{fontSize:"1rem",fontWeight:"600",color:"#424242",pointerEvents: "none"}}>{ `${doc.data().title}. ${doc.data().otherNames.charAt(0).toUpperCase() + doc.data().otherNames.slice(1)} ${doc.data().surname}`}</div><div style={{pointerEvents: "none"}}>{`${doc.data().monashId?doc.data().monashId:""} ${doc.data().passportNumber?doc.data().passportNumber:""} ${doc.data().nationality?doc.data().nationality.charAt(0).toUpperCase() + doc.data().nationality.slice(1):""} ${doc.data().email?doc.data().email:""}`}</div></div>)}
            {searchData?.docs.map((doc: { data: () => any; }) => <div id="searchResult" className="rounded" style={{color:"black",marginTop:"0.2rem",padding:"0.3rem 1rem",cursor:"pointer"}}><div style={{fontSize:"1rem",fontWeight:"600",color:"#424242",pointerEvents: "none"}}>{ `${doc.data().title}. ${doc.data().otherNames.charAt(0).toUpperCase() + doc.data().otherNames.slice(1)} ${doc.data().surname}`}</div><div style={{pointerEvents: "none"}}>{`${doc.data().monashId?doc.data().monashId:""} ${doc.data().passportNumber?doc.data().passportNumber:""} ${doc.data().nationality?doc.data().nationality.charAt(0).toUpperCase() + doc.data().nationality.slice(1):""} ${doc.data().email?doc.data().email:""}`}</div></div>)}
            
          </div>
        </Form>
            
        </div>
      
    </div>
    </div>
  </div>
    </>)
}