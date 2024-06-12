import Container from "react-bootstrap/Container";

import "./navbar.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function TopNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className=" my-nav">
      <Container>
        <div className="nav-title">
          {" "}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="#home">Planity</Navbar.Brand>
        </div>
        <button className="nav-big-btn sign-btn d-lg-none d-block btn">
          sign in
        </button>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className="fs-6 mx-md-3 active" href="#home">
              HOME
            </Nav.Link>
            <Nav.Link className="fs-6 mx-md-3 " href="#shope">
              SHOP
            </Nav.Link>
            <Nav.Link className="fs-6 mx-md-3 " href="#about_us">
              ABOUT US
            </Nav.Link>
            <Nav.Link className="fs-6 mx-md-3 " href="#contact">
              CONTACT
            </Nav.Link>
          </Nav>
          <Nav className="nav-small-btn">
            <button className=" sign-btn d-lg-block d-none btn">sign in</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
