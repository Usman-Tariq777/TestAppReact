import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

function UserForm({ addUser, onCancel }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    setNameError("");
    setAgeError("");

    if (!name.trim()) {
      setNameError("Please enter a name.");
      isValid = false;
    }

    if (age === "" || isNaN(age) || parseInt(age) < 0) {
      setAgeError("Please enter a valid age.");
      isValid = false;
    }

    if (isValid) {
      addUser(name.trim(), age);
      setName("");
      setAge("");
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <button type="button" onClick={onCancel} className="back-button">
        <FaArrowLeft className="icon-left" />
        Back
      </button>

      <div className="form-control">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={nameError || "Enter name"}
        />
        {nameError && <p className="error-text">{nameError}</p>}
      </div>

      <div className="form-control">
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder={ageError || "Enter age"}
          min="0"
        />
        {ageError && <p className="error-text">{ageError}</p>}
      </div>

      <button className="form-button" type="submit">
        Add User
      </button>
    </form>
  );
}

export default UserForm;
