import React from 'react';

const EmailItem = ({ email, onDelete, onEdit }) => {
  return (
    <li>
      {email.name} - {email.email}
      <button onClick={() => onEdit(email)}>Edit</button>
      <button onClick={() => onDelete(email.id)}>Delete</button>
    </li>
  );
};

export default EmailItem;