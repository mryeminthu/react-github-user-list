import React, { useState, useEffect } from 'react';
import './Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const getUsers = await fetch('https://api.github.com/users');
        if (!getUsers.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await getUsers.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <div className='user-list'>Loading...</div>;
  }

  if (error) {
    return <div className='user-list'>Error: {error}</div>;
  }

  return (
    <div className='user-list'>
      <h1>GitHub User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <img src={user.avatar_url} alt={user.login} />
            <div>
              <p>{user.login}</p>
              <a href={user.html_url}>
                <button>GitHub Repository</button>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
