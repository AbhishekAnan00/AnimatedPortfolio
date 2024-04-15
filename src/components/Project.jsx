import React from "react";
import ecommerce_image from "../assets/amaon.jpg";
import chat_image from "../assets/convo.jpg";
import twitter_image from "../assets/twitter.jpg";
import gmail_image from "../assets/gmail.jpg";
import videotube_image from "../assets/videotube.jpg";
import blog_image from "../assets/blog.jpg";
import { FaRegEye } from "react-icons/fa";
import BottomNav from "./BottomNav";
const Project = () => {
  const project = [
    {
      id: 1,
      title: "Amazon Marketing",
      category: "Fullstack Development",
      image: ecommerce_image,
      Link: "https://amazonmarketing.netlify.app",
    },
    {
      id: 2,
      title: "Convo Chat Application",
      category: "Fullstack Development",
      image: chat_image,
      Link: "https://convochatapplication-1.onrender.com",
    },
    {
      id: 3,
      title: "Twitter Social Media",
      category: "Backend Development",
      image: twitter_image,
      Link: "https://github.com/AbhishekAnan00/TwitterClone",
    },
    {
      id: 4,
      title: "Google Fax",
      category: "Fullstack Development",
      image: gmail_image,
      Link: "https:gmailweb.netlify.app/",
    },
    {
      id: 5,
      title: "VideoTube Playback",
      category: "Fronted Development",
      image: videotube_image,
      Link: "https://videotubedeploy.netlify.app",
    },
    {
      id: 6,
      title: "Blog",
      category: "Fronted Development",
      image: blog_image,
      Link: "https://blogdeploy.netlify.app",
    },
  ];
  return (
    <div className="flex flex-col mx-auto w-screen bg-zinc-950 justify-center items-center overflow-y-auto">
      <section className="projects mt-2">
        <h3 className="text-xl font-bold text-gray-200">--Projects--</h3>
        <ul className="project-list grid grid-rows-1">
          {project.map((project) => (
            <li
              className="project-item active my-4"
              data-filter-item
              data-category={project.category}
              key={project.id}
            >
              <a href={project.Link}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FaRegEye />
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title text-2xl text-white font-semibold">
                  {project.title}
                </h3>
                <p className="project-category text-gray-300">
                  {project.category}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>
      <BottomNav />
    </div>
  );
};

export default Project;
