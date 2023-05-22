import { useMultiStepForm } from './pages/Application/useMultiStepForm'
import { MainStudentDetails } from './pages/Application/MainStudentDetails'
import { StudentContactDetails } from './pages/Application/StudentContactDetails'
import { StudentPassportAndVisaDetails } from './pages/Application/StudentPassportAndVisaDetails'
import { StudentFamilyImmigrationHistory } from './pages/Application/StudentFamilyImmigrationHistory'
import { StudentWorkExpResumePersonalStatementDetails } from './pages/Application/StudentWorkExpResumePersonalStatementDetails'
import { FormEvent, useState } from 'react'

type FormData = {

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

const INITIAL_DATA: FormData = {

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





function App() {
  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>){
    setData(prev=>{
      return{...prev,...fields}
    })
  
  }


  const{steps,currentStepIndex,step, isFirstStep,back,next,isLastStep} = useMultiStepForm([
  <MainStudentDetails {...data} updateFields={updateFields}/>,
  <StudentContactDetails {...data} updateFields={updateFields}/>,
  <StudentPassportAndVisaDetails {...data} updateFields={updateFields}/>,
  <StudentFamilyImmigrationHistory {...data} updateFields={updateFields}/>,
  <StudentWorkExpResumePersonalStatementDetails {...data} updateFields={updateFields}/>
])


function onSubmit(e:FormEvent){ 
  e.preventDefault()
  if(!isLastStep) return next()
  alert("mysql")
}

 return (
 <>
    <div style={{
      position:'relative',
      background:'white',
      border: '1px solid black',
      padding:"2rem",margin:'1rem',
      borderRadius:'1rem', fontSize:'15px',
      maxWidth:'max -content'
      }}
    >
    <form onSubmit={onSubmit}>
      <div style={{
        position:'absolute',
        top:'.5rem',
        right:'.5rem'
      }}>
        {currentStepIndex+1}/{steps.length}
      </div>
      {step}
      <div style={{
        marginTop:'1rem',
        display:'flex',
        gap:".5rem",
        justifyContent:'flex-end'
      }}>

      {!isFirstStep && <button type="button" onClick={back}>Back</button>}

      <button type="submit">{!isLastStep ? 'Next':'Finish'}</button>
      </div>
    </form>
    </div>
  </>)
}

export default App
