import React from "react";
import Item from "./Item";
import BottomNav from "./BottomNav";
const About = () => {
  return (
    <div className="mx-auto h-screen w-screen bg-zinc-950 overflow-y-auto p-4">
      <article data-page="about" className="text-white">
        <header>
          <h2 className="text-2xl font-bold mt-2">About</h2>
        </header>
        <section className="mt-6 text-lg">
          <p className="font-semibold text-xl">
            A Passionate Software Enginner From India.
          </p>
          <p className="text-sm">
            Proficient in front-end and back-end technologies.
          </p>
        </section>
        {/* <!--- service--> */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-4 mt-6">Performance</h3>
          <ul className="w-[90vw] bg-zinc-900">
            <Item title="Frontend Development" value={80} />
            <Item title="Backend Development" value={70} />
            <Item title="Website Design" value={90} />
            <Item title="Photography" value={100} />
          </ul>
        </div>
        <section>
          <h3 className="text-xl font-bold mt-6">Knowledge about it</h3>
          <p className="text-md mt-2">
            - HTML, CSS, JavaScript, and related frameworks (e.g. ReactJs)
          </p>
          <p className="text-md mt-2">
            - In server-side rendering (NodeJs, Socket.io, ExpressJs)
          </p>
          <p className="text-md mt-2">- Databases like MongoDB and Firebase.</p>
          <p className="text-md mt-2">
            - Understanding of web development, responsive design, optimisation,
            and SEO.
          </p>
          <p className="text-md mt-2">
            - Version control systems (e.g. Git) and deployment platforms (e.g.
            Vercel , Netlify , render)
          </p>
        </section>
        <div className="text-white mt-6">
          <h3 className="text-2xl font-bold mb-4">Education</h3>
          <p className="text-lg text-white">
            Bachelor of Technology in Mechanical Engineering.
          </p>
          <p className="text-lg">BEU University | India | 2023</p>
        </div>
      </article>
      <BottomNav />
    </div>
  );
};

export default About;
