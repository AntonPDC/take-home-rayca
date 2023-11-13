import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import CreateProjectForm from "../components/CreateProject";

const Create = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <CreateProjectForm />
    </div>
  );
};

export default Create;
