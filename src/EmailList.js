import React from 'react';
import EmailItem from './EmailItem';

const EmailList = ({ emails, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Email List</h2>
      <ul>
        {emails.map(email => (
          <EmailItem key={email.id} email={email} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </ul>
    </div>
  );
};

export default EmailList;