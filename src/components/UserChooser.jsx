import React from 'react';

const UserChooser = props => {
  const users = ['jessjelly', 'tickle122', 'happyamy2016', 'cooljmessy', 'weegembump'];

  function handleChange(event) {
    const user = event.target.value;
    props.handleUserChoice(user);
  }
  return (
    <div>
      <div className="userLogin">
        <form onChange={handleChange}>
          <select>
            {users.map(user => {
              return (
                <option value={user} key={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </form>
      </div>
    </div>
  );
};

export default UserChooser;