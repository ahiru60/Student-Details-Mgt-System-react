import { FormEvent, useContext, useEffect, useState } from "react"
import { UserContext } from "../../Components/UserContext"
import { Alert, Button, Card, Fade, Form, Table } from "react-bootstrap"
import { checkStaff, checkStudentOnFS, getStudent, searchStudents, updateStudent } from "../../Util/Firebase/Controller";
import { QuerySnapshot, DocumentData, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth/cordova";
import { PulseLoader } from "react-spinners";
import { useMultiStepRender } from "../../Util/useMultiStepRender";
import { MainStudentDetails } from "../../Components/FormComps/MainStudentDetails";
import { StudentContactDetails } from "../../Components/FormComps/StudentContactDetails";
import { StudentFamilyImmigrationHistory } from "../../Components/FormComps/StudentFamilyImmigrationHistory";
import { StudentPassportAndVisaDetails } from "../../Components/FormComps/StudentPassportAndVisaDetails";
import { StudentWorkExpResumePersonalStatementDetails } from "../../Components/FormComps/StudentWorkExpResumePersonalStatementDetails";
import { SearchResultsTable } from "./SearchResultsTable";

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
    const [error,setError] = useState<any>("")
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
const [editing,setEditing]=useState(false);
useEffect(()=>{
  displayData && editing == false? localStorage.setItem("FORM_DATA_ON_UPDATE_SDM_APP",JSON.stringify(displayData)):null
  //console.log("updating..")
},[updateFields])



function updateFields(fields: Partial<FormData>){
  if(editing){
  setDisplayData((prev: any)=>{
    return{...prev,...fields}
  })}
  else{
    return null
  }
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
  const[loading2,setLoading2]= useState(false)
  
  
  async function searchHandel(keyword:string){
    console.log(` seach hndl fun ${keyword}`)
    if(keyword !=""){
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
    
    
  }
  
  function handelClick(e:any){
    setDisplayData(null)
    setLoading2(true)
    searchData?.forEach((doc: any) => {
      console.log(e)
      if(doc.data().uid == e){
      //setDisplayData(doc.data());
      console.log(doc.data())
      var passData = doc.data()
      setDisplayData(doc.data())}
      })
      setLoading2(false)
      
  }

  

  const{steps,currentStepIndex,step, isFirstStep,back,next,isLastStep,goTo} = useMultiStepRender([
    <MainStudentDetails {...displayData} updateFields={updateFields}/>,
    <StudentContactDetails {...displayData} updateFields={updateFields}/>,
    <StudentPassportAndVisaDetails {...displayData} updateFields={updateFields}/>,
    <StudentFamilyImmigrationHistory {...displayData} updateFields={updateFields}/>,
    <StudentWorkExpResumePersonalStatementDetails {...displayData} updateFields={updateFields}/>
  ])

  async function onSubmit(){ 
   // e.preventDefault()
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

  const[backupData,setBackupData] = useState()
  function handelCancel(){
    editing==false? setBackupData(displayData):setDisplayData(backupData)
    goTo(0)
    setEditing(!editing)
  }
  function handelSave(){
    setLoading2(true)
    updateStudent(displayData.uid,displayData).then(
      ()=>{
        setLoading2(false)
        setEditing(false)
      }
    )
    

  }
  function hendelClose(){
    setDisplayData(null)
  }

  const [qoute,setQuote] = useState()

  function inspire(){
    
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      setQuote(data);
      console.log(data[0])
    });
  }

    return(<><br />
    <div className="container" style={{padding:"0",color:"black"}}>
  <div className="row align-items-start">
    <div className="col w-100" style={{
      overflow:"hidden",overflowY: "scroll",maxHeight:"49.5rem"
    }}>
      
      {displayData? <div className="rounded"style={{border:"solid 1px  #487E6E29",padding:"2rem",paddingTop:"1.5rem",backgroundColor:"white"}}>
      <div style={{borderRadius:"3.4px",marginBottom:"0",marginTop:"0rem",display:"flex",justifyContent:"flex-end",cursor:"pointer"}} onClick={()=>{hendelClose()}}><span className="material-icons" style={{color:"#487E6E"}}>close</span></div>
      {loading2? <PulseLoader size={15} color="#487E6E"style={{height:"5px",display:"flex",justifyContent:"center"}}/>:<div style={{height:"5px"}}></div>}
      
        <button className={editing?"btn btn-danger":"btn btn-light"} style={{borderRadius:"3.4px",marginBottom:"1.3rem",marginTop:"0rem"}} onClick={()=>{handelCancel()}}>{editing?"Cancel":"Edit"}</button>
        {editing&& <button className="btn btn btn-success" style={{border:"none",borderRadius:"3.4px",marginBottom:"1.3rem",marginTop:"0rem",marginLeft:"0.4rem"}} onClick={()=>{handelSave()}}>Save</button>}
        {displayData? editing? 
        <>{step}<br /><br /><div style={{display:"flex",justifyContent:"flex-end"}}>
        {!isFirstStep && <button className='btn btn-outline-dark' type="button" onClick={back}>Back</button>}
    
        <button className={isLastStep ? 'btn btn-success': 'btn btn-dark' } style={{marginLeft:"0.5rem"}} onClick={!isLastStep? next:handelSave} type="submit">{!isLastStep ? 'Next':'Save'}</button>
        </div>
        {error && error!="success"? <><br /><Alert variant="danger">{error}</Alert></> : null}
        {error=="success"? <><br /><Alert variant="success">Form submitted successfully</Alert></>:null}
        </>
        :<SearchResultsTable {...displayData}/>:null}
        
        </div>:<div style={{marginTop:"80px",padding:"0px 80px"}}><br /><h1 style={{fontWeight:"300",fontSize:"45px"}}>Hi {userContext.user?.displayName!=null? userContext.user?.displayName :"There"}!!</h1><h2>
          Please use search bar to find the student you looking for =&gt;</h2><br /></div>}
          
          
        
      
      
    </div>
    <div className="col " style={{maxWidth:"32vw",height:"89vh" ,}}>
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