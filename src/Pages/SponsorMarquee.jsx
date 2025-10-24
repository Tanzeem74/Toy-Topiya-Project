import React from "react";
import Marquee from "react-fast-marquee";

const SponsorMarquee = () => {
  return (
    <div className="bg-linear-to-r from-pink-100 via-yellow-100 to-blue-100 py-6 rounded-2xl shadow-lg my-10">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Our Proud Sponsors 🤝</h2>
      <Marquee pauseOnHover={true} speed={60} className="flex items-center">
        <div className="flex gap-16 items-center">
          <p className="text-red-500 text-2xl font-bold">Swapno</p>
          <p className="text-sky-500 text-2xl font-bold">Othoba.com</p>
          <p className="text-gray-500 text-2xl font-bold">Amazon</p>
          <p className="text-orange-500 text-2xl font-bold">Daraz</p>
          <p className="text-orange-500 text-2xl font-bold">Star Tech</p>
          <p className="text-lime-500 text-2xl font-bold">Rayans</p>
        </div>
      </Marquee>
    </div>
  );
};

export default SponsorMarquee;
