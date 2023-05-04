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
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    setUsers(data);
  }, []);
  return (
    <>
      <Navbar data={data} />
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
