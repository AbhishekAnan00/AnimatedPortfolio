import React from "react";
import { Link } from "react-router-dom";
const BottomNav = () => {
  return (
    <div className="flex justify-between fixed bottom-2 bg-zinc-900 p-2 shadow-2xl rounded-xl w-[90%]">
      <Link to="/">
        <div className="bg-stone-700 rounded-xl">
          <lord-icon
            src="https://cdn.lordicon.com/heexevev.json"
            trigger="loop"
            delay="2000"
            colors="primary:#000000,secondary:#000000,tertiary:#545454,quaternary:#3a3347,quinary:#646e78,senary:#ebe6ef"
            style={{ width: "40px", height: "40px" }}
          ></lord-icon>
        </div>
      </Link>
      <Link to="/skill">
        <div className="bg-stone-700 rounded-xl">
          <lord-icon
            src="https://cdn.lordicon.com/eiwtsgei.json"
            trigger="loop"
            delay="2000"
            colors="primary:#000000,secondary:#000000"
            style={{ width: "40px", height: "40px" }}
          ></lord-icon>
        </div>
      </Link>
      <Link to="/project">
        <div className="bg-stone-700 rounded-xl">
          <lord-icon
            src="https://cdn.lordicon.com/pqrtuvvq.json"
            trigger="loop"
            delay="2000"
            colors="primary:#3a3347,secondary:#ebe6ef,tertiary:#242424,quaternary:#e4e4e4,quinary:#b4b4b4"
            style={{ width: "40px", height: "40px" }}
          ></lord-icon>
        </div>
      </Link>
      <Link to="/about">
        <div className="bg-stone-700 rounded-xl">
          <lord-icon
            src="https://cdn.lordicon.com/akqsdstj.json"
            trigger="loop"
            delay="2000"
            colors="primary:#b4b4b4,secondary:#000000"
            style={{ width: "40px", height: "40px" }}
          ></lord-icon>
        </div>
      </Link>
      <Link to="/contact">
        <div className="bg-stone-700 rounded-xl">
          <lord-icon
            src="https://cdn.lordicon.com/xcxzayqr.json"
            trigger="loop"
            delay="2000"
            colors="primary:#000000,secondary:#545454"
            style={{ width: "40px", height: "40px" }}
          ></lord-icon>
        </div>
      </Link>
    </div>
  );
};

export default BottomNav;
