import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { ContextData } from "../Context/ContextData";
import { AuthContext } from "../Context/AuthContext";
import Loading from "../loading/Loading";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Login = () => {
  const { loading } = use(ContextData);
  const { signIn } = use(AuthContext);
  const location = useLocation();

  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  const handlelogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log("User Created:", user);
        navigate(`${location.state ? location.state : "/"}`);
        Swal.fire({
          title: "Login Complete!",
          text: "You clicked the button!",
          icon: "success",
        });
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.Mewssage;

        toast.error(error.message || "Failed to login. Please try again.");
      });
  };

  return (
    <div
      className="py-60 px-5 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("https://i.ibb.co/C5rZ7kPB/pexels-simonakidric-2607544.jpg")`,
      }}
    >
      <div className="md:w-1/3 mx-auto  card bg-transparent shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform ">
        <div className="card-body border-2 bg-white/50">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <form onSubmit={handlelogin}>
            <fieldset className="fieldset">
              {/* Email */}
              <label className=" font-semibold">Email</label>
              <input
                name="email"
                type="email"
                className="input border-2 w-full bg-white/70 rounded-2xl"
                placeholder="Email"
              />

              {/* password */}
              <label className="font-semibold">Password</label>
              <input
                name="password"
                type="password"
                className="input border-2 w-full bg-white/70 rounded-2xl"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover font-semibold">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="btn btn-neutral hover:bg-white/70  mt-4 rounded-2xl"
              >
                LogIn
              </button>
              <p className="text-md font-bold text-center ">
                Don't Have An Acount Please Go{" "}
                <Link
                  to={"/auth/register"}
                  className="text-blue-700 hover:underline"
                >
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
