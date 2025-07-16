import React, { useState, useEffect } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import Reports from "./Reports";
import { FaUserPlus, FaUserTimes, FaUsers } from "react-icons/fa";

function App() {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [showForm, setShowForm] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showReports, setShowReports] = useState(false);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (name, age, gender) => {
    const newUser = { name, age, gender, id: Date.now() };
    setUsers([...users, newUser]);
    setShowTable(true);
    setShowForm(false);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (id, updatedName, updatedAge, updatedGender) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              name: updatedName,
              age: updatedAge,
              gender: updatedGender,
            }
          : user
      )
    );
  };

  const handleShowUsers = () => {
    if (users.length === 0) {
      alert("⚠️ No users found!");
    } else {
      setShowTable(true);
    }
  };

  const handleToggleReports = () => {
    if (users.length === 0) {
      alert("📉 No records found to generate reports.");
    } else {
      setShowReports((prev) => !prev);
    }
  };

  return (
    <div className="app-container">
      <div className="app">
        {!showForm ? (
          <section className="hero">
            <h1 className="hero-text">
              <span className="gradient-text">Hey I'm Usman</span>{" "}
              <span className="emoji">👋</span>
            </h1>

            <p>Add and manage your user data easily.</p>
            <div className="hero-buttons">
              <button onClick={() => setShowForm(true)}>
                <FaUserPlus className="icon-left" />
                Add User
              </button>

              {showTable ? (
                <button onClick={() => setShowTable(false)}>
                  <FaUserTimes className="icon-left" />
                  Hide Users
                </button>
              ) : (
                <button onClick={handleShowUsers}>
                  <FaUsers className="icon-left" />
                  Show Users
                </button>
              )}

              <button onClick={handleToggleReports}>
                📊 {showReports ? "Hide Reports" : "Generate Reports"}
              </button>
            </div>
          </section>
        ) : (
          <UserForm addUser={addUser} onCancel={() => setShowForm(false)} />
        )}

        {showTable && users.length > 0 && (
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        )}

        {showReports && users.length > 0 && <Reports users={users} />}
      </div>
    </div>
  );
}

export default App;
