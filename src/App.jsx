import React from "react";
import { Github, I4G, Logo, ProfilePic, Slack, Share } from "./assets";

const App = () => {
  return (
    <div className="bg-zuriBg min-h-screen flex flex-col justify-start items-center gap-8 sm:gap-14 relative">
      {/* profile */}
      <div className="mt-16 w-full flex flex-col justify-center items-center gap-6">
        <img src={ProfilePic} alt="" id="profile__img" />
        <p className="font-bold text-zuriGray-900 text-xl font-default">
          Annette Black
        </p>
        <noscript>
          <p id="slack">Ephraim Cornerstone</p>
        </noscript>
      </div>
      <div className="bg-white hover:bg-zuriGray-50 absolute top-12 right-4 sm:right-12 md:right-36 w-10 h-10 flex justify-center items-center rounded-full border-2 border-dashed border-zuriGray-300 cursor-pointer">
        <img src={Share} alt="" />
      </div>
      {/* link boxes */}
      <div className="flex flex-col justify-center items-center gap-6 w-full px-4 sm:px-12 lg:px-36">
        <a
          className="btn"
          href="https://twitter.com/cornerstone_jsx"
          rel="noreferrer"
          target="_blank"
          id="twitter"
        >
          <p className="link__text">Twitter Link</p>
        </a>

        <a
          className="btn"
          href="https://training.zuri.team/"
          rel="noreferrer"
          target="_blank"
          id="btn__zuri"
        >
          <p className="link__text">Zuri Team</p>
        </a>
        <a
          className="btn"
          href="http://books.zuri.team/"
          rel="noreferrer"
          target="_blank"
          id="books"
        >
          <p className="link__text">Zuri Books</p>
        </a>
        <a
          className="btn"
          href="https://books.zuri.team/python-for-beginners?ref_id=cornerstone"
          rel="noreferrer"
          target="_blank"
          id="book__python"
        >
          <p className="link__text">Python Books</p>
        </a>
        <a
          className="btn"
          href="https://background.zuri.team/"
          rel="noreferrer"
          target="_blank"
          id="pitch"
        >
          <p className="link__text">Background Check for Codes</p>
        </a>
        <a
          className="btn"
          href="https://books.zuri.team/design-rules"
          rel="noreferrer"
          target="_blank"
          id="book_design"
        >
          <p className="link__text">Design Books</p>
        </a>

        <div className="social py-6 flex justify-center items-center gap-6">
          <a href="/">
            <img src={Slack} alt="" />
          </a>
          <a href="https://github.com/Cornerstone-04">
            <img src={Github} alt="" />
          </a>
        </div>
      </div>
      <footer className="w-full py-12 px-4 sm:px-12 lg:px-28 flex justify-center items-center">
        <div className="m-auto w-full max-w-custom flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6 border-t-1 border-zuriGray-200 pt-6">
          <img src={Logo} alt="ingressive_for_good" />
          <p className="text-zuriGray-500 text-base font-default font-normal">
            HNG Internship 9 Frontend Task
          </p>
          <img src={I4G} alt="zuri_internship" />
        </div>
      </footer>
    </div>
  );
};

export default App;
