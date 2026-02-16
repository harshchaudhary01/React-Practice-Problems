import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>
          {user.name} {user.price && `- ₹${user.price}`}
        </p>
      ))}
    </div>
  );
};

export default UserList;
