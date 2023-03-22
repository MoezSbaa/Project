import React from 'react';

function UserList(props:any) {
  const { users } = props;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <ul>
        {users?.map((user:any) => (
          <li key={user.id} className="mb-2">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="w-10 h-10 rounded-full" src={user.avatar} alt={user.name} />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 font-medium">{user.name}</p>
                <p className="text-gray-500 text-sm">{user.email}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
