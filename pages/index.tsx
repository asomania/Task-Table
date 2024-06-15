import React from "react";
import Navbar from "./layouts/Navbar";
type User = {
  id: number;
  name: string;
  avatar: string;
  username: string;
  role: string;
  email: string;
};
const index = ({ data }: { data: User }) => {
  return (
    <>
      <Navbar data={data} />
    </>
  );
};

export default index;
export async function getServerSideProps() {
  const response = await fetch(
    "https://666d6cb47a3738f7cacc567a.mockapi.io/persons"
  );
  const data = await response.json();
  console.log("a",data);
  return {
    props: {
      data,
    },
  };
}
