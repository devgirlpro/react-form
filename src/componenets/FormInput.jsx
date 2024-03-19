import React, { useState } from 'react';

const FormInput = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    alert(`username => ${username}
            email => ${email}
            dateOfBirth => ${dateOfBirth}
            password => ${password}
            confirmPassword => ${confirmPassword}
        `)

        setUsername('') 
        setEmail('')
        setDateOfBirth('')
        setPassword('')
        setConfirmPassword('')
  }

  return (
    <form className='formBody' onSubmit={submitHandler}>
      <div className="formInput">
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <br />

      <div className="formInput">
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br />

      <div className="formInput">
        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <br />
        <input 
            type="date" 
            id="dateOfBirth" 
            name="dateOfBirth"
            value={dateOfBirth} 
            onChange={(e) => setDateOfBirth(e.target.value)}
        />
      </div>
      <br />

      <div className="formInput">
        <label htmlFor="pessword">Password: </label>
        <br />
        <input 
            type="password" 
            id="password" 
            placeholder='password'
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />

      <div className="formInput">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <br />
        <input 
            type="password" 
            id='confirmPassword'
            placeholder='confirm passwordd'
            name='confirmPassword'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default FormInput;
