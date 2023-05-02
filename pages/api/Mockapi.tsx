import { NextApiRequest, NextApiResponse } from "next";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  avatar: string;
  username: string;
  role: string;
  email: string;
};

const Mockapi = (req: NextApiRequest, res: NextApiResponse) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://6450be73e1f6f1bb229de7cf.mockapi.io/persons"
      );
      const newUsers = await response.json();
      setUsers(newUsers);
    };
    fetchUsers();
  }, []);

  if (req.method === "GET") {
    res.status(200).json(users);
  } else if (req.method === "POST") {
    const newUser: User = {
      id: users.length + 1,
      name: req.body.name,
      email: req.body.email,
      avatar: req.body.avatar,
      username: req.body.username,
      role: req.body.role,
    };
    setUsers([...users, newUser]);

    res.status(201).json(newUser);
  } else {
    res.status(400).json({ message: "Invalid request method" });
  }
};

export default Mockapi;
