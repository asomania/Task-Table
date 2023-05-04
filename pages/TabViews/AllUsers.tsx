import React from "react";
import { useState, useEffect } from "react";
type User = {
  id: number;
  name: string;
  avatar: string;
  username: string;
  role: string;
  email: string;
};
const index = ({ data }: { data: any }) => {
  return (
    <>
      {data.map((user: any) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
        </div>
      ))}
    </>
  );
};

export default index;
