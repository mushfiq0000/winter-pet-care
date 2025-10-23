import React, { use } from "react";
import { Link } from "react-router";
import { ContextData } from "../Context/ContextData";

const Register = () => {
  const { loading } = use(ContextData);



  if (loading) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-700">
          <span className="loading loading-ring loading-xl"></span>
        </h2>
      </div>
    );
  }
  
  const handelRegister = (e) => {
     e.preventDefault();
     const name = e.target.name.value;
     const email = e.target.email.value;
     const password = e.target.password.value;
     
      console.log("click",name, password, email);
      
  }
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
          <form onSubmit={handelRegister}>
            <fieldset className="fieldset">
            {/* Name */}
            <label name='name' className=" font-semibold">Name</label>
            <input
            name='name'
              type="text"
              className="input border-2 w-full bg-white/70 rounded-2xl"
              placeholder="Name"
            />
            {/* Photo */}
            <label className=" font-semibold">Photo</label>
            <input
            name='photo'
              type="taxt"
              className="input border-2 w-full bg-white/70 rounded-2xl"
              placeholder="Photo url"
            />
            {/* Email */}
            <label className=" font-semibold">Email</label>
            <input
            name='email'
              type="email"
              className="input border-2 w-full bg-white/70 rounded-2xl"
              placeholder="Email"
            />
            {/* password */}
            <label className="font-semibold">Password</label>
            <input
            name='password'
              type="password"
              className="input border-2 w-full bg-white/70 rounded-2xl"
              placeholder="Password"
            />
            <button className="btn btn-neutral hover:bg-white/70  mt-4 rounded-2xl">
              Register
            </button>
            <p className="text-md font-bold text-center">
              Allready Have An Acount Alease Go <Link
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
