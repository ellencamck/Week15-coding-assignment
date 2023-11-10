import React, { useState, useEffect } from 'react';
import EmailList from './EmailList';
import EmailForm from './EmailForm';

const apiUrl = 'https://65307f8a6c756603295eb0f7.mockapi.io/api/week14/users';

const App = () => {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);

  useEffect(() => {
    // Fetch data from API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setEmails(data));
  }, []);

  const handleAdd = (newEmail) => {
    // Implement Add operation
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEmail),
    })
      .then(response => response.json())
      .then(data => setEmails([...emails, data]));

    setSelectedEmail(null);
  };

  const handleEdit = (email) => {
    setSelectedEmail(email);
  };

  const handleUpdate = (updatedEmail) => {
     // Implement Update operation
     fetch(`${apiUrl}/${selectedEmail.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEmail),
    })
      .then(response => response.json())
      .then(() => {
        const updatedEmails = emails.map(e => (e.id === selectedEmail.id ? updatedEmail : e));
        setEmails(updatedEmails);
        setSelectedEmail(null);
      });
  };

  const handleDelete = (id) => {
    // Implement Delete operation
    fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedEmails = emails.filter(e => e.id !== id);
        setEmails(updatedEmails);
      });
  };

  const handleCancel = () => {
    setSelectedEmail(null);
  };

  return (
    <div className='form'>
      <EmailList emails={emails} onDelete={handleDelete} onEdit={handleEdit} />
      <EmailForm onSubmit={selectedEmail ? handleUpdate : handleAdd} onCancel={handleCancel} selectedEmail={selectedEmail} />
    </div>
  );
};

export default App;
