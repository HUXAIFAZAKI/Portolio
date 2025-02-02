import React from "react";

function Projects() {
  return (
    <section>
      <div className="flex flex-col gap-6 justify-center items-center w-full">
        <h1 className="text-4xl font-bold mb-16">PROJECTS</h1>
        <div className="flex gap-6 flex-wrap justify-center align-middle ">
          <div className="project-card text-2xl font-bold w-[400px] h-[200px] border-2 border-white flex justify-center items-center ">
            Project 1
          </div>
          <div className="project-card text-2xl font-bold w-[400px] h-[200px] border-2 border-white flex justify-center items-center">
            Project 2
          </div>
          <div className="project-card text-2xl font-bold w-[400px] h-[200px] border-2 border-white flex justify-center items-center">
            Project 3
          </div>
          <div className="project-card text-2xl font-bold w-[400px] h-[200px] border-2 border-white flex justify-center items-center">
            Project 4
          </div>
          <div className="project-card text-2xl font-bold w-[400px] h-[200px] border-2 border-white flex justify-center items-center">
            Project 5
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
