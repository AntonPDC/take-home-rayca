import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  margin-bottom: 10px;
  color: white;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: teal;
`;
const Form = styled.div`
  justify-content: center;
  align-items: center;
`;
const ProjectForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/projects", {
        title,
        desc,
      });
      console.log("Project created:", response.data);
      // You can perform additional actions here, such as redirecting or updating state.
    } catch (error) {
      console.error(
        "Error creating project:",
        error.response ? error.response.data : error.message
      );
    }
  };
  return (
    <Container>
      <Wrapper>
        <Form>
          <h2>Create a New Project</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <label htmlFor="desc">Description:</label>
            <textarea
              id="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required
            />

            <button type="submit">Create Project</button>
          </form>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default ProjectForm;
