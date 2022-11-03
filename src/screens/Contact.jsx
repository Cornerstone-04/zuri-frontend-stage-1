import React, { useEffect, useState } from "react";
import Checkbox from "../components/Checkbox";
import Footer from "../components/Footer";

const Contact = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleClick = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (isChecked) {
      setIsDisabled(false);
    }
    return () => {
      setIsDisabled(true);
    };
  }, [isChecked]);

  return (
    <div className="bg-zuriBg min-h-screen w-full flex flex-col justify-start  items-center sm:gap-14 relative font-contact">
      <main className="w-full px-20 pt-16 flex flex-col justify-center items-center gap-12">
        <header className="w-full max-w-form flex flex-col justify-start items-start gap-5">
          <h1 className="font-semibold text-zuriGray-900 text-4xl">
            Contact Me
          </h1>
          <p className="text-xl text-zuriGray-600 font-normal">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </header>

        {/* contact form */}
        <form className="w-full max-w-form flex flex-col gap-6">
          <section className="flex gap-6 w-full">
            <div className="flex flex-col gap-1.5 basis-2/4">
              <label
                htmlFor="first_name font-medium text-zuriGray-700"
                className="text-sm"
              >
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="Enter your first name"
                className="bg-white h-input border border-zuriGray-300 rounded-lg py-2.5 px-3.5 outline-none text-base placeholder:text-zuriGray-500 text-zuriGray-900 focus:placeholder:text-zuriGray-900 placeholder:transition  placeholder:ease-linear"
              />
            </div>
            <div className="flex flex-col gap-1.5 basis-2/4">
              <label
                htmlFor="last_name"
                className="text-sm font-medium text-zuriGray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Enter your last name"
                className="bg-white h-input border border-zuriGray-300 rounded-lg py-2.5 px-3.5 outline-none text-base placeholder:text-zuriGray-500 text-zuriGray-900 focus:placeholder:text-zuriGray-900 placeholder:transition  placeholder:ease-linear"
              />
            </div>
          </section>
          <section className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zuriGray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="yourname@gmail.com"
              className="bg-white h-input border border-zuriGray-300 rounded-lg py-2.5 px-3.5 outline-none text-base placeholder:text-zuriGray-500 text-zuriGray-900 focus:placeholder:text-zuriGray-900 placeholder:transition  placeholder:ease-linear"
            />
          </section>
          <section className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="text-sm font-medium text-zuriGray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Send me a message and I'll reply you as soon as possible"
              className="bg-white h-text border border-zuriGray-300 rounded-lg resize-none py-2.5 px-3 outline-none text-base placeholder:text-zuriGray-500 text-zuriGray-900 focus:placeholder:text-zuriGray-900 placeholder:transition  placeholder:ease-linear"
            ></textarea>
          </section>
          <section className="flex gap-3 items-center">
            <Checkbox onClick={toggleClick} />
            <label
              htmlFor="checkbox"
              className="font-normal text-sm text-zuriGray-600"
            >
              You agree to providing your data to Cornerstone who may contact
              you.
            </label>
          </section>

          <button
            id="btn_submit"
            disabled={isDisabled}
            className="bg-primary-600 h-12 rounded-lg flex justify-center items-center py-3 font-medium text-base text-white mt-2 mb-48"
          >
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
