import React, {  useState } from "react";



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
    <div>
      <h2>Sign Up</h2>

      <br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="username"
            id="username"
            name="username"
            value={customers}
            onChange={(e) =>
              setCustomers(e.target.value )
            }
            />
            </div>

            <br></br>
      
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={customers}
            onChange={(e) => setCustomers( e.target.value)}
          />
        </div>

        <br></br>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={customers}
            onChange={(e) => setCustomers(e.target.value)}
          />
        </div>

        <br></br>

        <div>
          <label htmlFor="birthdate">Date of Birth: </label>
          <input
            type="date"
              id="birthdate"
              name="birthdate"
              value={customers}
            onChange={(e) => setCustomers(e.target.value)}
          />
        </div>

        <br></br>

        <div>
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;


// import React from "react";
// import {  Form, Field, ErrorMessage } from ";
// import * as Yup from "yup";
// import { FaGoogle, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';





// function LoginForm() {
//   const initialValues = {
//     username: "",
//     email: "",
//     password: "",
//   };

//   const validationSchema = Yup.object().shape({
//     username: Yup.string().required("Username is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     password: Yup.string().required("Password is required"),
//   });

//   const handleSubmit = (values, { setSubmitting }) => {
//     setTimeout(() => {
//       console.log("Logging in with:", values);
    
//     }, 1000);
//     setSubmitting(false);
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-header">Log in</div>
//             <div className="card-body">
//               <//                 initialValues={initialValues}
//                 validationSchema={validationSchema}
//                 onSubmit={handleSubmit}
//               >
//                 {({ isSubmitting }) => (
//                   <Form>
//                     <div className="mb-3">
//                       <label htmlFor="username" className="form-label">
//                         Username
//                       </label>
//                       <Field
//                         type="text"
//                         name="username"
//                         className="form-control"
//                         placeholder="Username"
//                       />
//                       <ErrorMessage
//                         name="username"
//                         component="div"
//                         className="text-danger"
//                       />
//                     </div>

//                     <div className="mb-3">
//                       <label htmlFor="email" className="form-label">
//                         Email
//                       </label>
//                       <Field
//                         type="email"
//                         name="email"
//                         className="form-control"
//                         placeholder="Enter your email"
//                       />
//                       <ErrorMessage
//                         name="email"
//                         component="div"
//                         className="text-danger"
//                       />
//                     </div>

//                     <div className="mb-3">
//                       <label htmlFor="password" className="form-label">
//                         Password
//                       </label>
//                       <Field
//                         type="password"
//                         name="password"
//                         className="form-control"
//                         placeholder="Enter your password"
//                       />
//                       <ErrorMessage
//                         name="password"
//                         component="div"
//                         className="text-danger"
//                       />
//                     </div>

//                     <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
//                       Login
//                     </button>
//                   </Form>
//                 )}
//               </
//               <div className="mt-3">
//                 <a href="/forgot-password">Forgot Password?</a>
//               </div>
//               <div className="mt-3">
//                       {/* Social media login buttons with Font Awesome icons */}
//                       <button className="btn btn-danger me-2">
//                       <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjzqdzZ8tuBAxX8TkEAHexxDcIQPAgJ"target="blank"> <FaGoogle /> </a>
//                       </button>

//                       <button className="btn btn-primary me-2">
//                         <FaFacebook /> 
//                       </button>
//                       <button className="btn btn-info me-2">
//                         <a href="https://github.com/iammuirurimaina/Phase4-project"target="blank"> <FaLinkedin/> </a>
                        
//                       </button>
//                       <button className="btn btn-secondary me-2">
//                       <a href="https://www.instagram.com/homie__wayne/" target="blank"><FaInstagram /></a>
                      
//                       </button>
//                     </div>
                  
//               {/* ... (unchanged "Forgot Password?" link) */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;