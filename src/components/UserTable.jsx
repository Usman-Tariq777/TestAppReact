// import React, { useState } from "react";

// function UserTable({ users, deleteUser, editUser }) {
//   const [editMode, setEditMode] = useState(null);
//   const [newName, setNewName] = useState("");
//   const [newAge, setNewAge] = useState("");

//   const startEdit = (user) => {
//     setEditMode(user.id);
//     setNewName(user.name);
//     setNewAge(user.age);
//   };

//   const submitEdit = (id) => {
//     editUser(id, newName, newAge);
//     setEditMode(null);
//     setNewName("");
//     setNewAge("");
//   };

//   return (
//     <div className="data">
//       <h2>User Table</h2>

//       {users.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Age</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id}>
//                 <td>
//                   {editMode === user.id ? (
//                     <input
//                       className="edit-input"
//                       type="text"
//                       value={newName}
//                       onChange={(e) => setNewName(e.target.value)}
//                     />
//                   ) : (
//                     <span className="table-text">{user.name}</span>
//                   )}
//                 </td>
//                 <td>
//                   {editMode === user.id ? (
//                     <input
//                       className="edit-input"
//                       type="number"
//                       value={newAge}
//                       onChange={(e) => setNewAge(e.target.value)}
//                     />
//                   ) : (
//                     <span className="table-text">{user.age}</span>
//                   )}
//                 </td>
//                 <td>
//                   {editMode === user.id ? (
//                     <button onClick={() => submitEdit(user.id)}>Save</button>
//                   ) : (
//                     <div className="action-buttons">
//                       <button onClick={() => startEdit(user)}>Edit</button>
//                       <button onClick={() => deleteUser(user.id)}>
//                         Delete
//                       </button>
//                     </div>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p className="no-users">No users found.</p>
//       )}
//     </div>
//   );
// }

// export default UserTable;
import React, { useState } from "react";

function UserTable({ users, deleteUser, editUser }) {
  const [editMode, setEditMode] = useState(null);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newGender, setNewGender] = useState("");

  const startEdit = (user) => {
    setEditMode(user.id);
    setNewName(user.name);
    setNewAge(user.age);
    setNewGender(user.gender);
  };

  const submitEdit = (id) => {
    editUser(id, newName, newAge, newGender);
    setEditMode(null);
    setNewName("");
    setNewAge("");
    setNewGender("");
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
              <th>Gender</th>
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
                    <div className="edit-gender">
                      <label>
                        <input
                          type="radio"
                          value="Male"
                          checked={newGender === "Male"}
                          onChange={() => setNewGender("Male")}
                        />
                        Male
                      </label>
                      <label>
                        <input
                          type="radio"
                          value="Female"
                          checked={newGender === "Female"}
                          onChange={() => setNewGender("Female")}
                        />
                        Female
                      </label>
                    </div>
                  ) : (
                    <span className="table-text">{user.gender}</span>
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
        <p className="no-users">No users found.</p>
      )}
    </div>
  );
}

export default UserTable;
