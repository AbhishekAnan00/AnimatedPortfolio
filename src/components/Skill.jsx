import React from "react";
import cssIcon from "../assets/css.svg";
import jsIcon from "../assets/js.svg";
import htmlIcon from "../assets/html.svg";
import firebaseIcon from "../assets/firebase.svg";
import githubIcon from "../assets/github.svg";
import mongoIcon from "../assets/mongo.svg";
import nodeIcon from "../assets/node.svg";
import postmanIcon from "../assets/postman.svg";
import reactIcon from "../assets/react.svg";
import tailwindIcon from "../assets/tailwind.svg";
import vscodeIcon from "../assets/vscode.svg";
import BottomNav from "./BottomNav";
const Skill = () => {
  const icons = [
    { name: "CSS", icon: cssIcon },
    { name: "HTML5", icon: htmlIcon },
    { name: "vscode", icon: vscodeIcon },
    { name: "postman", icon: postmanIcon },
    { name: "github", icon: githubIcon },
    { name: "mongo", icon: mongoIcon },
    { name: "node", icon: nodeIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "firebase", icon: firebaseIcon },
    { name: "react", icon: reactIcon },
    { name: "tailwind", icon: tailwindIcon },
  ];

  return (
    <>
    <div className="flex justify-center items-center">
    <div className="flex flex-col mx-auto w-screen h-screen bg-zinc-800 overflow-y-auto">
      <p className="text-xl font-bold text-gray-200 text-center py-2">
        --Skill--
      </p>
      <div className="flex flex-wrap justify-center items-center">
        {icons.map((icon, index) => (
          <div key={index} className="relative w-20 h-20 p-2 mt-4">
            <img
              src={icon.icon}
              alt={icon.name}
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ zIndex: icons.length - index }}
            />
          </div>
        ))}
      </div>
    </div>
    <BottomNav />
    </div>
    </>
  );
};

export default Skill;
