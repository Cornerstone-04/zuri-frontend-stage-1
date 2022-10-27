import React from "react";
import { I4G, Logo } from "../assets";

const Footer = () => {
  return (
    <footer className="w-full max-w-full min-h-auto py-12 px-4 sm:px-12 lg:px-28 flex justify-center items-center absolute bottom-0">
      <div className="m-auto w-full max-w-custom flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6 border-t-1 border-zuriGray-200 pt-6">
        <img src={Logo} alt="ingressive_for_good" />
        <p className="text-zuriGray-500 text-base font-default font-normal text-center">
          HNG Internship 9 Frontend Task
        </p>
        <img src={I4G} alt="zuri_internship" />
      </div>
    </footer>
  );
};

export default Footer;
