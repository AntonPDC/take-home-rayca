import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Projects from "../components/Projects";

const ProjectsPage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Projects />
    </div>
  );
};

export default ProjectsPage;
