import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../utilities';
import { useOutletContext } from 'react-router-dom';
import { userLogin } from '../utilities'; // Import the userLogin function
import { useNavigate } from 'react-router-dom'; // Import the navigate function

function SignUpForm() {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const { setUser } = useOutletContext();
  const navigate = useNavigate();

  const signupUser = async(e) => {
    e.preventDefault();
    const response = await api.post("users/signup/", { first_name, last_name, email, password, phone_number });
    if (response.status === 201) {
      alert("User created successfully");
      const { user } = await userLogin(email, password);
        
        
      if (user) {
        console.log(user);
        setUser(user);
        localStorage.setItem("user", user);
        //comment the line below to get it kind of working
          // localStorage.setItem("user", JSON.stringify(user));
          alert("Login successful");
          navigate('/homepage');
      }
      
      
      // const { token, email } = response.data;
      // localStorage.setItem("token", token);
      // api.defaults.headers.common['Authorization'] = `Token ${token}`;
      // console.log(email);
      // setUser({ email })
    }
  };

  // const signupUser = async (email, password, phone_number, first_name, last_name) => {
  //   try {
  //     const signupResponse = await axios.post('http://127.0.0.1:8000/api/v1/users/signup/', {
  //       email: email,
  //       password: password,
  //       phone_number: phone_number,
  //       first_name: first_name,
  //       last_name: last_name,
  //     });
  
     

  //       if (signupResponse.status === 201) {
  //       const { user } = await userLogin(email, password);
  //       if (user) {
  //         console.log(user);
  //         setUser(user);
  //         localStorage.setItem("user", JSON.stringify(user));
  //         alert("Signup and login successful");
  //         navigate('/homepage'); // Use the navigate function to navigate to '/homepage'
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Error signing up user:', error);
  //   }
  // };
  


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