import { FormWrapper } from "./FormWrapper";
import { Form } from 'react-bootstrap';

export function MainStudentDetails(){
    return (
        <FormWrapper title={"MAIN DETAILS"}>
            <Form.Group className="mb-3">
            <Form.Label><p>Do you have a Monash student ID number?</p></Form.Label>
            <div>
                <Form.Check inline label="Yes" type="radio" name="monash-Id-check" value="yes" required />
                <Form.Check inline label="No" type="radio" name="monash-Id-check" value="no" />
            </div>
        </Form.Group><Form.Group className="mb-3">
                <Form.Label>If YES, please state:</Form.Label>
                <Form.Control type="text" name="monash-Id" />
            </Form.Group><Form.Group>
                <Form.Label>Are you a currently enrolled Monash student?</Form.Label>
                <div>
                    <Form.Check inline label="Yes" type="radio" name="monash-enrolled-check" value="yes" />
                    <Form.Check inline label="No" type="radio" name="monash-enrolled-check" value="no" />
                </div>
            </Form.Group><h4>1st University Applying For:</h4><Form.Group>
                <Form.Control type="text" name="program-preference-1" required/>
            </Form.Group>
            <h4>Programmes Applying</h4><Form.Text>
                Choose up to three courses you would like to study and list them in order of preference. Check the entry
                requirements and prerequisite subjects for each to see if you qualify. If you meet the requirements of your
                first choice, you will not be assessed for your second and third choices.
            </Form.Text>
            <Form.Group>
                <Form.Label>Preference 1 (Programme Code & Programme Name):</Form.Label>
                <Form.Control type="text" name="program-preference-1" required/>
            </Form.Group><Form.Group>
                <Form.Label>Preference 2 (Programme Code & Programme Name):</Form.Label>
                <Form.Control type="text" name="program-preference-2" required/>
            </Form.Group><Form.Group>
                <Form.Label>Preference 3 (Programme Code & Programme Name):</Form.Label>
                <Form.Control type="text" name="program-preference-3" required/>
            </Form.Group><Form.Group>
                <Form.Label>Intake:</Form.Label>
                <Form.Control type="text" name="intake" required/>
            </Form.Group><Form.Group>
                <Form.Label>Campus (Location):</Form.Label>
                <Form.Control type="text" name="campus" required/>
            </Form.Group><h4>2nd University Applying For:</h4><Form.Group>
                <Form.Control type="text" name="program-preference-1" required/>
            </Form.Group><h4>Programmes Applying</h4><Form.Text>
                Choose up to three courses you would like to study and list them in order of preference. Check the entry
                requirements and prerequisite subjects for each to see if you qualify. If you meet the requirements of your
                first choice, you will not be assessed for your second and third choices.
            </Form.Text><Form.Group>
                <Form.Label>Preference 1 (Programme Code & Programme Name):</Form.Label>
                <Form.Control type="text" name="program-preference-1" required/>
            </Form.Group><Form.Group>
                <Form.Label>Preference 2 (Programme Code & Programme Name):</Form.Label>
                <Form.Control type="text" name="program-preference-2" required/>
            </Form.Group><Form.Group>
                <Form.Label>Preference 3 (Programme Code & Programme Name):</Form.Label>
                <Form.Control type="text" name="program-preference-3" required/>
            </Form.Group><Form.Group>
                <Form.Label>Intake:</Form.Label>
                <Form.Control type="text" name="intake" required/>
            </Form.Group><Form.Group>
                <Form.Label>Campus (Location):</Form.Label>
                <Form.Control type="text" name="campus" required/>
            </Form.Group><h4>3rd University Applying For:</h4><Form.Group>
                <Form.Control type="text" name="program-preference-1" required/>
            </Form.Group><h4>Programmes Applying</h4><Form.Text>
                Choose up to three courses you would like to study and list them in order of preference. Check the entry
                requirements and prerequisite subjects for each to see if you qualify. If you meet the requirements of your
                first choice, you will not be assessed for your second and third choices.
            </Form.Text><Form.Group>
                <Form.Label>Preference 1 (Programme Code & Programme Name):</Form.Label>
                <Form.Control type="text" name="program-preference-1" required/>
            </Form.Group><Form.Group>
                <Form.Label>Preference 2 (Programme Code & Programme Name):</Form.Label>
                <Form.Control type="text" name="program-preference-2" required/>
            </Form.Group><Form.Group>
                <Form.Label>Preference 3 (Programme Code & Programme Name):</Form.Label>
                <Form.Control type="text" name="program-preference-3" required/>
            </Form.Group><Form.Group>
                <Form.Label>Intake:</Form.Label>
                <Form.Control type="text" name="intake" required/>
            </Form.Group><Form.Group>
                <Form.Label>Campus (Location):</Form.Label>
                <Form.Control type="text" name="campus" required/>
            </Form.Group><h4>PERSONAL DETAILS as per the Passport</h4><Form.Group>
                <Form.Label>Title:</Form.Label>
                <Form.Control as="select" name="title" required>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Ms">Ms</option>
                    <option value="Unspecified">Unspecified</option>
                </Form.Control>
            </Form.Group><Form.Group>
                <Form.Label>Surname:</Form.Label>
                <Form.Control type="text" name="surname" required/>
            </Form.Group><Form.Group>
                <Form.Label>Other names:</Form.Label>
                <Form.Control type="text" name="other-names" required/>
            </Form.Group><Form.Group>
                <Form.Label>Gender:</Form.Label>
                <Form.Control as="select" name="gender" required>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </Form.Control>
            </Form.Group><Form.Group>
                <Form.Label>Date of Birth:</Form.Label>
                <Form.Control type="date" name="date-of-birth" required/>
            </Form.Group><Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" name="email" required/>
            </Form.Group><Form.Group>
                <Form.Label>Do you have a disability?</Form.Label>
                <div>
                    <Form.Check inline label="Yes" type="radio" name="disability-check" value="yes" required/>
                    <Form.Check inline label="No" type="radio" name="disability-check" value="no" />
                </div>
            </Form.Group><Form.Group>
                <Form.Label>Are you an Australian permanent resident?</Form.Label>
                <div>
                    <Form.Check inline label="Yes" type="radio" name="australian-residency-check" value="yes" required/>
                    <Form.Check inline label="No" type="radio" name="australian-residency-check" value="no" />
                </div>
            </Form.Group><Form.Group>
                <Form.Label>Have you ever been excluded from an Australian education institution before?</Form.Label>
                <div>
                    <Form.Check inline label="Yes" type="radio" name="australian-expulsion-check" value="yes" required/>
                    <Form.Check inline label="No" type="radio" name="australian-expulsion-check" value="no" />
                </div>
            </Form.Group></FormWrapper>
    )
}