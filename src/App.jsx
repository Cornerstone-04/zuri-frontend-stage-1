import React from "react";
import { ProfilePic } from "./assets";

const App = () => {
  return (
    <div className="bg-zuriBg min-h-screen flex flex-col justify-start items-center gap-8 sm:gap-14 relative">
      <div className="mt-16 flex flex-col justify-center items-center gap-6">
        <img src={ProfilePic} alt="" />
        <p className="font-bold text-zuriGray-900 text-xl font-default">
          Annette Black
        </p>
      </div>
    </div>
  );
};

export default App;
