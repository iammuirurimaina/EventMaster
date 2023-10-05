import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaGoogle, FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import './Login.css';
import image from "./../Assets/loginimage.jpg";

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log("Logging in with:", values);
    }, 1000);
    setSubmitting(false);
  };

  return (
    <div id="login" style={{ backgroundImage: `url(${image})` }}>
      <div className="container mt-5">
    
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Log in</div>
            <div className="card-body">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                   
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <Field
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter your password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                      Login
                    </button>
                  </Form>
                )}
              </Formik>
              <div className="mt-3">
                <a href="/forgot-password">Forgot Password?</a>
              </div>
              <div className="mt-3">
                      {/* Social media login buttons with Font Awesome icons */}
                      <button className="btn btn-danger me-2">
                      <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjzqdzZ8tuBAxX8TkEAHexxDcIQPAgJ"target="blank"> <FaGoogle /> </a>
                      </button>

                      <button className="btn btn-primary me-2">
                        <FaFacebook /> 
                      </button>
                      <button className="btn btn-info me-2">
                        <a href="https://github.com/iammuirurimaina/Phase4-project"target="blank"> <FaGithub/> </a>
                        
                      </button>
                      <button className="btn btn-secondary me-2">
                      <a href="https://www.instagram.com/homie__wayne/" target="blank"><FaInstagram /></a>
                      
                      </button>
                    </div>
                  
              {/* ... (unchanged "Forgot Password?" link) */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default LoginForm;