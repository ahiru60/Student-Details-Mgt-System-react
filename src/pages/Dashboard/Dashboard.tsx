import { FormEvent, useContext, useEffect, useState } from "react"
import { UserContext } from "../../Components/UserContext"
import { Button, Card, Fade, Form, Table } from "react-bootstrap"
import { checkStaff, checkStudentOnFS, getStudent, searchStudents } from "../../Util/Firebase/Controller";
import { QuerySnapshot, DocumentData, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth/cordova";
import { PulseLoader } from "react-spinners";
import { useMultiStepRender } from "../../Util/useMultiStepRender";
import { MainStudentDetails } from "../../Components/FormComps/MainStudentDetails";
import { StudentContactDetails } from "../../Components/FormComps/StudentContactDetails";
import { StudentFamilyImmigrationHistory } from "../../Components/FormComps/StudentFamilyImmigrationHistory";
import { StudentPassportAndVisaDetails } from "../../Components/FormComps/StudentPassportAndVisaDetails";
import { StudentWorkExpResumePersonalStatementDetails } from "../../Components/FormComps/StudentWorkExpResumePersonalStatementDetails";

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

const [editing,setEditing]=useState(false);

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
      //setDisplayData(doc.data());
      console.log(doc.data())
      setDisplayData(
        <><br /><br />
        <h3>APPLICATION | BASIC DETAILS</h3><br />
        <h4>Monash Record</h4>
          <Table>
            <tbody>
            <tr>
                <td>Have a monash student ID number</td><td>{doc.data().monashIdCheck}</td>
              </tr>
              <tr>
                <td>Monash ID</td><td>{doc.data().monashId}</td>
              </tr>
              <tr>
                <td>Enrolled monash student</td><td>{doc.data().monashEnrolledCheck}</td>
              </tr>
            </tbody>
          </Table><br />
          <h5>1st University Applying For:</h5>
          <Table>
            <tbody>
              <tr>
                <td>University Name</td><td>{doc.data().universityPreferenceOne}</td>
              </tr>
              <tr>
                <td>Preference 1 (Programme Code & Programme Name)</td><td>{doc.data().firstUniProgramPreferenceOne}</td>
              </tr>
              <tr>
                <td>Preference 2 (Programme Code & Programme Name)</td><td>{doc.data().firstUniProgramPreferenceTwo}</td>
              </tr>
              <tr>
                <td>Preference 3 (Programme Code & Programme Name)</td><td>{doc.data().firstUniProgramPreferenceThree}</td>
              </tr>
              <tr>
                <td>Intake</td><td>{doc.data().intake}</td>
              </tr>
              <tr>
                <td>Campus (Location)</td><td>{doc.data().campus}</td>
              </tr>
            </tbody>
          </Table> <br />
          <h5>2nd University Applying For:</h5>
          <Table><br />
            <tbody>
              <tr>
                <td>University Name</td><td>{doc.data().universityPreferenceTwo}</td>
              </tr>
              <tr>
                <td>Preference 1 (Programme Code & Programme Name)</td><td>{doc.data().secondUniProgramPreferenceOne}</td>
              </tr>
              <tr>
                <td>Preference 2 (Programme Code & Programme Name)</td><td>{doc.data().secondUniProgramPreferenceTwo}</td>
              </tr>
              <tr>
                <td>Preference 3 (Programme Code & Programme Name)</td><td>{doc.data().secondUniProgramPreferenceThree}</td>
              </tr>
              <tr>
                <td>Intake</td><td>{doc.data().secondUniintake}</td>
              </tr>
              <tr>
                <td>Campus (Location)</td><td>{doc.data().secondUnicampus}</td>
              </tr>
            </tbody>
          </Table><br /> 
          <h5>3rd University Applying For:</h5>
          <Table>
            <tbody>
              <tr>
                <td>University Name</td><td>{doc.data().universityPreferenceThree}</td>
              </tr>
              <tr>
                <td>Preference 1 (Programme Code & Programme Name)</td><td>{doc.data().thirdUniProgramPreferenceOne}</td>
              </tr>
              <tr>
                <td>Preference 2 (Programme Code & Programme Name)</td><td>{doc.data().thirdUniProgramPreferenceTwo}</td>
              </tr>
              <tr>
                <td>Preference 3 (Programme Code & Programme Name)</td><td>{doc.data().thirdUniProgramPreferenceThree}</td>
              </tr>
              <tr>
                <td>Intake</td><td>{doc.data().thirdUniintake}</td>
              </tr>
              <tr>
                <td>Campus (Location)</td><td>{doc.data().thirdUnicampus}</td>
              </tr>
            </tbody>
          </Table> <br />

          <h4>Personal Details</h4>
          <Table>
            <tbody>
              <tr>
                <td>Surname</td><td>{doc.data().surname.charAt(0).toUpperCase()+doc.data().surname.slice(1)}</td>
              </tr>
              <tr>
                <td>Other names</td><td>{doc.data().otherNames.charAt(0).toUpperCase()+doc.data().otherNames.slice(1)}</td>
              </tr>
              <tr>
                <td>Gender</td><td>{doc.data().gender}</td>
              </tr>
              <tr>
                <td>Date of birth</td><td>{doc.data().dateOfBirth}</td>
              </tr>
              <tr>
                <td>Email</td><td>{doc.data().email}</td>
              </tr>
              <tr>
                <td>Have a disability</td><td>{doc.data().disabilityCheck}</td>
              </tr>
              <tr>
                <td>A permanent Australian resident</td><td>{doc.data().AustralianResidencyCheck}</td>
              </tr>
              <tr>
                <td>Have been excluded from an Australian education institution</td><td>{doc.data().AustralianExpulsionCheck}</td>
              </tr>
            </tbody>
          </Table> 
          <br />
        <h3>APPLICATION | CONTACT DETAILS</h3><br />
        <h5>Permanent Address</h5>
        <Table>
            <tbody>
              <tr>
                <td>Country and Region</td><td>{doc.data().countryOrRegion}</td>
              </tr>
              <tr>
                <td>State/Province</td><td>{doc.data().stateProvince}</td>
              </tr>
              <tr>
                <td>City/Suburb</td><td>{doc.data().citySuburb}</td>
              </tr>
              <tr>
                <td>Address line 1</td><td>{doc.data().addressLine1}</td>
              </tr>
              <tr>
                <td>Address line 2</td><td>{doc.data().addressLine2}</td>
              </tr>
              <tr>
                <td>Address line 3</td><td>{doc.data().addressLine3}</td>
              </tr>
              <tr>
                <td>Postal code</td><td>{doc.data().postalCode}</td>
              </tr>
            </tbody>
          </Table><br />
          <h5>Postal Address</h5>
          <Table>
            <tbody>
              <tr>
                <td>Country and Region</td><td>{doc.data().postalCountryOrRegion}</td>
              </tr>
              <tr>
                <td>State/Province</td><td>{doc.data().postalStateProvince}</td>
              </tr>
              <tr>
                <td>City/Suburb</td><td>{doc.data().postalCitySuburb}</td>
              </tr>
              <tr>
                <td>Address line 1</td><td>{doc.data().postalAddressLine1}</td>
              </tr>
              <tr>
                <td>Address line 2</td><td>{doc.data().postalAddressLine2}</td>
              </tr>
              <tr>
                <td>Address line 3</td><td>{doc.data().postalAddressLine3}</td>
              </tr>
              <tr>
                <td>Postal code</td><td>{doc.data().postalPostalCode}</td>
              </tr>
              <tr>
                <td>Mobile phone number</td><td>{doc.data().postalMobileNumber}</td>
              </tr>
              <tr>
                <td>Landline number</td><td>{doc.data().postalLandlineNumber}</td>
              </tr>
            </tbody>
          </Table>
          <br /><br />
        <h3>APPLICATION | PASSPORT AND VISA DETAILS</h3><br />
        <Table>
          <tbody>
            <tr>
              <td>Nationality (As per your passport)</td><td>{doc.data().nationality}</td>
            </tr>
            <tr>
              <td>Passport number</td><td>{doc.data().passportNumber}</td>
            </tr>
            <tr>
              <td>Passport issue date</td><td>{doc.data().passportIssueDate}</td>
            </tr>
            <tr>
              <td>Passport expiry date</td><td>{doc.data().passportExpiryDate}</td>
            </tr>
            <tr>
              <td>Previously visited or Studied in Australia</td><td>{doc.data().visitedOrStudiedInAus}</td>
            </tr>
          </tbody>
        </Table><br />
        <h5>Visa Related Questions</h5>
        <Table>
          <tbody>
            <tr>
              <td>Currently holding an Australian Visa</td><td>{doc.data().holdingAusVisa}</td>
            </tr>
            <tr>
              <td>Visa vrant number</td><td>{doc.data().holdingAusVisaGrantNumber}</td>
            </tr>
            <tr>
              <td>Previous visa condition breaches has happened</td><td>{doc.data().ausVisaBreach}</td>
            </tr>
            <tr>
              <td>Have been refused for entry, cancelled or overstayed a visa in Australia or another country</td><td>{doc.data().ausVisaRefuse}</td>
            </tr>
            <tr>
              <td>Have applied and/or received a protection visa in any country to date</td><td>{doc.data().protectionVisa}</td>
            </tr>
            <tr>
              <td>Have been convicted of a criminal offence</td><td>{doc.data().criminalOffence}</td>
            </tr>
          </tbody>
        </Table><br /><br />
        <h3>APPLICATION | FAMILY IMMIGRATION HISTORY</h3>
          <br /><Table>
            <tbody>
              <tr>
              <td>Marital status</td><td>{doc.data().maritalStatus=="yes"?"Married":"Not Married"}</td>
              </tr>
              <tr>
              <td>Dependents accompany</td><td>{doc.data().familyMembers.replace(/([A-Z])/g, " $1").charAt(0).toUpperCase()+doc.data().familyMembers.replace(/([A-Z])/g, " $1").slice(1)}</td>
              </tr>
              <tr>
              <td>Have funds for education and dependents</td><td>{doc.data().haveFundsCheck}</td>
              </tr>
              <tr>
              <td>Relatives living in Australia</td><td>{doc.data().haveRelativesCheck}</td>
              </tr>
              <tr>
              <td>Applicant/Partner have applied to migrate to Any Country</td><td>{doc.data().haveAppliedCheck}</td>
              </tr>
              <tr>
              <td>Have applied to migrate to Any country</td><td>{doc.data().haveAppliedCheck}</td>
              </tr>
            </tbody>
          </Table>
          <br />
          <h4>Secondary Studies</h4>
          <Table>
            <tbody>
              <tr>
              <td>Name of qualification</td><td>{doc.data().secondaryStudyQualificationName}</td>
              </tr>
              <tr>
              <td>Name of school/institute</td><td>{doc.data().secondaryStudySchoolInstitutionName}</td>
              </tr>
              <tr>
              <td>Date commenced</td><td>{doc.data().secondaryStudyCommencedDate}</td>
              </tr>
              <tr>
              <td>Date completed</td><td>{doc.data().secondaryStudyCompletedDate}</td>
              </tr>
              <tr>
              <td>Studied country</td><td>{doc.data().secondaryStudyCountry}</td>
              </tr>
              <tr>
              <td>Conducted by english medium</td><td>{doc.data().secondaryStudyEnglishMediumCheck}</td>
              </tr>
              <tr>
              <td>Study has completed</td><td>{doc.data().secondaryStudyCompletedCheck}</td>
              </tr>
            </tbody>
          </Table><br />
          <h4>Post Secondary Studies</h4><br />
          <h5>First qualification</h5>
          <Table>
            <tbody>
              <tr>
              <td>Name of qualification</td><td>{doc.data().firstPostSecondaryStudyQualificationName}</td>
              </tr>
              <tr>
              <td>Name of school/institute</td><td>{doc.data().firstPostSecondaryStudySchoolInstitutionName}</td>
              </tr>
              <tr>
              <td>Date commenced</td><td>{doc.data().firstPostSecondaryStudyCommencedDate}</td>
              </tr>
              <tr>
              <td>Date completed</td><td>{doc.data().firstPostSecondaryStudyCompletedDate}</td>
              </tr>
              <tr>
              <td>Studied country</td><td>{doc.data().firstPostSecondaryStudyCountry}</td>
              </tr>
              <tr>
              <td>Conducted by english medium</td><td>{doc.data().firstPostSecondaryStudyEnglishMediumCheck}</td>
              </tr>
              <tr>
              <td>Study has completed</td><td>{doc.data().firstPostSecondaryStudyCompletedCheck}</td>
              </tr>
            </tbody>
          </Table><br />
          <h5>Second qualification</h5>
          <Table>
            <tbody>
              <tr>
              <td>Name of qualification</td><td>{doc.data().secondPostSecondaryStudyQualificationName}</td>
              </tr>
              <tr>
              <td>Name of school/institute</td><td>{doc.data().secondPostSecondaryStudySchoolInstitutionName}</td>
              </tr>
              <tr>
              <td>Date commenced</td><td>{doc.data().secondPostSecondaryStudyCommencedDate}</td>
              </tr>
              <tr>
              <td>Date completed</td><td>{doc.data().secondPostSecondaryStudyCompletedDate}</td>
              </tr>
              <tr>
              <td>Studied country</td><td>{doc.data().secondPostSecondaryStudyCountry}</td>
              </tr>
              <tr>
              <td>Conducted by English medium</td><td>{doc.data().secondPostSecondaryStudyEnglishMediumCheck}</td>
              </tr>
              <tr>
              <td>Study Has completed</td><td>{doc.data().secondPostSecondaryStudyCompletedCheck}</td>
              </tr>
            </tbody>
          </Table><br />
          <h3>APPLICATION | <br/>WORK EXPERIENCE/RESUME/PERSONAL STATEMENT</h3><br />
          <Table>
            <tbody>
              <tr>
              <td>Have relevant work experience</td><td>{doc.data().relevantWorkExperienceCheck}</td>
              </tr>
              <tr>
              <td>Have a gap in studies and/or work history</td><td>{doc.data().relevantWorkExperienceCheck}</td>
              </tr>
            </tbody>
          </Table><br />
          <h4>English Proficiency</h4>
          <Table>
            <tbody>
              <tr>
              <td>First fanguage</td><td>{doc.data().firstLanguage}</td>
              </tr>
              <tr>
              <td>Have you taken an English proficiency test</td><td>{doc.data().englishProficiencyTest.replace(/([A-Z])/g, " $1").charAt(0).toUpperCase()+doc.data().englishProficiencyTest.replace(/([A-Z])/g, " $1").slice(1)}</td>
              </tr>
              <tr>
              <td>Date of the test taken</td><td>{doc.data().englishProficiencyTestDate}</td>
              </tr>
              <tr>
              <td>Test reference number</td><td>{doc.data().englishProficiencyTestReferenceNumber}</td>
              </tr>
            </tbody>
          </Table><br />
          <h4>Work Experience</h4>
          <Table>
            <tbody>
              <tr>
              <td>Have relevant work details</td><td>{doc.data().relevantWorkExperienceDetailsCheck}</td>
              </tr>
            </tbody>
          </Table><br />
          <h4>Financial Support</h4>
          <Table>
            <tbody>
              <tr>
              <td>Method of supporting Studies</td><td>{doc.data().studyFundMethod.replace(/([A-Z])/g, " $1").charAt(0).toUpperCase()+doc.data().studyFundMethod.replace(/([A-Z])/g, " $1").slice(1)}</td>
              </tr>
            </tbody>
          </Table><br />
          <h4>Parent or Guardian Contact Details</h4>
          <Table>
            <tbody>
              <tr>
              <td>Name of Parent/Guardian</td><td>{doc.data().parentGuardianName}</td>
              </tr>
              <tr>
              <td>Parent/Guardian's Mobile number</td><td>{doc.data().parentGuardianMobileNumber}</td>
              </tr>
              <tr>
              <td>Parent/Guardian's Email</td><td>{doc.data().parentGuardianEmail}</td>
              </tr>
            </tbody>
          </Table><br />
          <h4>Additional Questions</h4>
          <Table>
            <tbody>
              <tr>
              <td>Course selection comment</td>
              </tr>
              <tr>
              <td colSpan={2}>{doc.data().careerAspirationNote}</td>
              </tr>
              <tr>
              <td>University selection comment</td>
              </tr>
              <tr>
              <td colSpan={2}>{doc.data().universityChoiceNote}</td>
              </tr>
              <tr>
              <td>source of information about the University</td><td>{doc.data().directedMedia}</td>
              </tr>
            </tbody>
          </Table><br />
        </>
      )}
      })
      
      
  }

  const{steps,currentStepIndex,step, isFirstStep,back,next,isLastStep} = useMultiStepRender([
    <MainStudentDetails {...displayData} updateFields={updateFields}/>,
    <StudentContactDetails {...displayData} updateFields={updateFields}/>,
    <StudentPassportAndVisaDetails {...displayData} updateFields={updateFields}/>,
    <StudentFamilyImmigrationHistory {...displayData} updateFields={updateFields}/>,
    <StudentWorkExpResumePersonalStatementDetails {...displayData} updateFields={updateFields}/>
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
    <div className="col w-100" style={{
      overflow:"hidden",overflowY: "scroll",maxHeight:"48rem"
    }}>
          {displayData&& displayData}
          
        
      
      
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