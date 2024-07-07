import React, { useState } from "react";
import "./style.css";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/auth/adminlogin", values) // Added missing colon
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="loginpage flex h-[100vh] w-screen justify-center items-center">
      <div className="loginform h-[400px] w-[500px] rounded-[20px] p-[20px]">
        <h2 className="mb-[20px]">Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="my-[20px]">
            <label htmlFor="email">
              <strong>Email:</strong>
            </label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Enter your email"
              className="form-control rounded-0"
              onChange={(e) =>
                setValues({
                  ...values,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-[20px]">
            <label htmlFor="password">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              name="password"
              autoComplete="off"
              placeholder="Enter your password"
              className="form-control rounded-0"
              onChange={(e) =>
                setValues({
                  ...values,
                  password: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-[20px]">
            <label htmlFor="password" className="me-2">
              Agree to T&C
            </label>
            <input type="checkbox" name="tick" id="tick" />
          </div>
          <button
            type="submit"
            className="btn btn-success w-100 rounded-0 mt-[20px]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
