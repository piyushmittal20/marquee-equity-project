import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#home">Project</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
