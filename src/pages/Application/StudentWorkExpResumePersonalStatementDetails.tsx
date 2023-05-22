import Form from "react-bootstrap/esm/Form";
import { FormWrapper } from "./FormWrapper";

export function StudentWorkExpResumePersonalStatementDetails(){
   return(<FormWrapper title={"WORK EXPERIENCE/RESUME/PERSONAL STATEMENT"}>
<Form.Group>
  <Form.Label>Do you have any relevant work experience you'd like to be considered for admissions?</Form.Label>
  <div>
    <Form.Check inline label="Yes" type="radio" name="relevantWorkExperienceCheck" value="yes" required/>
    <Form.Check inline label="No" type="radio" name="relevantWorkExperienceCheck" value="no" />
  </div>
</Form.Group>

<Form.Group>
  <Form.Label>Do you have a gap in studies and/or work history longer than 3 months?</Form.Label>
  <div>
    <Form.Check inline label="Yes" type="radio" name="studyBreakCheck" value="yes" required/>
    <Form.Check inline label="No" type="radio" name="studyBreakCheck" value="no" />
  </div>
</Form.Group>

<h4>ENGLISH PROFICIENCY</h4>

<Form.Group>
  <Form.Label>In which country did you study this qualification?</Form.Label>
  <Form.Control as="select" name="secondaryStudyCountry" required>
        <option value="Afghanistan">Afghanistan</option>
        <option value="Aland Islands">Aland Islands</option>
        <option value="Albania">Albania</option>
        <option value="Algeria">Algeria</option>
        <option value="American Samoa">American Samoa</option>
        <option value="Andorra">Andorra</option>
        <option value="Angola">Angola</option>
        <option value="Anguilla">Anguilla</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
        <option value="Argentina">Argentina</option>
        <option value="Armenia">Armenia</option>
        <option value="Aruba">Aruba</option>
        <option value="Australia">Australia</option>
        <option value="Austria">Austria</option>
        <option value="Azerbaijan">Azerbaijan</option>
        <option value="Bahamas">Bahamas</option>
        <option value="Bahrain">Bahrain</option>
        <option value="Bangladesh">Bangladesh</option>
        <option value="Barbados">Barbados</option>
        <option value="Belarus">Belarus</option>
        <option value="Belgium">Belgium</option>
        <option value="Belize">Belize</option>
        <option value="Benin">Benin</option>
        <option value="Bermuda">Bermuda</option>
        <option value="Bhutan">Bhutan</option>
        <option value="Bolivia">Bolivia</option>
        <option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option>
        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
        <option value="Botswana">Botswana</option>
        <option value="Bouvet Island">Bouvet Island</option>
        <option value="Brazil">Brazil</option>
        <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
        <option value="Brunei Darussalam">Brunei Darussalam</option>
        <option value="Bulgaria">Bulgaria</option>
        <option value="Burkina Faso">Burkina Faso</option>
        <option value="Burundi">Burundi</option>
        <option value="Cambodia">Cambodia</option>
        <option value="Cameroon">Cameroon</option>
        <option value="Canada">Canada</option>
        <option value="Cape Verde">Cape Verde</option>
        <option value="Cayman Islands">Cayman Islands</option>
        <option value="Central African Republic">Central African Republic</option>
        <option value="Chad">Chad</option>
        <option value="Chile">Chile</option>
        <option value="China">China</option>
        <option value="Christmas Island">Christmas Island</option>
        <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
        <option value="Colombia">Colombia</option>
        <option value="Comoros">Comoros</option>
        <option value="Congo">Congo</option>
        <option value="Congo, Democratic Republic of the Congo">Congo, Democratic Republic of the Congo</option>
        <option value="Cook Islands">Cook Islands</option>
        <option value="Costa Rica">Costa Rica</option>
        <option value="Cote D'Ivoire">Cote D'Ivoire</option>
        <option value="Croatia">Croatia</option>
        <option value="Cuba">Cuba</option>
        <option value="Curacao">Curacao</option>
        <option value="Cyprus">Cyprus</option>
        <option value="Czech Republic">Czech Republic</option>
        <option value="Denmark">Denmark</option>
        <option value="Djibouti">Djibouti</option>
        <option value="Dominica">Dominica</option>
        <option value="Dominican Republic">Dominican Republic</option>
        <option value="Ecuador">Ecuador</option>
        <option value="Egypt">Egypt</option>
        <option value="El Salvador">El Salvador</option>
        <option value="Equatorial Guinea">Equatorial Guinea</option>
        <option value="Eritrea">Eritrea</option>
        <option value="Estonia">Estonia</option>
        <option value="Ethiopia">Ethiopia</option>
        <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
        <option value="Faroe Islands">Faroe Islands</option>
        <option value="Fiji">Fiji</option>
        <option value="Finland">Finland</option>
        <option value="France">France</option>
        <option value="French Guiana">French Guiana</option>
        <option value="French Polynesia">French Polynesia</option>
        <option value="French Southern Territories">French Southern Territories</option>
        <option value="Gabon">Gabon</option>
        <option value="Gambia">Gambia</option>
        <option value="Georgia">Georgia</option>
        <option value="Germany">Germany</option>
        <option value="Ghana">Ghana</option>
        <option value="Gibraltar">Gibraltar</option>
        <option value="Greece">Greece</option>
        <option value="Greenland">Greenland</option>
        <option value="Grenada">Grenada</option>
        <option value="Guadeloupe">Guadeloupe</option>
        <option value="Guam">Guam</option>
        <option value="Guatemala">Guatemala</option>
        <option value="Guernsey">Guernsey</option>
        <option value="Guinea">Guinea</option>
        <option value="Guinea-Bissau">Guinea-Bissau</option>
        <option value="Guyana">Guyana</option>
        <option value="Haiti">Haiti</option>
        <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
        <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
        <option value="Honduras">Honduras</option>
        <option value="Hong Kong">Hong Kong</option>
        <option value="Hungary">Hungary</option>
        <option value="Iceland">Iceland</option>
        <option value="India">India</option>
        <option value="Indonesia">Indonesia</option>
        <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
        <option value="Iraq">Iraq</option>
        <option value="Ireland">Ireland</option>
        <option value="Isle of Man">Isle of Man</option>
        <option value="Israel">Israel</option>
        <option value="Italy">Italy</option>
        <option value="Jamaica">Jamaica</option>
        <option value="Japan">Japan</option>
        <option value="Jersey">Jersey</option>
        <option value="Jordan">Jordan</option>
        <option value="Kazakhstan">Kazakhstan</option>
        <option value="Kenya">Kenya</option>
        <option value="Kiribati">Kiribati</option>
        <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
        <option value="Korea, Republic of">Korea, Republic of</option>
        <option value="Kosovo">Kosovo</option>
        <option value="Kuwait">Kuwait</option>
        <option value="Kyrgyzstan">Kyrgyzstan</option>
        <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
        <option value="Latvia">Latvia</option>
        <option value="Lebanon">Lebanon</option>
        <option value="Lesotho">Lesotho</option>
        <option value="Liberia">Liberia</option>
        <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
        <option value="Liechtenstein">Liechtenstein</option>
        <option value="Lithuania">Lithuania</option>
        <option value="Luxembourg">Luxembourg</option>
        <option value="Macao">Macao</option>
        <option value="Macedonia, the Former Yugoslav Republic of">Macedonia, the Former Yugoslav Republic of</option>
        <option value="Madagascar">Madagascar</option>
        <option value="Malawi">Malawi</option>
        <option value="Malaysia">Malaysia</option>
        <option value="Maldives">Maldives</option>
        <option value="Mali">Mali</option>
        <option value="Malta">Malta</option>
        <option value="Marshall Islands">Marshall Islands</option>
        <option value="Martinique">Martinique</option>
        <option value="Mauritania">Mauritania</option>
        <option value="Mauritius">Mauritius</option>
        <option value="Mayotte">Mayotte</option>
        <option value="Mexico">Mexico</option>
        <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
        <option value="Moldova, Republic of">Moldova, Republic of</option>
        <option value="Monaco">Monaco</option>
        <option value="Mongolia">Mongolia</option>
        <option value="Montenegro">Montenegro</option>
        <option value="Montserrat">Montserrat</option>
        <option value="Morocco">Morocco</option>
        <option value="Mozambique">Mozambique</option>
        <option value="Myanmar">Myanmar</option>
        <option value="Namibia">Namibia</option>
        <option value="Nauru">Nauru</option>
        <option value="Nepal">Nepal</option>
        <option value="Netherlands">Netherlands</option>
        <option value="Netherlands Antilles">Netherlands Antilles</option>
        <option value="New Caledonia">New Caledonia</option>
        <option value="New Zealand">New Zealand</option>
        <option value="Nicaragua">Nicaragua</option>
        <option value="Niger">Niger</option>
        <option value="Nigeria">Nigeria</option>
        <option value="Niue">Niue</option>
        <option value="Norfolk Island">Norfolk Island</option>
        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
        <option value="Norway">Norway</option>
        <option value="Oman">Oman</option>
        <option value="Pakistan">Pakistan</option>
        <option value="Palau">Palau</option>
        <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
        <option value="Panama">Panama</option>
        <option value="Papua New Guinea">Papua New Guinea</option>
        <option value="Paraguay">Paraguay</option>
        <option value="Peru">Peru</option>
        <option value="Philippines">Philippines</option>
        <option value="Pitcairn">Pitcairn</option>
        <option value="Poland">Poland</option>
        <option value="Portugal">Portugal</option>
        <option value="Puerto Rico">Puerto Rico</option>
        <option value="Qatar">Qatar</option>
        <option value="Reunion">Reunion</option>
        <option value="Romania">Romania</option>
        <option value="Russian Federation">Russian Federation</option>
        <option value="Rwanda">Rwanda</option>
        <option value="Saint Barthelemy">Saint Barthelemy</option>
        <option value="Saint Helena">Saint Helena</option>
        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
        <option value="Saint Lucia">Saint Lucia</option>
        <option value="Saint Martin">Saint Martin</option>
        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
        <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
        <option value="Samoa">Samoa</option>
        <option value="San Marino">San Marino</option>
        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
        <option value="Saudi Arabia">Saudi Arabia</option>
        <option value="Senegal">Senegal</option>
        <option value="Serbia">Serbia</option>
        <option value="Serbia and Montenegro">Serbia and Montenegro</option>
        <option value="Seychelles">Seychelles</option>
        <option value="Sierra Leone">Sierra Leone</option>
        <option value="Singapore">Singapore</option>
        <option value="Sint Maarten">Sint Maarten</option>
        <option value="Slovakia">Slovakia</option>
        <option value="Slovenia">Slovenia</option>
        <option value="Solomon Islands">Solomon Islands</option>
        <option value="Somalia">Somalia</option>
        <option value="South Africa">South Africa</option>
        <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
        <option value="South Sudan">South Sudan</option>
        <option value="Spain">Spain</option>
        <option value="Sri Lanka">Sri Lanka</option>
        <option value="Sudan">Sudan</option>
        <option value="Suriname">Suriname</option>
        <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
        <option value="Swaziland">Swaziland</option>
        <option value="Sweden">Sweden</option>
        <option value="Switzerland">Switzerland</option>
        <option value="Syrian Arab Republic">Syrian Arab Republic</option>
        <option value="Taiwan, Province of China">Taiwan, Province of China</option>
        <option value="Tajikistan">Tajikistan</option>
        <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
        <option value="Thailand">Thailand</option>
        <option value="Timor-Leste">Timor-Leste</option>
        <option value="Togo">Togo</option>
        <option value="Tokelau">Tokelau</option>
        <option value="Tonga">Tonga</option>
        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
        <option value="Tunisia">Tunisia</option>
        <option value="Turkey">Turkey</option>
        <option value="Turkmenistan">Turkmenistan</option>
        <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
        <option value="Tuvalu">Tuvalu</option>
        <option value="Uganda">Uganda</option>
        <option value="Ukraine">Ukraine</option>
        <option value="United Arab Emirates">United Arab Emirates</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="United States">United States</option>
        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
        <option value="Uruguay">Uruguay</option>
        <option value="Uzbekistan">Uzbekistan</option>
        <option value="Vanuatu">Vanuatu</option>
        <option value="Venezuela">Venezuela</option>
        <option value="Viet Nam">Viet Nam</option>
        <option value="Virgin Islands, British">Virgin Islands, British</option>
        <option value="Virgin Islands, U.s.">Virgin Islands, U.s.</option>
        <option value="Wallis and Futuna">Wallis and Futuna</option>
        <option value="Western Sahara">Western Sahara</option>
        <option value="Yemen">Yemen</option>
        <option value="Zambia">Zambia</option>
        <option value="Zimbabwe">Zimbabwe</option>
  </Form.Control>
</Form.Group>

<Form.Group>
  <Form.Label>Have you taken an English proficiency test within the last 24 months?</Form.Label>
  <Form.Control as="select" name="englishProficiencyTest" required>
    <option value="haveTaken">I have taken an English proficiency test (e.g., IELTS/TOEFL/PTE)</option>
    <option value="haveNotTaken">I have not taken an English proficiency test (e.g., IELTS/TOEFL/PTE)</option>
  </Form.Control>
</Form.Group>

<Form.Group>
  <Form.Label>Name of the test taken:</Form.Label>
  <Form.Control type="text" name="englishProficiencyTestName" />
</Form.Group>

<Form.Group>
  <Form.Label>Date of the test taken:</Form.Label>
  <Form.Control type="date" name="englishProficiencyTestDate" />
</Form.Group>

<Form.Group>
  <Form.Label>Test reference number:</Form.Label>
  <Form.Control type="text" name="englishProficiencyTestReferenceNumber" />
</Form.Group>

<h4>WORK EXPERIENCE</h4>

<Form.Group>
  <Form.Label>Do you wish to list any relevant work details?</Form.Label>
  <div>
    <Form.Check inline label="Yes" type="radio" name="relevantWorkExperienceDetailsCheck" value="available" required/>
    <Form.Check inline label="No" type="radio" name="relevantWorkExperienceDetailsCheck" value="notAvailable" />
  </div>
</Form.Group>

<h4>FINANCIAL SUPPORT</h4>

<Form.Group>
  <Form.Label>How are you planning to support your studies?</Form.Label>
  <Form.Control as="select" name="studyFundMethod" required>
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
  <Form.Control type="text" name="parentGuardianName" required/>
</Form.Group>

<Form.Group>
  <Form.Label>Parent/Guardian's Mobile Number:</Form.Label>
  <Form.Control type="text" name="parentGuardianMobileNumber" required/>
</Form.Group>

<Form.Group>
  <Form.Label>Parent/Guardian's Email:</Form.Label>
  <Form.Control type="text" name="parentGuardianEmail" required/>
</Form.Group>

<h4>ADDITIONAL QUESTIONS</h4>

<Form.Group>
  <Form.Label>Please explain how your course selection is related to your previous education and/or professional background. How will it satisfy your career aspirations?</Form.Label>
  <Form.Control as="textarea" name="careerAspirationNote" rows={4} maxLength={1000} required/>
</Form.Group>

<Form.Group>
  <Form.Label>Why have you chosen this University among other providers in Australia and overseas? Why have you chosen to study in this State of Australia?</Form.Label>
  <Form.Control as="textarea" name="universityChoiceNote" rows={4} maxLength={1000} required/>
</Form.Group>

<Form.Group>
  <Form.Label>Please indicate where you first heard about this University:</Form.Label>
  <Form.Control as="select" name="directedMedia" required>
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