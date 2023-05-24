import React from 'react'
import { Button, Navbar, Container, Nav, NavDropdown, Carousel, Card, Dropdown, Spinner, Table } from 'react-bootstrap';
const Bootstrap = () => {
  return (
    <div> <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <img
          src="img/logo.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="img/img1.jpg"
        alt="First slide"
        width={"200px"}
        height={"auto"}
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="img/img2.jpg"
        alt="Second slide"
        width={"200px"}
        height={"auto"}
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="img/img3.jpg"
        alt="Third slide"
        width={"200px"}
        height={"auto"}
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  <div className="drop">
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>

  <div className="card1">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="img/cardimg.jpg" />
      <Card.Body>
        <Card.Title>Paint1</Card.Title>
      </Card.Body>
    </Card>
  </div>

  <div className="card2">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="img/card2.jpg" />
      <Card.Body>
        <Card.Title>Paint2</Card.Title>
      </Card.Body>
    </Card>
  </div>

  <div className="card3">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="img/card3.jpg" />
      <Card.Body>
        <Card.Title>paint3</Card.Title>
      </Card.Body>
    </Card>
  </div>

  <div className="sp">
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>

  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan={2}>Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table></div>
  )
}

export default 999999Bootstrap