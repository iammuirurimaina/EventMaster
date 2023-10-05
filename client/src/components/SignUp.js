import React, {  useState } from "react";
import "./Signup.css"


function SignUp ({ signUp }) {
  const [customers, setCustomers] = useState({
    username: "",
    email: "",
    password: "",
    birthdate: ""
  });

  
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify({ customers }),
    })
    .then((r) => r.json())
    .then((user) => signUp(user) )
  }

  return (
    <div class = "background">
      <h2 id = "title">Sign Up</h2>

      <br></br>
      <form onSubmit={handleSubmit}>
        <div class = "inputs">
          <label htmlFor="username">Username: </label>
          <input
            type="username"
            id="username"
            name="username"
            value={customers.username}
            onChange={(e) =>
              setCustomers({ ...customers, username: e.target.value })
            }
            />
            </div>

            <br></br>
      
        <div class="inputs">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={customers.email}
            onChange={(e) => setCustomers({ ...customers, email: e.target.value })}
          />
        </div>

        <br></br>
        <div class="inputs">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={customers.password}
            onChange={(e) => setCustomers({ ...customers, password: e.target.value })}
          />
        </div>

        <br></br>

        <div class="inputs">
          <label htmlFor="birthdate">Date of Birth: </label>
          <input
            type="date"
              id="birthdate"
              name="birthdate"
              value={customers.birthdate}
            onChange={(e) => setCustomers({ ...customers, birthdate: e.target.value })}
          />
        </div>

        <br></br>

        <div>
          <button type="submit" value="submit" class = "button">Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;


