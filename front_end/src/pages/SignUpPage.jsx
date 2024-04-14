import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../utilities';
import { useOutletContext } from 'react-router-dom';

function SignUpForm() {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const { setUser } = useOutletContext();

  const signupUser = async(e) => {
    e.preventDefault();
    const response = await api.post("users/signup/", { first_name, last_name, email, password, phone_number });
    if (response.status === 201) {
      alert("User created successfully");
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      api.defaults.headers.common['Authorization'] = `Token ${token}`;
      // set user info for the app
      setUser({ email, user })
    }
  };
  


//   const handleSignupForm = async(event) => {
//     event.preventDefault();

//     axios.post('http://127.0.0.1:8000/api/v1/users/signup/', { first_name, last_name,  email, password, phone_number})
//       .then(response => {
//         // Handle response
//         // Redirect user to another page, or handle errors
//       })
//       .catch(error => {
//         // Handle error
//       });
//   };



  return (
    <>
    <h1>Sign Up Page</h1>
    <form onSubmit={signupUser}>
      <label>
        First Name:
        <input type="text" value={first_name} onChange={e => setFirstName(e.target.value)} />
      </label>
      <label>
        Last Name:
        <input type="text" value={last_name} onChange={e => setLastName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <label>
        Phone Number:
        <input type="text" value={phone_number} onChange={e => setPhoneNumber(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </>
  );
}

export default SignUpForm;