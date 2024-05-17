import React, { useState, useEffect } from 'react';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
        const getUsers = await fetch('https://api.github.com/users');
        const data = await getUsers.json();
        setUsers(data);
        };

        fetchUsers();
    }, []);

  return (
    <div className='user-list'>
      <h1>GitHub Users</h1>
      <ul>
        {users.map((user)=>(
            <li key={user.id}>
                <img src={user.avatar_url} alt={user.login} />
                <div>
                    <p>{user.login}</p>
                    <a href={user.html_url} target='blank'>
                        <button>Visit GitHub</button>
                    </a>
                </div>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Users
