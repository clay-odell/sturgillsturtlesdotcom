import {
    Container,
    Navbar,
    Nav,
    Dropdown,
    Form,
    InputGroup,
    Button,
  } from "react-bootstrap";
  import { Link } from "react-router-dom";
  
  const NavBar = () => {
    return (
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
        data-bs-theme="dark"
      >
        <Container>
          {/* Brand Logo */}
          <Navbar.Brand as={Link} to="/">
            <img
              src="/sturgills-logo.png"
              alt="Sturgill's Turtle Logo"
              style={{ maxWidth: "200px" }}
            />
          </Navbar.Brand>
  
          {/* Toggle Button for Mobile */}
          <Navbar.Toggle aria-controls="navbar-nav" />
  
          {/* Collapsible Navigation */}
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/shows">
                Shows
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
  
            {/* Dropdown with Inline Form */}
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-login"
                className="ms-2"
              >
                Login
              </Dropdown.Toggle>
  
              <Dropdown.Menu align="end" style={{ minWidth: "250px" }}>
                <Form className="px-3 py-2">
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="username-addon">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="username-addon"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="password-addon">🔒</InputGroup.Text>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="password-addon"
                    />
                  </InputGroup>
                  <Button variant="primary" type="submit" className="w-100">
                    Login
                  </Button>
                </Form>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default NavBar;
  