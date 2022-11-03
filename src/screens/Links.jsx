import React from "react";
import { Github, Slack, Share, Profile, Menu, Camera } from "../assets";
import Footer from "../components/Footer";

const Links = () => {
  return (
    <div className="bg-zuriBg min-h-screen flex flex-col justify-start items-center gap-8 sm:gap-14 relative">
      {/* profile */}
      <div className="mt-16 w-full flex flex-col justify-center items-center gap-6">
        <div className="h-img w-img rounded-full overflow-hidden relative">
          <img src={Profile} alt="" id="profile__img" className="max-w-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-clear flex flex-col justify-end items-center opacity-0 hover:opacity-100 transition ease-linear z-10">
            <img src={Camera} alt="" className="w-6 mb-2.5" />
          </div>
        </div>
        <p
          className="font-bold text-zuriGray-900 text-xl font-default"
          title="twitter handle"
          id="twitter"
        >
          @cornerstone_jsx
        </p>
        <noscript>
          <p id="slack">Ephraim Cornerstone</p>
        </noscript>
      </div>

      {/* share and menu icons */}
      <div className="bg-white hover:bg-zuriGray-50 absolute top-12 right-4 sm:right-10 md:right-36 w-10 h-10 hidden md:flex justify-center items-center rounded-full border-2 border-dashed border-zuriGray-300 cursor-pointer">
        <img src={Share} alt="" />
      </div>
      <div className="bg-white hover:bg-zuriGray-50 absolute top-12 right-4 sm:right-12 md:right-36 w-10 h-10 flex justify-center items-center rounded-full border-2 border-dashed border-zuriGray-300 cursor-pointer md:hidden">
        <img src={Menu} alt="" />
      </div>

      {/* link boxes */}
      <div className="flex flex-col justify-center items-center gap-6 w-full px-4 sm:px-12 lg:px-36 pb-40">
        <a
          className="btn link__text"
          href="https://twitter.com/cornerstone_jsx"
          rel="noreferrer"
          target="_blank"
          id="twitter"
        >
          Twitter Link
        </a>

        <a
          className="btn link__text"
          href="https://training.zuri.team/"
          rel="noreferrer"
          target="_blank"
          id="btn__zuri"
        >
          Zuri team
        </a>
        <a
          className="btn link__text flex flex-col justify-center items-center"
          href="http://books.zuri.team/"
          rel="noreferrer"
          target="_blank"
          id="books"
          title="Find books about design and coding."
        >
          Zuri Books
        </a>
        <a
          className="btn link__text"
          href="https://books.zuri.team/python-for-beginners?ref_id=cornerstone_ephraim"
          rel="noreferrer"
          target="_blank"
          id="book__python"
        >
          Python Books
        </a>
        <a
          className="btn link__text"
          href="https://background.zuri.team/"
          rel="noreferrer"
          target="_blank"
          id="pitch"
          title="Perform a background check on coders."
        >
          Background Check for Codes
        </a>
        <a
          className="btn link__text"
          href="https://books.zuri.team/design-rules"
          rel="noreferrer"
          target="_blank"
          id="book__design"
          title="Free design book by Zuri."
        >
          Design Books
        </a>
        <a
          className="btn link__text"
          href="/contact"
          id="contact"
          title="Free design book by Zuri."
        >
          Contact Me
        </a>

        <div className="social pt-6 pb-32 sm:pb-6 flex justify-center items-center gap-6">
          <a href="/">
            <img src={Slack} alt="" />
          </a>
          <a href="https://github.com/Cornerstone-04">
            <img src={Github} alt="" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Links;
