import React, { use } from "react";
import { Link } from "react-router";
import { ContextData } from "../Context/ContextData";
import { AuthContext } from "../Context/AuthContext";
import Loading from "../loading/Loading";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Register = () => {
  const { loading } = use(ContextData);

  const { createUser, setUser } = use(AuthContext);

  if (loading) {
    return <Loading />;
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("click", name, password, email, form);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("User Created:", user);
        setUser(user);
        form.reset();
        Swal.fire({
          title: "Register Complete!",
          text: "You clicked the button!",
          icon: "success",
        });
      })
      .catch((error) => {
        
        toast.error(error.message || "Failed to login. Please try again.");
      });
  };

  return (
    <div
      className="py-60  px-5 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("https://i.ibb.co/C5rZ7kPB/pexels-simonakidric-2607544.jpg")`,
      }}
    >
      <div className="md:w-1/3 mx-auto  card bg-transparent shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform ">
        <div className="card-body border-2 bg-white/50">
          <h1 className="text-5xl font-bold text-center">Register now!</h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* Name */}
              <label name="name" className=" font-semibold">
                Name
              </label>
              <input
                name="name"
                type="text"
                className="input border-2 w-full bg-white/70 rounded-2xl"
                placeholder="Name"
                required
              />
              {/* Photo */}
              <label className=" font-semibold">Photo</label>
              <input
                name="photo"
                type="taxt"
                className="input border-2 w-full bg-white/70 rounded-2xl"
                placeholder="Photo url"
                required
              />
              {/* Email */}
              <label className=" font-semibold">Email</label>
              <input
                name="email"
                type="email"
                className="input border-2 w-full bg-white/70 rounded-2xl"
                placeholder="Email"
                required
              />
              {/* password */}
              <label className="font-semibold">Password</label>
              <input
                name="password"
                type="password"
                className="input border-2 w-full bg-white/70 rounded-2xl"
                placeholder="Password"
                required
              />
              <button className="btn btn-neutral hover:bg-white/70  mt-4 rounded-2xl">
                Register
              </button>
              <p className="text-md font-bold text-center">
                Allready Have An Acount Alease Go{" "}
                <Link
                  to={"/auth/login"}
                  className="text-blue-700 hover:underline"
                >
                  Log In
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
