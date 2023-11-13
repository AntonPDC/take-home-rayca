import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { mobile } from "../responsive";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
  margin-bottom: 10px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
  text-decoration: none;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await logout(dispatch);
      console.log("Logout successful");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/create">Create a Project</Link>
        </Left>
        <Center>
          <Link to="/projects">
            <Logo>Projects</Logo>
          </Link>
        </Center>
        <Right>
          <Link to="/register">
            <MenuItem>Register</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>Sign In</MenuItem>
          </Link>
          <Link to="/logout">
            <MenuItem onClick={handleClick}>Sign Out</MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
