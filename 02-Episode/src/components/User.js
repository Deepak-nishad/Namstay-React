import React from "react";

const User = (props) => {
  const { name, email, address } = props;
  return (
    <div className="user-card">
      {/* <h1>Deepak</h1>
      <h1>deepakkumar62559@gmail.com</h1>
      <h1>chander lok colony jind</h1> */}

      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{address}</h1>
    </div>
  );
};

export default User;
