import { Table } from "react-bootstrap";

export function SearchResultsTable({...doc}){

    return <><br />
    <h3>{doc.otherNames?`${doc.otherNames.charAt(0).toUpperCase() + doc.otherNames.slice(1)}'s`:"APPLICATION"} | BASIC DETAILS</h3><br />
    <h4>Monash Record</h4>
      <Table>
        <tbody>
        <tr>
            <td>Have a monash student ID number</td><td>{doc.monashIdCheck}</td>
          </tr>
          <tr>
            <td>Monash ID</td><td>{doc.monashId}</td>
          </tr>
          <tr>
            <td>Enrolled monash student</td><td>{doc.monashEnrolledCheck}</td>
          </tr>
        </tbody>
      </Table><br />
      <h5>1st University Applying For:</h5>
      <Table>
        <tbody>
          <tr>
            <td>University Name</td><td>{doc.universityPreferenceOne}</td>
          </tr>
          <tr>
            <td>Preference 1 (Programme Code & Programme Name)</td><td>{doc.firstUniProgramPreferenceOne}</td>
          </tr>
          <tr>
            <td>Preference 2 (Programme Code & Programme Name)</td><td>{doc.firstUniProgramPreferenceTwo}</td>
          </tr>
          <tr>
            <td>Preference 3 (Programme Code & Programme Name)</td><td>{doc.firstUniProgramPreferenceThree}</td>
          </tr>
          <tr>
            <td>Intake</td><td>{doc.intake}</td>
          </tr>
          <tr>
            <td>Campus (Location)</td><td>{doc.campus}</td>
          </tr>
        </tbody>
      </Table> <br />
      <h5>2nd University Applying For:</h5>
      <Table><br />
        <tbody>
          <tr>
            <td>University Name</td><td>{doc.universityPreferenceTwo}</td>
          </tr>
          <tr>
            <td>Preference 1 (Programme Code & Programme Name)</td><td>{doc.secondUniProgramPreferenceOne}</td>
          </tr>
          <tr>
            <td>Preference 2 (Programme Code & Programme Name)</td><td>{doc.secondUniProgramPreferenceTwo}</td>
          </tr>
          <tr>
            <td>Preference 3 (Programme Code & Programme Name)</td><td>{doc.secondUniProgramPreferenceThree}</td>
          </tr>
          <tr>
            <td>Intake</td><td>{doc.secondUniintake}</td>
          </tr>
          <tr>
            <td>Campus (Location)</td><td>{doc.secondUnicampus}</td>
          </tr>
        </tbody>
      </Table><br /> 
      <h5>3rd University Applying For:</h5>
      <Table>
        <tbody>
          <tr>
            <td>University Name</td><td>{doc.universityPreferenceThree}</td>
          </tr>
          <tr>
            <td>Preference 1 (Programme Code & Programme Name)</td><td>{doc.thirdUniProgramPreferenceOne}</td>
          </tr>
          <tr>
            <td>Preference 2 (Programme Code & Programme Name)</td><td>{doc.thirdUniProgramPreferenceTwo}</td>
          </tr>
          <tr>
            <td>Preference 3 (Programme Code & Programme Name)</td><td>{doc.thirdUniProgramPreferenceThree}</td>
          </tr>
          <tr>
            <td>Intake</td><td>{doc.thirdUniintake}</td>
          </tr>
          <tr>
            <td>Campus (Location)</td><td>{doc.thirdUnicampus}</td>
          </tr>
        </tbody>
      </Table> <br />

      <h4>Personal Details</h4>
      <Table>
        <tbody>
          <tr>
            <td>Surname</td><td>{doc.surname.charAt(0).toUpperCase()+doc.surname.slice(1)}</td>
          </tr>
          <tr>
            <td>Other names</td><td>{doc.otherNames.charAt(0).toUpperCase()+doc.otherNames.slice(1)}</td>
          </tr>
          <tr>
            <td>Gender</td><td>{doc.gender}</td>
          </tr>
          <tr>
            <td>Date of birth</td><td>{doc.dateOfBirth}</td>
          </tr>
          <tr>
            <td>Email</td><td>{doc.email}</td>
          </tr>
          <tr>
            <td>Have a disability</td><td>{doc.disabilityCheck}</td>
          </tr>
          <tr>
            <td>A permanent Australian resident</td><td>{doc.AustralianResidencyCheck}</td>
          </tr>
          <tr>
            <td>Have been excluded from an Australian education institution</td><td>{doc.AustralianExpulsionCheck}</td>
          </tr>
        </tbody>
      </Table> 
      <br />
    <h3>{doc.otherNames?`${doc.otherNames.charAt(0).toUpperCase() + doc.otherNames.slice(1)}'s`:"APPLICATION"} | CONTACT DETAILS</h3><br />
    <h5>Permanent Address</h5>
    <Table>
        <tbody>
          <tr>
            <td>Country and Region</td><td>{doc.countryOrRegion}</td>
          </tr>
          <tr>
            <td>State/Province</td><td>{doc.stateProvince}</td>
          </tr>
          <tr>
            <td>City/Suburb</td><td>{doc.citySuburb}</td>
          </tr>
          <tr>
            <td>Address line 1</td><td>{doc.addressLine1}</td>
          </tr>
          <tr>
            <td>Address line 2</td><td>{doc.addressLine2}</td>
          </tr>
          <tr>
            <td>Address line 3</td><td>{doc.addressLine3}</td>
          </tr>
          <tr>
            <td>Postal code</td><td>{doc.postalCode}</td>
          </tr>
        </tbody>
      </Table><br />
      <h5>Postal Address</h5>
      <Table>
        <tbody>
          <tr>
            <td>Country and Region</td><td>{doc.postalCountryOrRegion}</td>
          </tr>
          <tr>
            <td>State/Province</td><td>{doc.postalStateProvince}</td>
          </tr>
          <tr>
            <td>City/Suburb</td><td>{doc.postalCitySuburb}</td>
          </tr>
          <tr>
            <td>Address line 1</td><td>{doc.postalAddressLine1}</td>
          </tr>
          <tr>
            <td>Address line 2</td><td>{doc.postalAddressLine2}</td>
          </tr>
          <tr>
            <td>Address line 3</td><td>{doc.postalAddressLine3}</td>
          </tr>
          <tr>
            <td>Postal code</td><td>{doc.postalPostalCode}</td>
          </tr>
          <tr>
            <td>Mobile phone number</td><td>{doc.postalMobileNumber}</td>
          </tr>
          <tr>
            <td>Landline number</td><td>{doc.postalLandlineNumber}</td>
          </tr>
        </tbody>
      </Table>
      <br /><br />
    <h3>{doc.otherNames?`${doc.otherNames.charAt(0).toUpperCase() + doc.otherNames.slice(1)}'s`:"APPLICATION"} | PASSPORT AND VISA DETAILS</h3><br />
    <Table>
      <tbody>
        <tr>
          <td>Nationality (As per your passport)</td><td>{doc.nationality}</td>
        </tr>
        <tr>
          <td>Passport number</td><td>{doc.passportNumber}</td>
        </tr>
        <tr>
          <td>Passport issue date</td><td>{doc.passportIssueDate}</td>
        </tr>
        <tr>
          <td>Passport expiry date</td><td>{doc.passportExpiryDate}</td>
        </tr>
        <tr>
          <td>Previously visited or Studied in Australia</td><td>{doc.visitedOrStudiedInAus}</td>
        </tr>
      </tbody>
    </Table><br />
    <h5>Visa Related Questions</h5>
    <Table>
      <tbody>
        <tr>
          <td>Currently holding an Australian Visa</td><td>{doc.holdingAusVisa}</td>
        </tr>
        <tr>
          <td>Visa vrant number</td><td>{doc.holdingAusVisaGrantNumber}</td>
        </tr>
        <tr>
          <td>Previous visa condition breaches has happened</td><td>{doc.ausVisaBreach}</td>
        </tr>
        <tr>
          <td>Have been refused for entry, cancelled or overstayed a visa in Australia or another country</td><td>{doc.ausVisaRefuse}</td>
        </tr>
        <tr>
          <td>Have applied and/or received a protection visa in any country to date</td><td>{doc.protectionVisa}</td>
        </tr>
        <tr>
          <td>Have been convicted of a criminal offence</td><td>{doc.criminalOffence}</td>
        </tr>
      </tbody>
    </Table><br /><br />
    <h3>{doc.otherNames?`${doc.otherNames.charAt(0).toUpperCase() + doc.otherNames.slice(1)}'s`:"APPLICATION"} | FAMILY IMMIGRATION HISTORY</h3>
      <br /><Table>
        <tbody>
          <tr>
          <td>Marital status</td><td>{doc.maritalStatus=="yes"?"Married":"Not Married"}</td>
          </tr>
          <tr>
          <td>Dependents accompany</td><td>{doc.familyMembers.replace(/([A-Z])/g, " $1").charAt(0).toUpperCase()+doc.familyMembers.replace(/([A-Z])/g, " $1").slice(1)}</td>
          </tr>
          <tr>
          <td>Have funds for education and dependents</td><td>{doc.haveFundsCheck}</td>
          </tr>
          <tr>
          <td>Relatives living in Australia</td><td>{doc.haveRelativesCheck}</td>
          </tr>
          <tr>
          <td>Applicant/Partner have applied to migrate to Any Country</td><td>{doc.haveAppliedCheck}</td>
          </tr>
          <tr>
          <td>Have applied to migrate to Any country</td><td>{doc.haveAppliedCheck}</td>
          </tr>
        </tbody>
      </Table>
      <br />
      <h4>Secondary Studies</h4>
      <Table>
        <tbody>
          <tr>
          <td>Name of qualification</td><td>{doc.secondaryStudyQualificationName}</td>
          </tr>
          <tr>
          <td>Name of school/institute</td><td>{doc.secondaryStudySchoolInstitutionName}</td>
          </tr>
          <tr>
          <td>Date commenced</td><td>{doc.secondaryStudyCommencedDate}</td>
          </tr>
          <tr>
          <td>Date completed</td><td>{doc.secondaryStudyCompletedDate}</td>
          </tr>
          <tr>
          <td>Studied country</td><td>{doc.secondaryStudyCountry}</td>
          </tr>
          <tr>
          <td>Conducted by english medium</td><td>{doc.secondaryStudyEnglishMediumCheck}</td>
          </tr>
          <tr>
          <td>Study has completed</td><td>{doc.secondaryStudyCompletedCheck}</td>
          </tr>
        </tbody>
      </Table><br />
      <h4>Post Secondary Studies</h4><br />
      <h5>First qualification</h5>
      <Table>
        <tbody>
          <tr>
          <td>Name of qualification</td><td>{doc.firstPostSecondaryStudyQualificationName}</td>
          </tr>
          <tr>
          <td>Name of school/institute</td><td>{doc.firstPostSecondaryStudySchoolInstitutionName}</td>
          </tr>
          <tr>
          <td>Date commenced</td><td>{doc.firstPostSecondaryStudyCommencedDate}</td>
          </tr>
          <tr>
          <td>Date completed</td><td>{doc.firstPostSecondaryStudyCompletedDate}</td>
          </tr>
          <tr>
          <td>Studied country</td><td>{doc.firstPostSecondaryStudyCountry}</td>
          </tr>
          <tr>
          <td>Conducted by english medium</td><td>{doc.firstPostSecondaryStudyEnglishMediumCheck}</td>
          </tr>
          <tr>
          <td>Study has completed</td><td>{doc.firstPostSecondaryStudyCompletedCheck}</td>
          </tr>
        </tbody>
      </Table><br />
      <h5>Second qualification</h5>
      <Table>
        <tbody>
          <tr>
          <td>Name of qualification</td><td>{doc.secondPostSecondaryStudyQualificationName}</td>
          </tr>
          <tr>
          <td>Name of school/institute</td><td>{doc.secondPostSecondaryStudySchoolInstitutionName}</td>
          </tr>
          <tr>
          <td>Date commenced</td><td>{doc.secondPostSecondaryStudyCommencedDate}</td>
          </tr>
          <tr>
          <td>Date completed</td><td>{doc.secondPostSecondaryStudyCompletedDate}</td>
          </tr>
          <tr>
          <td>Studied country</td><td>{doc.secondPostSecondaryStudyCountry}</td>
          </tr>
          <tr>
          <td>Conducted by English medium</td><td>{doc.secondPostSecondaryStudyEnglishMediumCheck}</td>
          </tr>
          <tr>
          <td>Study Has completed</td><td>{doc.secondPostSecondaryStudyCompletedCheck}</td>
          </tr>
        </tbody>
      </Table><br />
      <h3>{doc.otherNames?`${doc.otherNames.charAt(0).toUpperCase() + doc.otherNames.slice(1)}'s`:"APPLICATION"} | <br/>WORK EXPERIENCE/RESUME/PERSONAL STATEMENT</h3><br />
      <Table>
        <tbody>
          <tr>
          <td>Have relevant work experience</td><td>{doc.relevantWorkExperienceCheck}</td>
          </tr>
          <tr>
          <td>Have a gap in studies and/or work history</td><td>{doc.relevantWorkExperienceCheck}</td>
          </tr>
        </tbody>
      </Table><br />
      <h4>English Proficiency</h4>
      <Table>
        <tbody>
          <tr>
          <td>First fanguage</td><td>{doc.firstLanguage}</td>
          </tr>
          <tr>
          <td>Have you taken an English proficiency test</td><td>{doc.englishProficiencyTest.replace(/([A-Z])/g, " $1").charAt(0).toUpperCase()+doc.englishProficiencyTest.replace(/([A-Z])/g, " $1").slice(1)}</td>
          </tr>
          <tr>
          <td>Date of the test taken</td><td>{doc.englishProficiencyTestDate}</td>
          </tr>
          <tr>
          <td>Test reference number</td><td>{doc.englishProficiencyTestReferenceNumber}</td>
          </tr>
        </tbody>
      </Table><br />
      <h4>Work Experience</h4>
      <Table>
        <tbody>
          <tr>
          <td>Have relevant work details</td><td>{doc.relevantWorkExperienceDetailsCheck}</td>
          </tr>
        </tbody>
      </Table><br />
      <h4>Financial Support</h4>
      <Table>
        <tbody>
          <tr>
          <td>Method of supporting Studies</td><td>{doc.studyFundMethod.replace(/([A-Z])/g, " $1").charAt(0).toUpperCase()+doc.studyFundMethod.replace(/([A-Z])/g, " $1").slice(1)}</td>
          </tr>
        </tbody>
      </Table><br />
      <h4>Parent or Guardian Contact Details</h4>
      <Table>
        <tbody>
          <tr>
          <td>Name of Parent/Guardian</td><td>{doc.parentGuardianName}</td>
          </tr>
          <tr>
          <td>Parent/Guardian's Mobile number</td><td>{doc.parentGuardianMobileNumber}</td>
          </tr>
          <tr>
          <td>Parent/Guardian's Email</td><td>{doc.parentGuardianEmail}</td>
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
          <td colSpan={2}>{doc.careerAspirationNote}</td>
          </tr>
          <tr>
          <td>University selection comment</td>
          </tr>
          <tr>
          <td colSpan={2}>{doc.universityChoiceNote}</td>
          </tr>
          <tr>
          <td>source of information about the University</td><td>{doc.directedMedia}</td>
          </tr>
        </tbody>
      </Table><br />
    </>

}