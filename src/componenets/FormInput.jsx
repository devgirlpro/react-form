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
        `);

    setUsername('');
    setEmail('');
    setDateOfBirth('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="formInput">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            pattern="^[a-zA-Z0-9_]+$"
          />
          <span>
            username should be 3-16 charachters and should not lnclude any
            special charachter
          </span>
        </div>

        <div className="formInput">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}"
          />
          <span>it should be a valid email address</span>
        </div>

        <div className="formInput">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>

        <div className="formInput">
          <label htmlFor="pessword">Password: </label>
          <input
            type="password"
            id="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\da-zA-Z]).{8,}$"
          />
          <span>
            password should be 8-20 characters and include at least 1 letter, 1
            number and 1 special character
          </span>
        </div>

        <div className="formInput">
          <label htmlFor="confirmPassword">Confirm Password:</label>

          <input
            type="password"
            id="confirmPassword"
            placeholder="confirm passwordd"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <span>password do not match</span>
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default FormInput;
