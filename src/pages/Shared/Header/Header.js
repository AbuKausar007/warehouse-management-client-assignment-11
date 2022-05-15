import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className=" fixed-top "
      >
        <Container>
          <Navbar.Brand as={Link} to="/" href="#home">
            Fresh Grocery
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="inventory" href="inevtory">
                Inventory
              </Nav.Link>
              <Nav.Link as={Link} to="blogs" href="blogs">
                Blogs
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="about">
                About
              </Nav.Link>
              {user && (
                <>
                  <Nav.Link as={Link} to="additems">
                    Add Items
                  </Nav.Link>
                  <Nav.Link as={Link} to="manageitems">
                    Manage Items
                  </Nav.Link>
                  <Nav.Link as={Link} to="myitems">
                    My Items
                  </Nav.Link>
                </>
              )}
              {user ? (
                <button
                  className="btn btn-link text-decoration-none"
                  onClick={handleSignOut}
                >
                  sign out
                </button>
              ) : (
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>
              )}
              {/* <Nav.Link as={Link} to="/login" href="#login">
                Login
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
