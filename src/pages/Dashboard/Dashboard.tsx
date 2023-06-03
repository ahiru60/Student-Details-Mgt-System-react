import { FormEvent, useContext, useEffect, useState } from "react"
import { UserContext } from "../../Components/UserContext"
import { Button, Card, Fade, Form } from "react-bootstrap"
import { checkStaff, getStudent, searchStudents } from "../../Util/Firebase/Controller";
import { QuerySnapshot, DocumentData, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth/cordova";
import { PulseLoader } from "react-spinners";
import { useMultiStepRender } from "../../Util/useMultiStepRender";
import { MainStudentDetails } from "./MainStudentDetails";

export function Dashboard(){
  
    const userContext =useContext(UserContext)
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [searchData, setsearchData] = useState<DocumentData |null>();
    const [displayData,setDisplayData] = useState<any>(getFormValue);
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

function getFormValue(){
  
  const sendingDataDB = {}

  const storedLocalValues = localStorage.getItem("SEACRH_RESULT_FORM_DATA_ON_UPDATE_SDM_APP")
  if(storedLocalValues){return JSON.parse(storedLocalValues)}
  //else if(studentDataDB){return  }
  else{return null}
}

useEffect(()=>{
  displayData&& localStorage.setItem("FORM_DATA_ON_UPDATE_SDM_APP",JSON.stringify(displayData))
  //console.log("updating..")
},[updateFields])

function updateFields(fields: Partial<FormData>){
  setDisplayData((prev: any)=>{
    return{...prev,...fields}
  })
  //updateStudent( e,{...data});
  
}

  /*async function searchHandel(keyword:string){
            console.log(` seach hndl fun ${keyword}`)
    const value = await searchStudents(keyword)
    const queryData = value
    setsearchData(queryData)
    console.log(queryData.docs)
  }*/
  const[loading,setLoading]= useState(false)
  
  async function searchHandel(keyword:string){
    console.log(` seach hndl fun ${keyword}`)
    setsearchData(null)
    setLoading(true)
    const value = await searchStudents(keyword)
    setLoading(false)
    const queryData = value
    setsearchData(queryData)
    console.log(queryData.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
  }))
    
  }
  
  function handelClick(e:any){
    searchData?.forEach((doc: any) => {
      console.log(e)
      if(doc.data().uid == e){
      setDisplayData(doc.data());
      console.log(doc.data())
    }
    });
  }

  const{steps,currentStepIndex,step, isFirstStep,back,next,isLastStep} = useMultiStepRender([
    <MainStudentDetails {...displayData} updateFields={updateFields}/>
  ])

  async function onSubmit(e:FormEvent){ 
    e.preventDefault()
    if(!isLastStep){return next()}
    else{
      var parsedData
      const storedLocalValues = localStorage.getItem("FORM_DATA_ON_UPDATE_SDM_APP")
    if(storedLocalValues){parsedData =JSON.parse(storedLocalValues)}
     const context = {uid:userContext.user?.uid,
      displayname:`${parsedData.otherNames.toLowerCase()} ${parsedData.surname.toLowerCase()}`}
      const userDoc ={...displayData,...context}
      //userContext.user != null? await checkStudentOnFS(userContext.user && userContext.user.uid, userContext.setStudentDoc)? setError("Already submitted..!") : addStudent({...userDoc},userContext,setError):  setError("Error occured..!")
      
      //alert("mysql")
    }
    
  }

    return(<>
    {window.innerWidth}
    <div className="container" style={{padding:"0",color:"black"}}>
  <div className="row align-items-start">
    <div className="col w-100" >
      <div style={{
          position:'relative',
          background:'white',
          border: '1px solid black',
          padding:"10%", paddingBottom:"1%",
          margin:'0% 0%', fontSize:'100%',
          maxWidth:'100%'
          }}
          className="shadow rounded">
        <Form style={{color:"grey"}}>
          <div style={{
            marginTop:'0rem',
            gap:".5rem",
            color:"black"
          }}>
    
          {step}
          
          </div>
          <div style={{
            marginTop:"3rem",
            position:'relative',
            bottom:'.7rem',
            display:'flex',
            justifyContent:"center",
            fontWeight:'700',
            color:"black"
          }}>
            
            {!isFirstStep && <button className='btn btn-outline-dark' type="button" onClick={back}>Back</button>}
    
          <button className={isLastStep ? 'btn btn-success': 'btn btn-dark' } type="submit">{!isLastStep ? 'Next':'Save'}</button>
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
            {!loading?<div style={{height:"5px",display:"flex",justifyContent:"center"}}></div>:<PulseLoader size={10} color="#487E6E"style={{height:"5px",display:"flex",justifyContent:"center"}}/>}
            {searchData?searchData.docs.map((doc: { data: () => any; }) => <div  onClick={()=>{handelClick(doc.data().uid)}} key={doc.data().uid} id="searchResult" className="rounded" style={{color:"black",marginTop:"0.2rem",padding:"0.3rem 1rem",cursor:"pointer"}}><div style={{fontSize:"1rem",fontWeight:"600",color:"#424242",pointerEvents: "none"}}>{ `${doc.data().title}. ${doc.data().otherNames.charAt(0).toUpperCase() + doc.data().otherNames.slice(1)} ${doc.data().surname}`}</div><div style={{pointerEvents: "none",color:"#757575"}}>{`${doc.data().monashId?doc.data().monashId:""} ${doc.data().passportNumber?doc.data().passportNumber:""} ${doc.data().nationality?doc.data().nationality.charAt(0).toUpperCase() + doc.data().nationality.slice(1):""} ${doc.data().email?doc.data().email:""}`}</div></div>):null}
            
          </div>
        </Form>
            
        </div>
      
    </div>
    </div>
  </div>
    </>)
}