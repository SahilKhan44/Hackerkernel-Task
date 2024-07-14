import React from "react";
import { Navbar, Nav, Container ,NavDropdown} from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";

export default function Header() {
  let user = JSON.parse(localStorage.getItem('user-info'))
  // console.log(user);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user-info');
  
    navigate('/register')
  }
  return (
    <Navbar bg="dark" data-bs-theme="dark"  cal>
      <Container>
        <Navbar.Brand> <img className = "w-25 p-2" src="https://hackerkernel.com/front_asset/assets/img/HKLogo.png" alt="" />Hackerkernel</Navbar.Brand> 
        <Nav className="mr-auto navbar_warapper ">
          {
            localStorage.getItem('user-info') ?
            <>
             <Link className="text-decoration-none" to="/"> Product Listing</Link>
             <Link className="text-decoration-none" to="/add"> Add Product</Link>
             <Link className="text-decoration-none" to="/search"> Search Product</Link>
            </>
            :
            <>
            <Link className="text-decoration-none" to="/register"> Register Product </Link>
            <Link className="text-decoration-none" to="/login"> Login</Link>
            </>
          }
        </Nav>
        {localStorage.getItem("user-info") ? (
         <Nav>
         <NavDropdown title={user && user.name ? user.name : "User"}>
           <NavDropdown.Item  onClick={logout}>Logout</NavDropdown.Item>
         </NavDropdown>
       </Nav>
     ) : null}
      </Container>
    </Navbar>
  );
}
