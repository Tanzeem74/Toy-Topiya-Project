import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user, logOut } = use(AuthContext);
      const handleLogout = () => {
          logOut().then(() => {
              // Sign-out successful.\
              toast('You Logged Out');
          }).catch(() => {
              // An error happened.
              //console.log(error);
          });
      }

  return (
    <div className="min-h-screen bg-linear-to-b from-pink-100 via-purple-100 to-blue-100 flex justify-center items-center py-10 px-4">
      <div className="bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-md text-center hover:shadow-pink-200 transition-all duration-300">
        <div className="flex justify-center">
          <img
            src={
              user?.photoURL ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXert6ekqTL1J7LVWNAhs65_GeostayFqh6A&s"
            }
            alt="User"
            className="w-32 h-32 rounded-full object-cover border-4 border-pink-400 shadow-md"
          />
        </div>

        <h1 className="mt-5 text-3xl font-extrabold text-pink-600 flex items-center justify-center gap-2">
          My Profile
        </h1>

        <div className="mt-6 space-y-3 text-gray-700">
          <p className="text-lg">
            <span className="font-semibold text-pink-500">Name:</span>{" "}
            {user?.displayName || "N/A"}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-pink-500">Email:</span>{" "}
            {user?.email || "N/A"}
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-5 py-2 bg-linear-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            Edit Profile
          </button>
          <button onClick={handleLogout} className="px-5 py-2 bg-white border border-pink-400 text-pink-500 font-semibold rounded-full hover:bg-pink-100 transition-all duration-300">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
