import Navbar from "../../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../App";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./SignUp.sass";

const proffessorSchema = z.object({
  fName: z.string().min(2, "First Name should be at least 2 characters long"),
  lName: z.string().min(2, "Last Name should be at least 2 characters long"),
  username: z.string().min(2, "Username should be at least 2 characters long"),
  password: z
    .string()
    .min(4, "Password should be atleast 4 characters long")
    .regex(/[A-Z]/, "Password should contain atleast 1 uppercase letter")
    .regex(/[0-9]/, "Password should contain atleast 1 numeric"),
});

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(proffessorSchema) });

  const [error, setError] = useState("");

  const requestSignup = async (data, e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/auth/signup`, data);

      const {
        data: { token },
      } = res;
      localStorage.setItem("token", `Bearer ${token}`);
      navigate("/initiate");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <div className="signup">
        <Navbar />
        <div className="signup__panel">
          <FontAwesomeIcon className="signup__user-icon" icon={faUser} />

          <form
            className="signup__input-panel"
            onSubmit={handleSubmit(requestSignup)}>
            <input
              type="text"
              className="signup__input grey-inputs"
              placeholder="First Name"
              {...register("fName")}
            />
            {errors.fName && (
              <h4 className="signup__error">{errors.fName.message}</h4>
            )}

            <input
              type="text"
              className="signup__input grey-inputs"
              placeholder="Last Name"
              {...register("lName")}
            />
            {errors.lName && (
              <h4 className="signup__error">{errors.lName.message}</h4>
            )}

            <input
              type="text"
              className="signup__input grey-inputs"
              placeholder="Username"
              {...register("username")}
            />
            {errors.username && (
              <h4 className="signup__error">{errors.username.message}</h4>
            )}

            <input
              type="password"
              className="signup__input grey-inputs"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <h4 className="signup__error">{errors.password.message}</h4>
            )}

            <button
              className="signup__option o-1"
              type="submit"
              style={{ width: "100%" }}>
              SIGN UP
            </button>
          </form>

          {error && <h4 className="signup__error">{error}</h4>}
          <div className="signup__options">
            {/* <button className="signup__option o-1" onClick={requestSignup}>
              SIGN UP
            </button> */}
            <button
              className="signup__option o-2"
              onClick={() => navigate("/login")}>
              OR LOGIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
