import "./register.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false); // State for success message
  const usernameRef = useRef(); // Ref for username
  const emailRef = useRef(); // Ref for email
  const passwordRef = useRef(); // Ref for password
  const mobileRef = useRef();
  const [error, setError] = useState(""); // State for error message

  const handleClick = (event) => {
    event.preventDefault(); // Prevent form submission refresh
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const mobile = mobileRef.current.value;

    if (!username || !email || !password || !mobile) {
      setError("⚠️ Fill Proper");
      return;
    }
    setError("");

    // Storing values in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("mobile", mobile);

    console.log("Stored Values:");
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Mobile:", mobile);

    // Show success message
    setIsRegistered(true);

    // Redirect to login page after 2 seconds
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <section className=" d-flex justify-content-center align-items-center ">
      <div className="container mt-5">
        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-md-6 form-section text-center mt-5 mb-5 ">
            <h2 className="fw-bold mb-2">Create an Account</h2>
            <p>
              Already have an account?
              <Link to={"/login"} className="text-success ms-1">
                Login
              </Link>
            </p>
            {error && <div className="alert alert-danger">{error}</div>}
            <form className="mx-auto">
              <table className="table-borderless medium-width mx-auto">
                <tbody>
                  {/* Username */}
                  <tr>
                    <td>
                      <input
                        ref={usernameRef}
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        required
                      />
                    </td>
                  </tr>
                  {/* Email */}
                  <tr>
                    <td>
                      <input
                        ref={emailRef}
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                    </td>
                  </tr>
                  {/* Password */}
                  <tr>
                    <td>
                      <input
                        ref={passwordRef}
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        required
                      />
                    </td>
                  </tr>
                  {/* Confirm Password */}
                  <tr>
                    <td>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        required
                      />
                    </td>
                  </tr>
                  {/* Mobile Number */}
                  <tr>
                    <td className="d-flex align-items-center">
                      <input
                        ref={mobileRef}
                        type="number"
                        minLength={10}
                        maxLength={10}
                        className="form-control me-2"
                        placeholder="Mobile Number"
                        required
                      />
                    </td>
                  </tr>
                  {/* Role Selection */}
                  <tr>
                    <td>
                      <div className="text-start">
                        <input type="radio" id="customer" name="role" />
                        <label htmlFor="customer" className="ms-2">
                          I am a customer
                        </label>
                      </div>
                      <div className="text-start mt-1">
                        <input
                          type="radio"
                          id="vendor"
                          name="role"
                          defaultChecked
                        />
                        <label htmlFor="vendor" className="ms-2 text-success">
                          I am a vendor
                        </label>
                      </div>
                    </td>
                  </tr>
                  {/* Terms Checkbox */}
                  <tr>
                    <td>
                      <div className="form-check text-start">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="terms"
                          required
                        />
                        <label className="form-check-label" htmlFor="terms">
                          I agree to terms & Policy.{" "}
                          <a href="#" className="text-success">
                            Learn more
                          </a>
                        </label>
                      </div>
                    </td>
                  </tr>
                  {/* Submit Button */}
                  <tr>
                    <td>
                      <button
                        onClick={handleClick}
                        type="submit"
                        className="btn btn-success w-100"
                      >
                        Submit & Register
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
            {isRegistered && (
              <div className="alert alert-success mt-4">
                Registration successful! 🎉 Redirecting to login page...
              </div>
            )}
          </div>
          {/* Social Buttons */}
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center mt-4 social-section">
            <button className="btn btn-primary mb-3 medium-width">
              <FacebookIcon /> Continue with Facebook
            </button>
            <button className="btn btn-light border mb-3 medium-width">
              <FontAwesomeIcon icon={faGoogle} /> Continue with Google
            </button>
            <button className="btn btn-dark medium-width">
              <AppleIcon /> Continue with Apple
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
