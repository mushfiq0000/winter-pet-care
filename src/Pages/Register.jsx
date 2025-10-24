import { use, useState } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import logo2Img from "../assets/logo2.png";
import { AuthContext } from "../Context/AuthContext";
import { ContextData } from "../Context/ContextData";
import Loading from "../loading/Loading";
import { RiEyeCloseFill } from "react-icons/ri";

const Register = () => {
  const [show, setShow] = useState(false);
  const { loading } = use(ContextData);
  const location = useLocation();
  const [passError, setPassError] = useState('')


  const navigate = useNavigate();

  const { createUser, setUser, updateUser } = use(AuthContext);

  if (loading) {
    return <Loading />;
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;


    const passRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
          if (!passRegex.test(password)) {
             toast.error(
              "⚠️ Password must be at least 6 characters long and include both uppercase and lowercase letters."
            );
            setPassError("Please choose a stronger password. Try a mix of letters, numbers and symbols.")
            return;
          }else{
            setPassError("")
          }


    createUser(email, password)
      .then((result) => {
        const user = result.user;
        navigate(`${location.state ? location.state : "/"}`);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            setPassError(error.message || "Please try again.");
          });
        form.reset();
        Swal.fire({
          title: "Register Complete!",
          text: "You clicked the button!",
          icon: "success",
        });
      })
      .catch((error) => {
        setPassError(error.message || "Failed to login. Please try again.");
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
          <div className="flex justify-center items-center">
            <img className="w-25" src={logo2Img} alt="" />
          </div>
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
              <div className="relative">
                <label className="font-semibold">Password</label>
                <input
                  name="password"
                  type={show ? "text" : "password"}
                  className="input border-2 w-full bg-white/70 rounded-2xl"
                  placeholder="Password"
                  required
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-4 top-7 text-lg cursor-pointer z-50"
                >
                  {show ? <RiEyeCloseFill /> : <FaEye />}
                </span>
              </div>
              <p className="text-red-600 font-semibold">{passError}</p>
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
