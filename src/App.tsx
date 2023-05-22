import { useMultiStepForm } from './pages/application/useMultiStepForm'
import { MainStudentDetails } from './pages/application/MainStudentDetails'
import { StudentContactDetails } from './pages/application/StudentContactDetails'
import { StudentPassportAndVisaDetails } from './pages/application/StudentPassportAndVisaDetails'
import { StudentFamilyImmigrationHistory } from './pages/application/StudentFamilyImmigrationHistory'
import { StudentWorkExpResumePersonalStatementDetails } from './pages/application/StudentWorkExpResumePersonalStatementDetails'
import { FormEvent } from 'react'


function App() {
  const{steps,currentStepIndex,step, isFirstStep,back,next,isLastStep} = useMultiStepForm([
  <MainStudentDetails/>,
  <StudentContactDetails/>,
  <StudentPassportAndVisaDetails/>,
  <StudentFamilyImmigrationHistory/>,
  <StudentWorkExpResumePersonalStatementDetails/>
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
