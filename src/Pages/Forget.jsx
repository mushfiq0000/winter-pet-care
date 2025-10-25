import { sendPasswordResetEmail } from "firebase/auth";
import { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import logo2Img from "../assets/logo2.png";
import { Link, useLocation } from "react-router";
import toast from "react-hot-toast";

const Forget = () => {
  const { auth } = use(AuthContext);
  const [emailError, setEmailError] = useState("");

  const location = useLocation();
  const emailFromLogin = location.state?.email || ""; 

  const handelResetPass = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();

    if (!email) {
      setEmailError("⚠️ Please enter your email address.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
        window.open("https://mail.google.com", "_blank");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          setEmailError("⚠️ Invalid email format.");
        } else if (error.code === "auth/user-not-found") {
          setEmailError("⚠️ No user found with this email.");
        } else {
          setEmailError("Something went wrong. Please try again.");
        }
      });
  };

  return (
    <div
      className="py-60 px-5 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("https://i.ibb.co/C5rZ7kPB/pexels-simonakidric-2607544.jpg")`,
      }}
    >
      <div className="md:w-1/3 mx-auto card bg-transparent shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform">
        <div className="card-body border-2 bg-white/50">
          <div className="flex justify-center items-center">
            <img className="w-25" src={logo2Img} alt="Logo" />
          </div>

          <h1 className="text-5xl font-bold text-center">Change Password</h1>
          <p className="text-center mb-4">
            Enter your email address and we’ll send you a link to reset your password.
          </p>

          <form onSubmit={handelResetPass}>
            <fieldset className="fieldset">
              {/* Email */}
              <label className="font-bold ml-2">Email</label>
              <input
                name="email"
                type="email"
                defaultValue={emailFromLogin} 
                className="input border-2 w-full bg-white/70 rounded-md"
                placeholder="Email"
              />

              {emailError && (
                <p className="font-bold text-red-700 text-center border py-2 mt-2">
                  {emailError}
                </p>
              )}

              <button
                type="submit"
                className="btn btn-neutral hover:bg-white/70 mt-4 rounded-md w-full"
              >
                Reset Password
              </button>

              {/* Login Link */}
              <p className="text-md font-bold text-center pt-3">
                Go back to{" "}
                <Link
                  to={"/auth/login"}
                  className="text-blue-700 hover:underline"
                >
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forget;