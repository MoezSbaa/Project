import React, { useState } from 'react';

const RegisterCoach = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [speciality,setSpeciality] = useState('');
  const [address,setAddress] = useState('');
  const [phone,setPhone] = useState('');
  const handleSubmit = async (event:any) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      if (response.ok) {
        console.log('User registered successfully');
      } else {
        console.log('Failed to register user');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <input type="radio" id="gender" value="male" onChange={(e) => setAddress(e.target.value)} />
          <input type="radio" id="gender" value="female" onChange={(e) => setAddress(e.target.value)} />

        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="radio" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label htmlFor="speciality">Speciality</label>
          <input type="text" id="speciality" value={speciality} onChange={(e) => setSpeciality(e.target.value)} />
        </div>
        <div>
          <label htmlFor="cv">CV</label>
          <input type="file" id="cv" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterCoach;
