import styled from "styled-components";
import Project from "./Project";
import axios from "axios";
import { useState, useEffect } from "react";

const Container = styled.div`
display: flex;
flex-wrap: wrap;
padding: 20px:
justify-content: space-between;
`;

const renderProject = (item, index) => (
  <Project item={item} key={`${item.id}-${index}`} />
);

const Projects = ({ filters, sort }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/projects");
        setProjects(res.data);
        console.log(res);
      } catch (err) {}
    };
    getProjects();
  }, []);
  return <Container>{projects.map(renderProject)}</Container>;
};

export default Projects;
