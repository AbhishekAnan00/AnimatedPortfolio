import React from "react";
import portfollio_image from "../assets/image.png";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import res from "../assets/res.pdf";
import BottomNav from "./BottomNav";
const Self = () => {
  return (
    <div className="flex flex-col mx-auto h-screen w-screen bg-zinc-950">
      <div className="flex flex-col justify-center items-center mt-4">
        <div className="card card-side bg-zinc-900 shadow-xl w-[90%]">
          <figure className="flex justify-between">
            <img
              src={portfollio_image}
              alt="Abhishek Anand"
              className="h-full w-32"
            />
          </figure>
          <div className="card-body">
            <div className="dropdown dropdown-left absolute right-0 top-0">
              <div tabIndex={0} role="button" className="btn m-1">
                <FaCaretDown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/about">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link to="/project">
                    <a>Project</a>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="card-title text-white text-md py-2">
                Abhishek Anand 👨‍🎓
              </h2>
              <p className="text-white text-xs">A Software Engineer !</p>
              <a href={res} download="res.pdf">
                <lord-icon
                  src="https://cdn.lordicon.com/yqiuuheo.json"
                  trigger="loop"
                  delay="1500"
                  colors="primary:#000000"
                  state="in-unfold"
                  style={{ width: "50px", height: "50px" }}
                ></lord-icon>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-10">
        <div className="h-[1px] w-[80%] bg-zinc-700 mt-4"></div>
        <ul>
          <li className="flex gap-10 mt-4 text-white">
            <div>
              <lord-icon
                src="https://cdn.lordicon.com/tmqaflqo.json"
                trigger="loop"
                delay="1500"
                state="in-unfold"
                colors="primary:#000000,secondary:#ebe6ef,tertiary:#545454"
                style={{ width: "40px", height: "40px" }}
              ></lord-icon>
            </div>
            <div>
              <p className="text-lg font-semibold text-zinc-700">Email</p>
              <a href="mailto:email.abhishek00@gmail.com" className="text-lg">
                email.abhishek00@gmail.com
              </a>
            </div>
          </li>
          <li className="flex gap-10 mt-4 text-white">
            <div>
              <lord-icon
                src="https://cdn.lordicon.com/aecbaxnc.json"
                trigger="loop"
                delay="2000"
                colors="primary:#545454,secondary:#000000"
                style={{ width: "40px", height: "40px" }}
              ></lord-icon>
            </div>
            <div>
              <p className="text-lg font-semibold text-zinc-700">Phone</p>

              <a href="tel:+917482993709" className="contact-link text-lg">
                +91 7482993709
              </a>
            </div>
          </li>
          <li className="flex gap-10 mt-4 text-white">
            <div>
              <lord-icon
                src="https://cdn.lordicon.com/iikoxwld.json"
                trigger="loop"
                delay="1500"
                state="in-roll-calm"
                colors="primary:#545454"
                style={{ width: "40px", height: "40px" }}
              ></lord-icon>
            </div>
            <div>
              <p className="text-lg font-semibold text-zinc-700">Location</p>
              <address>India</address>
            </div>
          </li>
        </ul>
        <div className="h-[1px] w-[80%] bg-zinc-700 mt-6"></div>
        <ul className="flex gap-10 text-3xl text-zinc-400 mt-4">
          <li>
            <a href="https://github.com/AbhishekAnan00" className="social-link">
              <ion-icon name="logo-github">
                <FaGithub className="hover:text-black" />
              </ion-icon>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/AbhishekAnan00"
              className="social-link"
            >
              <ion-icon name="logo-twitter">
                <FaXTwitter className="hover:text-black" />
              </ion-icon>
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/abhishekanan00"
              className="social-link"
            >
              <ion-icon name="logo-linkedin">
                <FaLinkedin className="hover:text-black" />
              </ion-icon>
            </a>
          </li>
        </ul>
        <BottomNav />
      </div>
    </div>
  );
};

export default Self;
