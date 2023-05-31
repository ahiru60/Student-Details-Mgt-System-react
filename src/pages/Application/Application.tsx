import { useState, FormEvent, useEffect, useContext } from "react";
import { Alert, Form } from 'react-bootstrap';
import { MainStudentDetails } from "./MainStudentDetails";
import { StudentContactDetails } from "./StudentContactDetails";
import { StudentFamilyImmigrationHistory } from "./StudentFamilyImmigrationHistory";
import { StudentPassportAndVisaDetails } from "./StudentPassportAndVisaDetails";
import { StudentWorkExpResumePersonalStatementDetails } from "./StudentWorkExpResumePersonalStatementDetails";
import { useMultiStepRender } from "../../Util/useMultiStepRender";
import { onSnapshot } from "firebase/firestore";
import { addStudent,checkStudentOnFS,getStudent,studentsCollection } from "../../Util/Firebase/Controller";
import { UserContext } from "../../Components/UserContext";
import { getAuth } from "firebase/auth";

export type FormData = {
      uid: string | undefined,
      displayname: string | null | undefined,
      monashIdCheck: string,
      monashId: string,
      monashEnrolledCheck: string,
      universityPreferenceOne: string,
      firstUniProgramPreferenceOne: string,
      firstUniProgramPreferenceTwo: string,
      firstUniProgramPreferenceThree: string,
      intake: string,
      campus: string,
      universityPreferenceTwo: string,
      secondUniProgramPreferenceOne: string,
      secondUniProgramPreferenceTwo: string,
      secondUniProgramPreferenceThree: string,
      secondUniintake: string,
      secondUnicampus: string,
      universityPreferenceThree: string,
      thirdUniPprogramPreferenceOne: string,
      thirdUniProgramPreferenceTwo: string,
      thirdUniProgramPreferenceThree: string,
      thirdUniintake: string,
      thirdUnicampus: string,
      title: string,
      surname: string,
      otherNames: string,
      gender: string,
      dateOfBirth: string,
      email: string,
      disabilityCheck: string,
      australianResidencyCheck: string,
      australianExpulsionCheck: string,
      countryOrRegion: string,
      stateProvince: string,
      citySuburb: string,
      addressLine1: string,
      addressLine2: string,
      addressLine3: string,
      postalCode: string,
      differentPostalCheck: string,
      postalCountryOrRegion: string,
      postalStateProvince: string,
      postalCitySuburb: string,
      postalAddressLine1: string,
      postalAddressLine2: string,
      postalAddressLine3: string,
      postalPostalCode: string,
      postalMobileNumber: string,
      postalLandlineNumber: string,
      maritalStatus: string,
      familyMembers: string,
      haveFundsCheck: string,
      haveRelativesCheck: string,
      haveAppliedCheck: string,
      secondaryStudyQualificationName: string,
      secondaryStudySchoolInstitutionName: string,
      secondaryStudyCommencedDate: string,
      secondaryStudyCompletedDate: string,
      secondaryStudyCountry: string,
      secondaryStudyEnglishMediumCheck: string,
      secondaryStudyCompletedCheck: string,
      firstPostSecondaryStudyQualificationName: string,
      firstPostSecondaryStudySchoolInstitutionName: string,
      firstPostSecondaryStudyCommencedDate: string,
      firstPostSecondaryStudyCompletedDate: string,
      firstPostSecondaryStudyCountry: string,
      firstPostSecondaryStudyEnglishMediumCheck: string,
      firstPostSecondaryStudyCompletedCheck: string,
      secondPostSecondaryStudyQualificationName: string,
      secondPostSecondaryStudySchoolInstitutionName: string,
      secondPostSecondaryStudyCommencedDate: string,
      secondPostSecondaryStudyCompletedDate: string,
      secondPostSecondaryStudyCountry: string,
      secondPostSecondaryStudyEnglishMediumCheck: string,
      secondPostSecondaryStudyCompletedCheck: string,
      nationality: string,
      countryOfBirth: string,
      passportNumber: string,
      passportIssueDate: string,
      passportExpiryDate: string,
      visitedOrStudiedInAus: string,
      holdingAusVisa: string,
      holdingAusVisaGrantNumber: string,
      ausVisaBreach: string,
      ausVisaRefuse: string,
      protectionVisa: string,
      criminalOffence: string,
      relevantWorkExperienceCheck: string,
      studyBreakCheck: string,
      firstLanguage: string,
      englishProficiencyTest: string,
      englishProficiencyTestName: string,
      englishProficiencyTestDate: string,
      englishProficiencyTestReferenceNumber: string,
      relevantWorkExperienceDetailsCheck: string,
      studyFundMethod: string,
      parentGuardianName: string,
      parentGuardianMobileNumber: string,
      parentGuardianEmail: string,
      careerAspirationNote: string,
      universityChoiceNote: string,
      directedMedia: string
  
  }
  
  
  
