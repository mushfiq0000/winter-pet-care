// src/pages/MyProfile.jsx
import React, { useContext } from "react";
import { FaUserEdit } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user, photoUpdate, setUser } = useContext(AuthContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const photo = form.photo.value;
    console.log(email, photo);

    photoUpdate({ photoURL: photo })
      .then(() => {
        setUser({ ...user, photoURL: photo });
      })
      .catch((error) => {
      toast.error(error.message || "Please try again.");
      });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-[#153f67] flex flex-col justify-center items-center p-4">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-8 flex flex-col items-center space-y-6 transform transition-transform duration-300 hover:scale-105">
        <img
          src={user.photoURL}
          alt=""
          className="w-40 h-40 rounded-full border-4 border-[#c67033] object-cover hover:ring-4 hover:ring-[#c67033] transition-all duration-300"
        />
        <h2 className="text-3xl font-bold text-[#153f67]">
          {user.displayName}
        </h2>
        <div className="flex items-center text-[#153f67] space-x-3">
          <AiOutlineMail className="text-2xl" />
          <span className="text-lg">{user.email}</span>
        </div>
        <div className="flex space-x-4 mt-4">
          <button
            className="btn bg-[#c67033] text-white hover:bg-[#153f67] border-none flex items-center rounded-lg"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            <FaUserEdit />
            Update Profile
          </button>
        </div>
        {/* Booking Modal */}
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box bg-white/70 backdrop-blur-md border-0 rounded-2xl">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost border-0 hover:text-red-800 absolute right-2 top-2">
                ✕
              </button>
            </form>

            <h1 className="text-3xl font-bold text-center mb-5">
              Update Profile!
            </h1>

            <form onSubmit={handleUpdateProfile}>
              <fieldset className="fieldset space-y-3">
                <label className="font-semibold">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input border-2 w-full bg-white/70 rounded-lg"
                  placeholder="Email"
                  required
                />

                <label className="font-semibold">Photo URL</label>
                <input
                  name="photoURL"
                  type="text"
                  className="input border-2 w-full bg-white/70 rounded-lg"
                  placeholder="Photo URL"
                  required
                />

                <button
                  type="submit"
                  className="btn btn-neutral border-0 bg-[#c67033] hover:bg-[#17436c] text-white mt-4 rounded-lg w-full"
                >
                  Confirm Booking
                </button>
              </fieldset>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MyProfile;
