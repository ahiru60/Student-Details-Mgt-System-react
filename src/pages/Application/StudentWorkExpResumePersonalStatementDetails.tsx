import Form from "react-bootstrap/esm/Form";
import { FormWrapper } from "./FormWrapper";

type userData = {

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

type WorkExpResumePersonalStatementDetailsProps = userData & {

  updateFields: (fields: Partial<userData>) => void

}

export function StudentWorkExpResumePersonalStatementDetails({

  relevantWorkExperienceCheck,
    studyBreakCheck,
    firstLanguage,
    englishProficiencyTest,
    englishProficiencyTestName,
    englishProficiencyTestDate,
    englishProficiencyTestReferenceNumber,
    relevantWorkExperienceDetailsCheck,
    studyFundMethod,
    parentGuardianName,
    parentGuardianMobileNumber,
    parentGuardianEmail,
    careerAspirationNote,
    universityChoiceNote,
    directedMedia,
    updateFields

  }:WorkExpResumePersonalStatementDetailsProps){
   return(<FormWrapper title={"WORK EXPERIENCE/RESUME/PERSONAL STATEMENT"}>
<Form.Group>
  <Form.Label>Do you have any relevant work experience you'd like to be considered for admissions?</Form.Label>
  <div>
    <Form.Check inline label="Yes" type="radio" name="relevantWorkExperienceCheck" value="yes" checked={relevantWorkExperienceCheck === 'yes'} onChange={e=> updateFields({relevantWorkExperienceCheck:e.target.value})}required/>
    <Form.Check inline label="No" type="radio" name="relevantWorkExperienceCheck" value="no" checked={relevantWorkExperienceCheck === 'no'} onChange={e=> updateFields({relevantWorkExperienceCheck:e.target.value})}/>
  </div>
</Form.Group>

<Form.Group>
  <Form.Label>Do you have a gap in studies and/or work history longer than 3 months?</Form.Label>
  <div>
    <Form.Check inline label="Yes" type="radio" name="studyBreakCheck" value="yes" checked={studyBreakCheck === 'yes'} onChange={e=> updateFields({studyBreakCheck:e.target.value})}required/>
    <Form.Check inline label="No" type="radio" name="studyBreakCheck" value="no" checked={studyBreakCheck === 'no'} onChange={e=> updateFields({studyBreakCheck:e.target.value})}/>
  </div>
</Form.Group>

<h4>ENGLISH PROFICIENCY</h4>

<Form.Group>
  <Form.Label>What is your first language?</Form.Label>
  <Form.Control as="select" name="firstLanguage" value={firstLanguage} onChange={e=> updateFields({firstLanguage:e.target.value})} required>
      <option value="afrikaans">Afrikaans</option>
      <option value="albanian">Albanian</option>
      <option value="amharic">Amharic</option>
      <option value="arabic">Arabic</option>
      <option value="armenian">Armenian</option>
      <option value="azerbaijani">Azerbaijani</option>
      <option value="basque">Basque</option>
      <option value="belarusian">Belarusian</option>
      <option value="bengali">Bengali</option>
      <option value="bosnian">Bosnian</option>
      <option value="bulgarian">Bulgarian</option>
      <option value="burmese">Burmese</option>
      <option value="catalan">Catalan</option>
      <option value="chinese">Chinese</option>
      <option value="croatian">Croatian</option>
      <option value="czech">Czech</option>
      <option value="danish">Danish</option>
      <option value="dutch">Dutch</option>
      <option value="english">English</option>
      <option value="esperanto">Esperanto</option>
      <option value="estonian">Estonian</option>
      <option value="filipino">Filipino</option>
      <option value="finnish">Finnish</option>
      <option value="french">French</option>
      <option value="galician">Galician</option>
      <option value="georgian">Georgian</option>
      <option value="german">German</option>
      <option value="greek">Greek</option>
      <option value="gujarati">Gujarati</option>
      <option value="haitian creole">Haitian Creole</option>
      <option value="hausa">Hausa</option>
      <option value="hebrew">Hebrew</option>
      <option value="hindi">Hindi</option>
      <option value="hmong">Hmong</option>
      <option value="hungarian">Hungarian</option>
      <option value="icelandic">Icelandic</option>
      <option value="igbo">Igbo</option>
      <option value="indonesian">Indonesian</option>
      <option value="irish">Irish</option>
      <option value="italian">Italian</option>
      <option value="japanese">Japanese</option>
      <option value="javanese">Javanese</option>
      <option value="kannada">Kannada</option>
      <option value="kazakh">Kazakh</option>
      <option value="khmer">Khmer</option>
      <option value="korean">Korean</option>
      <option value="kurdish">Kurdish</option>
      <option value="kyrgyz">Kyrgyz</option>
      <option value="lao">Lao</option>
      <option value="latin">Latin</option>
      <option value="latvian">Latvian</option>
      <option value="lithuanian">Lithuanian</option>
      <option value="luxembourgish">Luxembourgish</option>
      <option value="macedonian">Macedonian</option>
      <option value="malagasy">Malagasy</option>
      <option value="malay">Malay</option>
      <option value="malayalam">Malayalam</option>
      <option value="maltese">Maltese</option>
      <option value="maori">Maori</option>
      <option value="marathi">Marathi</option>
      <option value="mongolian">Mongolian</option>
      <option value="nepali">Nepali</option>
      <option value="norwegian">Norwegian</option>
      <option value="nyanja">Nyanja</option>
      <option value="odia">Odia</option>
      <option value="pashto">Pashto</option>
      <option value="persian">Persian</option>
      <option value="polish">Polish</option>
      <option value="portuguese">Portuguese</option>
      <option value="punjabi">Punjabi</option>
      <option value="romanian">Romanian</option>
      <option value="russian">Russian</option>
      <option value="samoan">Samoan</option>
      <option value="scots gaelic">Scots Gaelic</option>
      <option value="serbian">Serbian</option>
      <option value="sesotho">Sesotho</option>
      <option value="shona">Shona</option>
      <option value="sindhi">Sindhi</option>
      <option value="sinhala">Sinhala</option>
      <option value="slovak">Slovak</option>
      <option value="slovenian">Slovenian</option>
      <option value="somali">Somali</option>
      <option value="spanish">Spanish</option>
      <option value="sundanese">Sundanese</option>
      <option value="swahili">Swahili</option>
      <option value="swedish">Swedish</option>
      <option value="tajik">Tajik</option>
      <option value="tamil">Tamil</option>
      <option value="tatar">Tatar</option>
      <option value="telugu">Telugu</option>
      <option value="thai">Thai</option>
      <option value="turkish">Turkish</option>
      <option value="turkmen">Turkmen</option>
      <option value="ukrainian">Ukrainian</option>
      <option value="urdu">Urdu</option>
      <option value="uyghur">Uyghur</option>
      <option value="uzbek">Uzbek</option>
      <option value="vietnamese">Vietnamese</option>
      <option value="welsh">Welsh</option>
      <option value="xhosa">Xhosa</option>
      <option value="yiddish">Yiddish</option>
      <option value="yoruba">Yoruba</option>
      <option value="zulu">Zulu</option>
  </Form.Control>
</Form.Group>

<Form.Group>
  <Form.Label>Have you taken an English proficiency test within the last 24 months?</Form.Label>
  <Form.Control as="select" name="englishProficiencyTest" value={englishProficiencyTest} onChange={e=> updateFields({englishProficiencyTest:e.target.value})} required>
    <option value="haveTaken">I have taken an English proficiency test (e.g., IELTS/TOEFL/PTE)</option>
    <option value="haveNotTaken">I have not taken an English proficiency test (e.g., IELTS/TOEFL/PTE)</option>
  </Form.Control>
</Form.Group>

<Form.Group>
  <Form.Label>Name of the test taken:</Form.Label>
  <Form.Control type="text" name="englishProficiencyTestName" value={englishProficiencyTestName} onChange={e=> updateFields({englishProficiencyTestName:e.target.value})} />
</Form.Group>

<Form.Group>
  <Form.Label>Date of the test taken:</Form.Label>
  <Form.Control type="date" name="englishProficiencyTestDate" value={englishProficiencyTestDate} onChange={e=> updateFields({englishProficiencyTestDate:e.target.value})} />
</Form.Group>

<Form.Group>
  <Form.Label>Test reference number:</Form.Label>
  <Form.Control type="text" name="englishProficiencyTestReferenceNumber" value={englishProficiencyTestReferenceNumber} onChange={e=> updateFields({englishProficiencyTestReferenceNumber:e.target.value})} />
</Form.Group>

<h4>WORK EXPERIENCE</h4>

<Form.Group>
  <Form.Label>Do you wish to list any relevant work details?</Form.Label>
  <div>
    <Form.Check inline label="Yes" type="radio" name="relevantWorkExperienceDetailsCheck" value="available" checked={relevantWorkExperienceDetailsCheck === 'yes'} onChange={e=> updateFields({relevantWorkExperienceDetailsCheck:e.target.value})}required/>
    <Form.Check inline label="No" type="radio" name="relevantWorkExperienceDetailsCheck" value="notAvailable" checked={relevantWorkExperienceDetailsCheck === 'no'} onChange={e=> updateFields({relevantWorkExperienceDetailsCheck:e.target.value})}/>
  </div>
</Form.Group>

<h4>FINANCIAL SUPPORT</h4>

<Form.Group>
  <Form.Label>How are you planning to support your studies?</Form.Label>
  <Form.Control as="select" name="studyFundMethod" value={studyFundMethod} onChange={e=> updateFields({studyFundMethod:e.target.value})} required>
    <option value="personalFunds">Personal funds</option>
    <option value="parentalOrFamilySupport">Parental or family support</option>
    <option value="sponsorship">Sponsorship</option>
    <option value="other">Other</option>
  </Form.Control>
</Form.Group>

<h4>PARENT OR GUARDIAN CONTACT DETAILS</h4>

<Form.Group>
  <Form.Label>If you are supported by an external organisation (not an individual), such as a government agency, large organisation, or overseas university, you are a sponsored student. You will be required to provide a valid financial guarantee from your sponsoring organisation.</Form.Label>
</Form.Group>

<Form.Group>
  <Form.Label>Name of Parent/Guardian:</Form.Label>
  <Form.Control type="text" name="parentGuardianName" value={parentGuardianName} onChange={e=> updateFields({parentGuardianName:e.target.value})} required/>
</Form.Group>

<Form.Group>
  <Form.Label>Parent/Guardian's Mobile Number:</Form.Label>
  <Form.Control type="text" name="parentGuardianMobileNumber" value={parentGuardianMobileNumber} onChange={e=> updateFields({parentGuardianMobileNumber:e.target.value})} required/>
</Form.Group>

<Form.Group>
  <Form.Label>Parent/Guardian's Email:</Form.Label>
  <Form.Control type="text" name="parentGuardianEmail" value={parentGuardianEmail} onChange={e=> updateFields({parentGuardianEmail:e.target.value})} required/>
</Form.Group>

<h4>ADDITIONAL QUESTIONS</h4>

<Form.Group>
  <Form.Label>Please explain how your course selection is related to your previous education and/or professional background. How will it satisfy your career aspirations?</Form.Label>
  <Form.Control as="textarea" name="careerAspirationNote" rows={4} maxLength={1000} value={careerAspirationNote} onChange={e=> updateFields({careerAspirationNote:e.target.value})} required/>
</Form.Group>

<Form.Group>
  <Form.Label>Why have you chosen this University among other providers in Australia and overseas? Why have you chosen to study in this State of Australia?</Form.Label>
  <Form.Control as="textarea" name="universityChoiceNote" rows={4} maxLength={1000} value={universityChoiceNote} onChange={e=> updateFields({universityChoiceNote:e.target.value})} required/>
</Form.Group>

<Form.Group>
  <Form.Label>Please indicate where you first heard about this University:</Form.Label>
  <Form.Control as="select" name="directedMedia" value={directedMedia} onChange={e=> updateFields({directedMedia:e.target.value})} required>
    <option value="agent">Agent</option>
    <option value="socialMedia">Social Media</option>
    <option value="laThrobeUniversityWebsite">La Trobe University Website</option>
    <option value="advertisementOnline">Advertisement Online</option>
    <option value="googleSearch">Google Search</option>
    <option value="educationFairEvent">Education Fair/Event</option>
    <option value="friendFamily">Friend/Family</option>
    <option value="other">Other</option>
  </Form.Control>
</Form.Group>
   </FormWrapper>
   )
}