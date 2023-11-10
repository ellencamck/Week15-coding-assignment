import React, { useState, useEffect } from 'react';

const EmailForm = ({ onSubmit, onCancel, selectedEmail }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (selectedEmail) {
      setName(selectedEmail.name);
      setEmail(selectedEmail.email);
    }
  }, [selectedEmail]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });
  };

  const handleCancel = () => {
    setName('');  // Reset the name field
    setEmail(''); // Reset the email field
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

      <button type="submit">Save</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default EmailForm;