import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-info">
      <div className="form_container p-5 rounded bg-white">
        <form>

          <h3 className="text-center">Sign In</h3>
          
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
            />
            <label htmlFor="check" className="custom-input-label ms-2">
              Remember me
            </label>
            
          </div>
          <div className="d-grid">
            <button className="btn btn-primary">Login</button>
          </div>

          <p className="text-end mt-2">
            Forgot <Link to="/forgotpage">Password</Link> <Link to='/signup' className="ms-2">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
