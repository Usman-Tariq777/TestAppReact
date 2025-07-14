// UserForm.jsx
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

function UserForm({ addUser, onCancel }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && age) {
      addUser(name.trim(), age);
      setName("");
      setAge("");
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      {/* Back arrow */}
      <button type="button" onClick={onCancel} className="back-button">
        <FaArrowLeft style={{ marginRight: "8px" }} />
        Back
      </button>

      <div className="form-control">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </div>

      <div className="form-control">
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter age"
        />
      </div>

      <button className="form-button" type="submit">
        Add User
      </button>
    </form>
  );
}

export default UserForm;
