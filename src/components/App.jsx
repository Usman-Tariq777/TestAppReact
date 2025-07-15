import React, { useState, useEffect } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import { FaUserPlus, FaUserMinus, FaUsers, FaUserTimes } from "react-icons/fa";

function App() {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [showForm, setShowForm] = useState(false);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (name, age) => {
    const newUser = { name, age, id: Date.now() };
    setUsers([...users, newUser]);
    setShowTable(true);
    setShowForm(false);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (id, updatedName, updatedAge) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, name: updatedName, age: updatedAge } : user
      )
    );
  };

  return (
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
              <button onClick={() => setShowTable(true)}>
                <FaUsers className="icon-left" />
                Show Users
              </button>
            )}
          </div>
        </section>
      ) : (
        <UserForm addUser={addUser} onCancel={() => setShowForm(false)} />
      )}

      {showTable && (
        <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
      )}
    </div>
  );
}

export default App;
