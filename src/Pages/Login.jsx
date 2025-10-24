import { use, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
import { ContextData } from "../Context/ContextData";
import Loading from "../loading/Loading";
import logo2Img from "../assets/logo2.png";
import { FaEye } from "react-icons/fa";
import { RiEyeCloseFill } from "react-icons/ri";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";


const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app)


const Login = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
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

    signIn(email, password)
      .then(() => {
        navigate(`${location.state ? location.state : "/"}`);
        form.reset();
        Swal.fire({
          title: "Login Complete!",
          text: "You clicked the button!",
          icon: "success",
        });
      })
      .catch((error) => {
        if(error.code === "auth/invalid-email"){
          setError("⚠️ Please enter a valid email address (e.g., example@domain.com).");
        }else if (error.code === "auth/missing-password"){
          setError("⚠️ Password is required. Please enter your password.");
        }else if(error.code === "auth/invalid-credential"){
          setError("⚠️ Invalid email or password. Please check your credentials.");
        }else {
          setError("Something went wrong. Please try again.")
        }
      });
  };

  const handleGoogleLogIn = (e) =>{
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
    .then(() => {
        navigate(`${location.state ? location.state : "/"}`);
        Swal.fire({
          title: "Login Complete!",
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
      className="py-60 px-5 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("https://i.ibb.co/C5rZ7kPB/pexels-simonakidric-2607544.jpg")`,
      }}
    >
      <div className="md:w-1/3 mx-auto  card bg-transparent shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform ">
        <div className="card-body border-2 bg-white/50">
          <div className="flex justify-center items-center">
            <img className="w-25" src={logo2Img} alt="" />
          </div>
          <h1 className="text-5xl font-bold text-center"> Login now!</h1>
          <form onSubmit={handlelogin}>
            <fieldset className="fieldset">
              {/* Email */}
              <label className=" font-semibold">Email</label>
              <input
                name="email"
                type="email"
                className="input border-2 w-full bg-white/70 rounded-md"
                placeholder="Email"
              />

              {/* password */}
              <div className="relative">
                <label className="font-semibold">Password</label>
                <input
                  name="password"
                  type={show ? "text" : "password"}
                  className="input border-2 w-full bg-white/70 rounded-md"
                  placeholder="Password"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-4 top-7 text-lg cursor-pointer z-50"
                >
                  {show ? <RiEyeCloseFill /> : <FaEye />}
                </span>
              </div>
              <div>
                <Link to="/auth/forget" className="link link-hover font-semibold">
                  Forgot password?
                </Link>
              </div>
              {
                error ? <p className="font-bold text-red-700 text-center border py-2">{error}</p> : ""
              }
              <button
                type="submit"
                className="btn btn-neutral hover:bg-white/70  mt-4 rounded-md"
              >
                LogIn
              </button>
              

              {/* Google */}
              <button onClick={handleGoogleLogIn} className="btn w-full bg-white text-black border-0 shadow-md rounded-lg mt-2">
                <svg
                  aria-label="Google logo"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>

              {/* Register Link */}
              <p className="text-md font-bold text-center pt-3">
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
