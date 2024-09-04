import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function Users() {
  const users = [
    { name: "John Doe", email: "johndoe@example.com", age: 28 },
    { name: "Jane Smith", email: "janesmith@example.com", age: 34 },
    { name: "Sam Johnson", email: "samjohnson@example.com", age: 45 },
  ];

  return (
    <div className="container mt-4">
      <h2>Users</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                <button className="btn btn-primary btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm ms-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
