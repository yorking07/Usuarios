import React from "react";
import './styles/UserCard.css'

const UserCard = ({ user, deleteUser, setInfoUpdate, setIsDisable }) => {
  const handleDelete = () => {
    deleteUser("/users", user.id);
  };
  const handleEdit = () => {
    setInfoUpdate(user);
    setIsDisable(false)
  };

  return (
    <article className="contenedor__users">
      <h3 className="user__names">
        {user.first_name} {user.last_name}
      </h3>
      <ul className="users__info">
        <li className="users__email">
          <span className="users__email__label">Email : </span>
          <span className="users__email__value">{user.email}</span>
        </li>
        <li className="user__bir">
          <span className="users__birthday">Birthday : </span>
          <span>{user.birthday}</span>
        </li>
      </ul>
      <span className="botones">
      <button onClick={handleDelete}>
        <i className="bx bx-trash"></i>
      </button>
      <button onClick={handleEdit}>
        <i className="bx bx-edit-alt"></i>
      </button>
      </span>
    </article>
  );
};

export default UserCard;
