import { useState, FormEvent } from "react";
import { Form } from 'react-bootstrap';
import { MainStudentDetails } from "./MainStudentDetails";
import { StudentContactDetails } from "./StudentContactDetails";
import { StudentFamilyImmigrationHistory } from "./StudentFamilyImmigrationHistory";
import { StudentPassportAndVisaDetails } from "./StudentPassportAndVisaDetails";
import { StudentWorkExpResumePersonalStatementDetails } from "./StudentWorkExpResumePersonalStatementDetails";
import { useMultiStepForm } from "./useMultiStepForm";

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

export default function Application(){
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
    return (<><div style={{
          position:'relative',
          background:'white',
          border: '1px solid black',
          padding:"3%", paddingBottom:"1%",
          margin:'5%',
          borderRadius:'30px', fontSize:'100%',
          maxWidth:'100%'
          }}
        >
        <Form onSubmit={onSubmit}>
          
          {step}
          <div style={{
            marginTop:'1rem',
            display:'flex',
            gap:".5rem",
            justifyContent:'flex-end',
            maxWidth:'max-content'
          }}>
    
          {!isFirstStep && <button className='btn btn-outline-dark' type="button" onClick={back}>Back</button>}
    
          <button className={isLastStep ? 'btn btn-success': 'btn btn-dark' } type="submit">{!isLastStep ? 'Next':'Finish'}</button>
          </div>
          <div style={{
            marginTop:"3rem",
            position:'relative',
            bottom:'.7rem',
            display:'flex',
            justifyContent:"center",
            fontSize:'1.1rem',
            fontWeight:'700',
            maxWidth:'max-content'
          }}>
            {currentStepIndex+1}/{steps.length}
          </div>
        </Form>
        </div>
      </>)
}