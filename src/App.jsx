import React from "react";
import { Github, ProfilePic, Slack } from "./assets";

const App = () => {
  return (
    <div className="bg-zuriBg min-h-screen flex flex-col justify-start items-center gap-8 sm:gap-14 relative">
      {/* profile */}
      <div className="mt-16 flex flex-col justify-center items-center gap-6">
        <img src={ProfilePic} alt="" id="profile__img" />
        <p className="font-bold text-zuriGray-900 text-xl font-default">
          Annette Black
        </p>
        <noscript>
          <p id="slack">Ephraim Cornerstone</p>
        </noscript>
      </div>

      {/* link boxes */}
      <div className="flex flex-col justify-center items-center gap-6 w-full px-4 sm:px-20 md:px-36">
        <div className="btn">
          <a
            href="https://twitter.com/cornerstone_jsx"
            rel="noreferrer"
            target="_blank"
            className="link__text"
            id="twitter"
          >
            Twitter Link
          </a>
        </div>

        <div className="btn">
          <a
            href="https://training.zuri.team/"
            rel="noreferrer"
            target="_blank"
            className="link__text"
            id="btn__zuri"
          >
            Zuri Team
          </a>
        </div>
        <div className="btn">
          <a
            href="http://books.zuri.team/"
            rel="noreferrer"
            target="_blank"
            className="link__text"
            id="books"
          >
            Zuri Books
          </a>
        </div>
        <div className="btn">
          <a
            href="https://books.zuri.team/python-for-beginners?ref_id=cornerstone"
            rel="noreferrer"
            target="_blank"
            className="link__text"
            id="book__python"
          >
            Python Books
          </a>
        </div>
        <div className="btn">
          <a
            href="https://background.zuri.team/"
            rel="noreferrer"
            target="_blank"
            className="link__text"
            id="pitch"
          >
            Background Check for Codes
          </a>
        </div>
        <div className="btn">
          <a
            href="https://books.zuri.team/design-rules"
            rel="noreferrer"
            target="_blank"
            className="link__text"
            id="book_design"
          >
            Design Books
          </a>
        </div>

        <div className="social py-6 flex justify-center items-center gap-6">
          <a href="/">
            <img src={Slack} alt="" />
          </a>
          <a href="https://github.com/Cornerstone-04">
            <img src={Github} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
