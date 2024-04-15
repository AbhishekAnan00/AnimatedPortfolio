import React, { useState } from "react";
import BottomNav from "./BottomNav";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="flex flex-col mx-auto w-screen h-screen bg-zinc-950 justify-center items-center overflow-y-auto">
      <div className="contact_form w-full">
        <form
          action="https://formspree.io/f/xvoebodl"
          method="post"
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center p-9 mx-auto"
        >
          <div className="py-2">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                name="Name"
                placeholder="Name"
                className="grow"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="py-2">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                name="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="grow"
              />
            </label>
          </div>
          <div className="py-2">
            <textarea
              name="Messege"
              placeholder="Enter Your Messege"
              cols={35}
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="textarea textarea-bordered"
            ></textarea>
          </div>

          <div className="py-2">
            <button className="btn btn-success" type="submit">
              Send Your Message!
            </button>
          </div>
        </form>
      </div>
      <BottomNav />
    </div>
  );
};

export default Contact;
