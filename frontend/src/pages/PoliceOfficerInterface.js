import React, { useState } from "react";
import Select from "react-select";
import "./policeOfficerInterface.css"; // Import the CSS file
import Chat from "./Chat";

const offenses = [
  { label: "Identification plates", value: 1000 },
  { label: " Not carrying R.L", value: 1000 },
  { label: "Contravening R.L ", value: 1000 },
  {
    label:
      "Driving Emergency Service Vehicles & Public Service Vehicles without D.L",
    value: 1000,
  },
  { label: "Driving Special Purpose Vehicles without a license", value: 1000 },
  {
    label:
      "Driving a vehicle loaded with chemicals/hazardous waste without a license",
    value: 1000,
  },
  {
    label: "Not having a license to drive a specific class of vehicles",
    value: 1000,
  },
  { label: "Not carrying D.L", value: 1000 },
  { label: "Not having an instructors license", value: 2000 },
  { label: "Contravening Speed limits", value: 3000 },
  { label: "Disobeying road rules", value: 2000 },
  { label: "Activities obstructing control of the motor vehicle", value: 1000 },
  { label: "Signals by Driver", value: 1000 },
  { label: "Reversing for long distance", value: 1000 },
  { label: "Sound or light warnings", value: 1000 },
  { label: "Excessive emission of smoke, etc.", value: 1000 },
  { label: "Riding on turning boards", value: 500 },
  { label: "No of persons in front seats", value: 1000 },
  { label: " Driving without seat belt", value: 1000 },
  { label: "Not wearing protective helmets", value: 1000 },
  { label: "Distribution of advertisement", value: 1000 },
  { label: "Excessive use of noise", value: 1000 },
  {
    label:
      "Disobeying directions & Signals of police officers/ Traffic wardens",
    value: 2000,
  },
  { label: "Non- compliance with traffic signals", value: 1000 },
  {
    label: "Failure to take precautions when discharging fuel into tank",
    value: 1000,
  },
  { label: "Halting or Parking", value: 1000 },
  { label: "Non- use of precautions when parking", value: 2000 },
  {
    label: "Excessive carriage of persons in motor car or private coach",
    value: 500,
  },
  { label: "Carriage of passengers in excess in omnibuses", value: 500 },
  {
    label: "Carriage on lorry or Motor Tricycle van of goods in excess",
    value: 500,
  },
  { label: "No of persons carried in a lorry", value: 500 },
  { label: "Violation of regulations on motor vehicles", value: 1000 },
  {
    label:
      "Failure to carry the emission certificate or the fitness Certificate",
    value: 500,
  },

  // Add more offenses as needed
];

const PoliceOfficerInterface = () => {
  const [licenseNumber, setLicenseNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedOffenses, setSelectedOffenses] = useState([]);
  const [fine, setFine] = useState(0);
  const [linkSent, setLinkSent] = useState(false);
  const calculateFine = () => {
    let totalFine = 0;
    selectedOffenses.forEach((offense) => {
      totalFine += offense.value;
    });
    setFine(totalFine);
  };

  const handleSendLink = () => {
    setLinkSent(true);
  };
  const handleChange = (selectedOptions) => {
    setSelectedOffenses(selectedOptions);
  };

  return (
    <div className="policeOfficerInterface">
      <button className="button1">view History</button>
      <label>
        Driver License Number:
        <input
          type="text"
          value={licenseNumber}
          onChange={(e) => setLicenseNumber(e.target.value)}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      <label>
        Offenses:
        <Select
          options={offenses}
          isMulti
          value={selectedOffenses}
          onChange={handleChange}
        />
      </label>
      <button onClick={calculateFine}>Calculate Fine</button>
      <p style={{ textAlign: "center", color: "red" }}>Total Fine: {fine}</p>

      <label for="myDate">Select Date:</label>
      <input type="date" id="myDate" name="myDate"></input>
      <button onClick={handleSendLink}>Send Link</button>
      {linkSent && <p className="successMessage">Link Sent!</p>}
      <br></br>
      
      <Chat></Chat>
    </div>
  );
};

export default PoliceOfficerInterface;
