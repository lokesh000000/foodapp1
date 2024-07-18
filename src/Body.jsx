import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation and submission logic here
    setSubmitted(true);
  };

  return (
    <div className='inputs'>
      <p  className='para'>Join the Waitlist</p>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
            <div>
            <input type="text" required name="name" placeholder='name' value={formData.name} onChange={handleChange} />
          <br />  
            <input type='text'  required name="email" placeholder='phone number' value={formData.email} onChange={handleChange} />
          <br />
          <input type='text'  required name="email" placeholder='city' />
          </div>
          <button className='butto' type="submit">Join the Waitlist</button>
        </form>
      ) : (
        <p className='para'>Thank you for joining the waitlist!</p>
      )}
    </div>
  );
}

export default App;
