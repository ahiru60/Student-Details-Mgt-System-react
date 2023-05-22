import Form from "react-bootstrap/esm/Form";
import { FormWrapper } from "./FormWrapper";

export function StudentFamilyImmigrationHistory(){
   return(<FormWrapper title={"FAMILY IMMIGRATION HISTORY"}><Form.Group>
      <Form.Label>Are you married?</Form.Label>
      <div>
        <Form.Check inline label="Married" type="radio" name="maritalStatus" value="yes" required/>
        <Form.Check inline label="Not Married" type="radio" name="maritalStatus" value="no" />
      </div>
    </Form.Group>

    <Form.Group>
      <Form.Label>
        Will your spouse (if relevant) or dependent children accompany you during your Australian education?
      </Form.Label>
      <Form.Control as="select" name="familyMembers">
        <option value="noFamilyMembers">No Family Members</option>
        <option value="spouse">Spouse</option>
        <option value="dependents">Dependents</option>
        <option value="spouseAndDependents">Spouse and Dependents</option>
      </Form.Control>
    </Form.Group>

    <Form.Group>
      <Form.Label>
        Do you have adequate funds for education and your dependents' living expenses? (For information see{' '}
        <a target="_blank" href="https://www.latrobe.edu.au/study/life/living/costs">
          Guide to Living Costs
        </a>
        .)
      </Form.Label>
      <div>
        <Form.Check inline label="Yes" type="radio" name="haveFundsCheck" value="yes" />
        <Form.Check inline label="No" type="radio" name="haveFundsCheck" value="no" />
      </div>
    </Form.Group>

    <Form.Group>
      <Form.Label>Do you have relatives living in Australia?</Form.Label>
      <div>
        <Form.Check inline label="Yes" type="radio" name="haveRelativesCheck" value="yes" required/>
        <Form.Check inline label="No" type="radio" name="haveRelativesCheck" value="no" />
      </div>
    </Form.Group>

    <Form.Group>
      <Form.Label>Have you, your partner or any dependents ever applied to migrate to any country?</Form.Label>
      <div>
        <Form.Check inline label="Yes" type="radio" name="haveAppliedCheck" value="yes" required/>
        <Form.Check inline label="No" type="radio" name="haveAppliedCheck" value="no" />
      </div>
    </Form.Group>

    <h4>SECONDARY STUDIES</h4>
    <span>(high school studies – Year 12). Please list your MOST RECENT qualification first</span>

    <Form.Group>
      <Form.Label>Name of qualification:</Form.Label>
      <Form.Control type="text" name="secondaryStudyQualificationName" required/>
    </Form.Group>

    <Form.Group>
      <Form.Label>Name of School/Institute:</Form.Label>
      <Form.Control type="text" name="secondaryStudySchoolInstitutionName" required/>
    </Form.Group>

    <Form.Group>
      <Form.Label>Date Commenced:</Form.Label>
      <Form.Control type="date" name="secondaryStudyCommencedDate" required/>
    </Form.Group>

    <Form.Group>
      <Form.Label>Date Completed:</Form.Label>
      <Form.Control type="date" name="secondaryStudyCompletedDate" required/>
    </Form.Group>

    <Form.Group>
      <Form.Label>In which country did you study this qualification?</Form.Label>
      <Form.Control as="select" name="secondaryStudyCountry" required>
        <option value="Zimbabwe">Zimbabwe</option>
      </Form.Control>
    </Form.Group>

    <Form.Group>
      <Form.Label>Is English the language of your instruction and assessment?</Form.Label>
      <div>
        <Form.Check inline label="Yes" type="radio" name="secondaryStudyEnglishMediumCheck" value="yes" required/>
        <Form.Check inline label="No" type="radio" name="secondaryStudyEnglishMediumCheck" value="no" />
      </div>
    </Form.Group>

    <Form.Group>
      <Form.Label>Have you completed the above study?</Form.Label>
      <div>
        <Form.Check inline label="Yes" type="radio" name="secondaryStudyCompletedCheck" value="yes" required/>
        <Form.Check inline label="No" type="radio" name="secondaryStudyCompletedCheck" value="no" />
      </div>
    </Form.Group>

    <h4>POST SECONDARY STUDIES</h4>
    <span>(high school studies – Year 12). Please list your MOST RECENT qualification first</span>

    <Form.Group>
      <Form.Label>Name of qualification:</Form.Label>
      <Form.Control type="text" name="1stPostSecondaryStudyQualificationName" />
    </Form.Group>

    <Form.Group>
      <Form.Label>Name of School/Institute:</Form.Label>
      <Form.Control type="text" name="1stPostSecondaryStudySchoolInstitutionName"/>
    </Form.Group>

    <Form.Group>
      <Form.Label>Date Commenced:</Form.Label>
      <Form.Control type="date" name="1stPostSecondaryStudyCommencedDate"/>
    </Form.Group>

    <Form.Group>
      <Form.Label>Date Completed:</Form.Label>
      <Form.Control type="date" name="1stPostSecondaryStudyCompletedDate"/>
    </Form.Group>

    <Form.Group>
      <Form.Label>In which country did you study this qualification?</Form.Label>
      <Form.Control as="select" name="1stPostSecondaryStudyCountry">
        <option value="Zimbabwe">Zimbabwe</option>
      </Form.Control>
    </Form.Group>

    <Form.Group>
      <Form.Label>Is English the language of your instruction and assessment?</Form.Label>
      <div>
        <Form.Check inline label="Yes" type="radio" name="1stPostSecondaryStudyEnglishMediumCheck" value="yes"/>
        <Form.Check inline label="No" type="radio" name="1stPostSecondaryStudyEnglishMediumCheck" value="no" />
      </div>
    </Form.Group>

    <Form.Group>
      <Form.Label>Have you completed the above study?</Form.Label>
      <div>
        <Form.Check inline label="Yes" type="radio" name="1stPostSecondaryStudyCompletedCheck" value="yes"/>
        <Form.Check inline label="No" type="radio" name="1stPostSecondaryStudyCompletedCheck" value="no" />
      </div>
    </Form.Group>

    <Form.Group>
      <Form.Label>Name of qualification:</Form.Label>
      <Form.Control type="text" name="2ndPostSecondaryStudyQualificationName" />
    </Form.Group>

    <Form.Group>
      <Form.Label>Name of School/Institute:</Form.Label>
      <Form.Control type="text" name="2ndPostSecondaryStudySchoolInstitutionName"/>
    </Form.Group>

    <Form.Group>
      <Form.Label>Date Commenced:</Form.Label>
      <Form.Control type="date" name="2ndPostSecondaryStudyCommencedDate"/>
    </Form.Group>

    <Form.Group>
      <Form.Label>Date Completed:</Form.Label>
      <Form.Control type="date" name="2ndPostSecondaryStudyCompletedDate"/>
    </Form.Group>

    <Form.Group>
      <Form.Label>In which country did you study this qualification?</Form.Label>
      <Form.Control as="select" name="2ndPostSecondaryStudyCountry">
        <option value="Zimbabwe">Zimbabwe</option>
      </Form.Control>
    </Form.Group>

    <Form.Group>
      <Form.Label>Is English the language of your instruction and assessment?</Form.Label>
      <div>
        <Form.Check inline label="Yes" type="radio" name="2ndPostSecondaryStudyEnglishMediumCheck" value="yes"/>
        <Form.Check inline label="No" type="radio" name="2ndPostSecondaryStudyEnglishMediumCheck" value="no" />
      </div>
    </Form.Group>

    <Form.Group>
      <Form.Label>Have you completed the above study?</Form.Label>
      <div>
        <Form.Check inline label="Yes" type="radio" name="2ndPostSecondaryStudyCompletedCheck" value="yes"/>
        <Form.Check inline label="No" type="radio" name="2ndPostSecondaryStudyCompletedCheck" value="no" />
      </div>
    </Form.Group>

    <Form.Group>
      <input type="button" value="Add Qualification" onClick={() => {}} />
    </Form.Group>
  </FormWrapper>
  )
}