export default function Application(){
  const userContext =useContext(UserContext)
  
  //const checkState = checkStudent(userContext.user&& userContext.user.uid,userContext.setStudentDoc)
  const INITIAL_DATA: FormData = {
    uid : "",
    displayname:"",
    monashIdCheck: "",
    monashId: "",
    monashEnrolledCheck: "",
    universityPreferenceOne: "",
    firstUniProgramPreferenceOne: "",
    firstUniProgramPreferenceTwo: "",
    firstUniProgramPreferenceThree: "",
    intake: "",
    campus: "",
    universityPreferenceTwo: "",
    secondUniProgramPreferenceOne: "",
    secondUniProgramPreferenceTwo: "",
    secondUniProgramPreferenceThree: "",
    secondUniintake: "",
    secondUnicampus: "",
    universityPreferenceThree: "",
    thirdUniPprogramPreferenceOne: "",
    thirdUniProgramPreferenceTwo: "",
    thirdUniProgramPreferenceThree: "",
    thirdUniintake: "",
    thirdUnicampus: "",
    title: "",
    surname: "",
    otherNames: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    disabilityCheck: "",
    australianResidencyCheck: "",
    australianExpulsionCheck: "",

    countryOrRegion: "",
    stateProvince: "",
    citySuburb: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    postalCode: "",
    differentPostalCheck: "",
    postalCountryOrRegion: "",
    postalStateProvince: "",
    postalCitySuburb: "",
    postalAddressLine1: "",
    postalAddressLine2: "",
    postalAddressLine3: "",
    postalPostalCode: "",
    postalMobileNumber: "",
    postalLandlineNumber: "",

    maritalStatus: "",
    familyMembers: "",
    haveFundsCheck: "",
    haveRelativesCheck: "",
    haveAppliedCheck: "",
    secondaryStudyQualificationName: "",
    secondaryStudySchoolInstitutionName: "",
    secondaryStudyCommencedDate: "",
    secondaryStudyCompletedDate: "",
    secondaryStudyCountry: "",
    secondaryStudyEnglishMediumCheck: "",
    secondaryStudyCompletedCheck: "",
    firstPostSecondaryStudyQualificationName: "",
    firstPostSecondaryStudySchoolInstitutionName: "",
    firstPostSecondaryStudyCommencedDate: "",
    firstPostSecondaryStudyCompletedDate: "",
    firstPostSecondaryStudyCountry: "",
    firstPostSecondaryStudyEnglishMediumCheck: "",
    firstPostSecondaryStudyCompletedCheck: "",
    secondPostSecondaryStudyQualificationName: "",
    secondPostSecondaryStudySchoolInstitutionName: "",
    secondPostSecondaryStudyCommencedDate: "",
    secondPostSecondaryStudyCompletedDate: "",
    secondPostSecondaryStudyCountry: "",
    secondPostSecondaryStudyEnglishMediumCheck: "",
    secondPostSecondaryStudyCompletedCheck: "",

    nationality: "",
    countryOfBirth: "",
    passportNumber: "",
    passportIssueDate: "",
    passportExpiryDate: "",
    visitedOrStudiedInAus: "",
    holdingAusVisa: "",
    holdingAusVisaGrantNumber: "",
    ausVisaBreach: "",
    ausVisaRefuse: "",
    protectionVisa: "",
    criminalOffence: "",
    
    relevantWorkExperienceCheck: "",
    studyBreakCheck: "",
    firstLanguage: "",
    englishProficiencyTest: "",
    englishProficiencyTestName: "",
    englishProficiencyTestDate: "",
    englishProficiencyTestReferenceNumber: "",
    relevantWorkExperienceDetailsCheck: "",
    studyFundMethod: "",
    parentGuardianName: "",
    parentGuardianMobileNumber: "",
    parentGuardianEmail: "",
    careerAspirationNote: "",
    universityChoiceNote: "",
    directedMedia: ""

  

} 

const localStoreFormData = localStorage.getItem("FORM_DATA_ON_UPDATE_SDM_APP")
if(!localStoreFormData){
  getStudent(getAuth().currentUser?.uid).then(response=>{
    console.log(response)
    localStorage.setItem("FORM_DATA_ON_UPDATE_SDM_APP",JSON.stringify(response))
    location.reload()
  }
    
  ).catch(
    error=>{
      console.log(error.message)
    }
  )
}

  function getFormValue(){
  
  const sendingDataDB = {}

  const storedLocalValues = localStorage.getItem("FORM_DATA_ON_UPDATE_SDM_APP")
  if(storedLocalValues){return JSON.parse(storedLocalValues)}
  //else if(studentDataDB){return  }
  else{return INITIAL_DATA}
}

const [data, setData] = useState(getFormValue);



    useEffect(()=>{
      data&& localStorage.setItem("FORM_DATA_ON_UPDATE_SDM_APP",JSON.stringify(data))
      //console.log("updating..")
    },[updateFields])

  function updateFields(fields: Partial<FormData>){
    setData((prev: any)=>{
      return{...prev,...fields}
    })
    //updateStudent( e,{...data});
    
  }
    
  
  
  const [error,setError] = useState<any>("")
  //updateFields({ })
  /*useEffect(()=>{onSnapshot(studentsCollection,(snapshot)=>{
    //console.log(snapshot)
  })},[])*/

  //console.log(userContext.studentDoc.data)
  const{steps,currentStepIndex,step, isFirstStep,back,next,isLastStep} = useMultiStepRender([
  <MainStudentDetails {...data} updateFields={updateFields}/>,
  <StudentContactDetails {...data} updateFields={updateFields}/>,
  <StudentPassportAndVisaDetails {...data} updateFields={updateFields}/>,
  <StudentFamilyImmigrationHistory {...data} updateFields={updateFields}/>,
  <StudentWorkExpResumePersonalStatementDetails {...data} updateFields={updateFields}/>
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
    const userDoc ={...data,...context}
    userContext.user != null? await checkStudentOnFS(userContext.user && userContext.user.uid, userContext.setStudentDoc)? setError("Already submitted..!") : addStudent({...userDoc},userContext,setError):  setError("Error occured..!")
    
    //alert("mysql")
  }
  
}
    return (<><div style={{
          position:'relative',
          background:'white',
          border: '1px solid black',
          padding:"3%", paddingBottom:"1%",
          margin:'5% 15%', fontSize:'100%',
          maxWidth:'100%'
          }}
          className="shadow rounded">
        <Form onSubmit={onSubmit}>
        
          {step}
          <div style={{
            marginTop:'1rem',
            display:'flex',
            gap:".5rem",
            justifyContent:'flex-end',
          }}>
    
          {!isFirstStep && <button className='btn btn-outline-dark' type="button" onClick={back}>Back</button>}
    
          <button className={isLastStep ? 'btn btn-success': 'btn btn-dark' } type="submit">{!isLastStep ? 'Next':'Finish'}</button>
          </div>
          {error && error!="success"? <><br /><Alert variant="danger">{error}</Alert></> : null}
          {error=="success"? <><br /><Alert variant="success">Form submitted successfully</Alert></>:null}
          <div style={{
            marginTop:"3rem",
            position:'relative',
            bottom:'.7rem',
            display:'flex',
            justifyContent:"center",
            fontSize:'1.1rem',
            fontWeight:'700'
          }}>
            
            {currentStepIndex+1}/{steps.length}
          </div>
        </Form>
        
        </div>
      </>)
}