import React, { useEffect, useState } from "react";
import useCrud from "./hooks/useCrud";
import FormUsers from "./components/FormUsers";
import UserCard from "./components/UserCard";
import './components/styles/UserCard.css'

const App = () => {
  const [infoUpdate, setInfoUpdate] = useState();
  const [isDisable, setIsDisable] = useState(true)

  const url = "https://users-crud.academlo.tech";
  const [users, getUsers, createUsers, deleteUser, updateUser] = useCrud(url);

  useEffect(() => {
    getUsers("/users");
  }, []);

  console.log(users);

  const handleNewUser = () =>{
    setIsDisable(false)
  }
  return (
    <div>
      <h1>Users</h1>
      <button onClick={handleNewUser} className="form__btn">Ceate new User</button>
      <FormUsers
        createUsers={createUsers}
        infoUpdate={infoUpdate}
        updateUser={updateUser}
        setInfoUpdate={setInfoUpdate}
        isDisable={isDisable}
        setIsDisable={setIsDisable}
      />
      <div className="container__users">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            updateUser={updateUser}
            setInfoUpdate={setInfoUpdate}
            setIsDisable={setIsDisable}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
