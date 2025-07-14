import React, { useState } from "react";

function UserTable({ users, deleteUser, editUser }) {
  const [editMode, setEditMode] = useState(null);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

  const startEdit = (user) => {
    setEditMode(user.id);
    setNewName(user.name);
    setNewAge(user.age);
  };

  const submitEdit = (id) => {
    editUser(id, newName, newAge);
    setEditMode(null);
    setNewName("");
    setNewAge("");
  };

  return (
    <div className="data">
      <h2>User Table</h2>

      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  {editMode === user.id ? (
                    <input
                      className="edit-input"
                      type="text"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                    />
                  ) : (
                    <span className="table-text">{user.name}</span>
                  )}
                </td>
                <td>
                  {editMode === user.id ? (
                    <input
                      className="edit-input"
                      type="number"
                      value={newAge}
                      onChange={(e) => setNewAge(e.target.value)}
                    />
                  ) : (
                    <span className="table-text">{user.age}</span>
                  )}
                </td>
                <td>
                  {editMode === user.id ? (
                    <button onClick={() => submitEdit(user.id)}>Save</button>
                  ) : (
                    <div className="action-buttons">
                      <button onClick={() => startEdit(user)}>Edit</button>
                      <button onClick={() => deleteUser(user.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: "center", color: "red" }}>No users found.</p>
      )}
    </div>
  );
}

export default UserTable;
