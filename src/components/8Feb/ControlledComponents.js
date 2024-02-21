import React, { useState } from "react";

function ControlledComponent() {
  const [firstname, setFirstname] = useState(" ");
  const [lastname, setLastname] = useState(" ");
  const [age, setAge] = useState(" ");
  const [gender, setGender] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", {
      firstname,
      lastname,
      age,
      gender,
      email,
      password,
    });
  };

  return (
    <div>
      <p>
        Create the controlled component using the functional component with
        state(08 Feb)
      </p>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" placeholder="First Name" value={firstname}  onChange={(e) => setFirstname(e.target.value)} required/>
        <br />
        <label>Last Name:</label>
        <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
        <br />
        <label>Age:</label>
        <input type="number" min="0" max={150} placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)} required/>
        <br />
        <label>Gender:</label>
        <input type="text" placeholder="Enter either M or F" value={gender} onChange={(e) => setGender(e.target.value)} required />
        <br />
        <label>Email:</label>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        <br />
        <label>Password:</label>
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        <br />
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default ControlledComponent;
