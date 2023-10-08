import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import React, {useState} from 'react';


function Header() {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartData')));

  window.addEventListener('storage', (e) => {
    e.preventDefault();
    setCartItems(JSON.parse(localStorage.getItem('cartData')));
    console.log(cartItems);
  })
  return (
    <div className="container headerContainer">
      <div className="row">
      <Navbar collapseOnSelect expand="lg" className="col-12">
      <Navbar.Brand href="/">
          <h3 className=""> DWC | creating functional art</h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="/Cart">Cart</Nav.Link>
          <NavDropdown title="In Cart" id="collasible-nav-dropdown">
            {cartItems?.map((item) => {
              return(
              <>
                <NavDropdown.Item href={"/product/" + item.link.split("m/")[1]} itemText>{item.title.split(" -")[0]}</NavDropdown.Item>
                <NavDropdown.Divider></NavDropdown.Divider>
              </>
              )
            })}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Navbar>

        </div>
      </div>
    );
}

export default Header;
