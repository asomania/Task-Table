import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./layouts/Navbar";
type User = {
  id: number;
  name: string;
  avatar: string;
  username: string;
  role: string;
  email: string;
};
const index = ({ data }: { data: any }) => {
  console.log(data);
  const [users, setUsers] = useState<User[]>([]);
  const fetchUsers = async () => {
    const response = await fetch("/api/Mockapi");
    const newUsers = await response.json();
    setUsers(newUsers);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <Navbar />
      {
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <h1>{user.email}</h1>
              <h1>{user.role}</h1>
            </div>
          ))}
        </div>
      }
    </>
  );
};

export default index;
export async function getServerSideProps() {
  const response = await fetch(
    "https://6450be73e1f6f1bb229de7cf.mockapi.io/persons"
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
