import { FormWrapper } from "./FormWrapper";
import { Form } from 'react-bootstrap';

type userData = {
    
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
    thirdUniintake:string,
    secondaryStudyCountry: string,
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
}

type MainDetailsProps = userData & {
 
    updateFields: (fields: Partial<userData>) => void

}

export function MainStudentDetails({

    monashIdCheck,
    monashId,
    monashEnrolledCheck,
    universityPreferenceOne,
    firstUniProgramPreferenceOne,
    firstUniProgramPreferenceTwo,
    firstUniProgramPreferenceThree,
    intake,
    campus,
    universityPreferenceTwo,
    secondUniProgramPreferenceOne,
    secondUniProgramPreferenceTwo,
    secondUniProgramPreferenceThree,
    secondUniintake,
    secondUnicampus,
    universityPreferenceThree,
    thirdUniPprogramPreferenceOne,
    thirdUniProgramPreferenceTwo,
    thirdUniProgramPreferenceThree,
    thirdUniintake,
    thirdUnicampus,
    title,
    surname,
    otherNames,
    gender,
    dateOfBirth,
    email,
    disabilityCheck,
    australianResidencyCheck,
    australianExpulsionCheck,
    updateFields

} : MainDetailsProps){
    return (
        <FormWrapper title={"MAIN DETAILS"}>
            
                <div className="--bs-info --bs-info-rgb">
                <Form.Group className="mb-3">
            <Form.Label><p>Do you have a Monash student ID number?</p></Form.Label>
            <div>
                <Form.Check inline label="Yes" type="radio" name="monash-Id-check" value="yes" checked={monashIdCheck=== 'yes'} onChange={e=> updateFields({monashIdCheck:e.target.value}) } required />
                <Form.Check inline label="No" type="radio" name="monash-Id-check" value="no" checked={monashIdCheck=== 'no'} onChange={e=> updateFields({monashIdCheck:e.target.value}) }/>
            </div>
        </Form.Group>
        <Form.Group className="mb-3">
                <Form.Label>If YES, please state:</Form.Label>
                <Form.Control type="text" name="monash-Id" value={monashId} onChange={e=> updateFields({monashId:e.target.value})}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Are you a currently enrolled Monash student?</Form.Label>
                <div>
                    <Form.Check inline label="Yes" type="checkbox" name="1monash-enrolled-check" value="yes" checked={monashEnrolledCheck=== 'yes'} onChange={e=> updateFields({monashEnrolledCheck:e.target.value})}/>
                    <Form.Check inline label="No" type="checkbox" name="monash-enrolled-check" value="no" checked={monashEnrolledCheck=== 'no'} onChange={e=> updateFields({monashEnrolledCheck:e.target.value})}/>
                </div></Form.Group>
                </div>
            <h4>1st University Applying For:</h4><Form.Group>
                <Form.Control type="text" name="university-preference-1" value={universityPreferenceOne} onChange={e=> updateFields({universityPreferenceOne:e.target.value})}required/>
            </Form.Group>
            <h4>Programmes Applying</h4><Form.Text>
                Choose up to three courses you would like to study and list them in order of preference. Check the entry
                requirements and prerequisite subjects for each to see if you qualify. If you meet the requirements of your
                first choice, you will not be assessed for your second and third choices.
            </Form.Text>
            <Form.Group>
                <Form.Label>Preference 1 (Programme Code & Programme Name):</Form.Label>
                <Form.Control type="text" name="1stUniProgram-preference-1" value={firstUniProgramPreferenceOne} onChange={e=> updateFields({firstUniProgramPreferenceOne:e.target.value})}required/>
            </Form.Group><Form.Group>
                <Form.Label>Preference 2 (Programme Code & Programme Name):</Form.Label>
                <Form.Control type="text" name="1stUniProgram-preference-2" value={firstUniProgramPreferenceTwo} onChange={e=> updateFields({firstUniProgramPreferenceTwo:e.target.value})}required/>
            </Form.Group><Form.Group>
                <Form.Label>Preference 3 (Programme Code & Programme Name):</Form.Label>
                <Form.Control type="text" name="1stUniProgram-preference-3" value={firstUniProgramPreferenceThree} onChange={e=> updateFields({firstUniProgramPreferenceThree:e.target.value})}required/>
            </Form.Group><Form.Group>
                <Form.Label>Intake:</Form.Label>
                <Form.Control type="text" name="intake" value={intake} onChange={e=> updateFields({intake:e.target.value})}required/>
            </Form.Group><Form.Group>
                <Form.Label>Campus (Location):</Form.Label>
                <Form.Control type="text" name="campus" value={campus} onChange={e=> updateFields({campus:e.target.value})}required/>
            </Form.Group><h4>2nd University Applying For:</h4><Form.Group>
                <Form.Control type="text" name="university-preference-2" value={universityPreferenceTwo} onChange={e=> updateFields({universityPreferenceTwo:e.target.value})}required/>
            </Form.Group><h4>Programmes Applying</h4><Form.Text>
                Choose up to three courses you would like to study and list them in order of preference. Check the entry
                requirements and prerequisite subjects for each to see if you qualify. If you meet the requirements of your
                first choice, you will not be assessed for your second and third choices.
            </Form.Text><Form.Group>
                <Form.Label>Preference 1 (Programme Code & Programme Name):</Form.Label>
                <Form.Control type="text" name="2ndUniProgram-preference-1" value={secondUniProgramPreferenceOne} onChange={e=> updateFields({secondUniProgramPreferenceOne:e.target.value})}required/>
            </Form.Group><Form.Group>
                <Form.Label>Preference 2 (Programme Code & Programme Name):</Form.Label>
                <Form.Control type="text" name="2ndUniProgram-preference-2" value={secondUniProgramPreferenceTwo} onChange={e=> updateFields({secondUniProgramPreferenceTwo:e.target.value})}required/>
            </Form.Group><Form.Group>
                <Form.Label>Preference 3 (Programme Code & Programme Name):</Form.Label>
                <Form.Control type="text" name="2ndUniProgram-preference-3" value={secondUniProgramPreferenceThree} onChange={e=> updateFields({secondUniProgramPreferenceThree:e.target.value})}required/>
            </Form.Group><Form.Group>
                <Form.Label>Intake:</Form.Label>
                <Form.Control type="text" name="intake" value={secondUniintake} onChange={e=> updateFields({secondUniintake:e.target.value})}required/>
            </Form.Group><Form.Group>
                <Form.Label>Campus (Location):</Form.Label>
                <Form.Control type="text" name="campus" value={secondUnicampus} onChange={e=> updateFields({secondUnicampus:e.target.value})}required/>
            </Form.Group><h4>3rd University Applying For:</h4><Form.Group>
                <Form.Control type="text" name="university-preference-3" value={universityPreferenceThree} onChange={e=> updateFields({universityPreferenceThree:e.target.value})}required/>
            </Form.Group><h4>Programmes Applying</h4><Form.Text>
                Choose up to three courses you would like to study and list them in order of preference. Check the entry
                requirements and prerequisite subjects for each to see if you qualify. If you meet the requirements of your
                first choice, you will not be assessed for your second and third choices.
            </Form.Text><Form.Group>
                <Form.Label>Preference 1 (Programme Code & Programme Name):</Form.Label>
                <Form.Control type="text" name="3rdUniPprogram-preference-1" value={thirdUniPprogramPreferenceOne} onChange={e=> updateFields({thirdUniPprogramPreferenceOne:e.target.value})}required/>
            </Form.Group><Form.Group>
                <Form.Label>Preference 2 (Programme Code & Programme Name):</Form.Label>
                <Form.Control type="text" name="3rdUniProgram-preference-2" value={thirdUniProgramPreferenceTwo} onChange={e=> updateFields({thirdUniProgramPreferenceTwo:e.target.value})}required/>
            </Form.Group><Form.Group>
                <Form.Label>Preference 3 (Programme Code & Programme Name):</Form.Label>
                <Form.Control type="text" name="3rdUniProgram-preference-3" value={ thirdUniProgramPreferenceThree} onChange={e=> updateFields({thirdUniProgramPreferenceThree:e.target.value})}required/>
            </Form.Group><Form.Group>
                <Form.Label>Intake:</Form.Label>
                <Form.Control type="text" name="intake" value={ thirdUniintake} onChange={e=> updateFields({thirdUniintake:e.target.value})}required/>
            </Form.Group><Form.Group>
                <Form.Label>Campus (Location):</Form.Label>
                <Form.Control type="text" name="campus" value={ thirdUnicampus} onChange={e=> updateFields({thirdUnicampus:e.target.value})}required/>
            </Form.Group><h4>PERSONAL DETAILS as per the Passport</h4><Form.Group>
                <Form.Label>Title:</Form.Label>
                <Form.Control as="select" name="title" value={title} onChange={e=> updateFields({title:e.target.value})}required>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Ms">Ms</option>
                    <option value="Unspecified">Unspecified</option>
                </Form.Control>
            </Form.Group><Form.Group>
                <Form.Label>Surname:</Form.Label>
                <Form.Control type="text" name="surname" value={surname} onChange={e=> updateFields({surname:e.target.value})}required/>
            </Form.Group><Form.Group>
                <Form.Label>Other names:</Form.Label>
                <Form.Control type="text" name="other-names" value={otherNames} onChange={e=> updateFields({otherNames:e.target.value})}required/>
            </Form.Group><Form.Group>
                <Form.Label>Gender:</Form.Label>
                <Form.Control as="select" name="gender" value={gender} onChange={e=> updateFields({gender:e.target.value})}required>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </Form.Control>
            </Form.Group><Form.Group>
                <Form.Label>Date of Birth:</Form.Label>
                <Form.Control type="date" name="date-of-birth" value={dateOfBirth} onChange={e=> updateFields({dateOfBirth:e.target.value})}required/>
            </Form.Group><Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" name="email" value={email} onChange={e=> updateFields({email:e.target.value})}required/>
            </Form.Group><Form.Group>
                <Form.Label>Do you have a disability?</Form.Label>
                <div>
                    <Form.Check inline label="Yes" type="radio" name="disability-check" value="yes" checked={disabilityCheck=== 'yes'} onChange={e=> updateFields({disabilityCheck:e.target.value})} required/>
                    <Form.Check inline label="No" type="radio" name="disability-check" value="no" checked={disabilityCheck=== 'no'} onChange={e=> updateFields({disabilityCheck:e.target.value})}/>
                </div>
            </Form.Group><Form.Group>
                <Form.Label>Are you an Australian permanent resident?</Form.Label>
                <div>
                    <Form.Check inline label="Yes" type="radio" name="australian-residency-check" value="yes" checked={australianResidencyCheck === 'yes'} onChange={e=> updateFields({australianResidencyCheck:e.target.value})} required/>
                    <Form.Check inline label="No" type="radio" name="australian-residency-check" value="no" checked={australianResidencyCheck === 'no'} onChange={e=> updateFields({australianResidencyCheck:e.target.value})}/>
                </div>
            </Form.Group><Form.Group>
                <Form.Label>Have you ever been excluded from an Australian education institution before?</Form.Label>
                <div>
                    <Form.Check inline label="Yes" type="radio" name="australian-expulsion-check" value="yes" checked={australianExpulsionCheck === 'yes'} onChange={e=> updateFields({australianExpulsionCheck:e.target.value})} required/>
                    <Form.Check inline label="No" type="radio" name="australian-expulsion-check" value="no" checked={australianExpulsionCheck === 'no'} onChange={e=> updateFields({australianExpulsionCheck:e.target.value})}/>
                </div>
            </Form.Group></FormWrapper>
    )
}