import React, { useState, useEffect } from 'react';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const fetchUsers = async () => {
           const getUsers = await fetch('https://api.github.com/users');
            const data = getUsers.json();
            setUsers(data);
        };
        fetchUsers();
    },[])

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default Users
