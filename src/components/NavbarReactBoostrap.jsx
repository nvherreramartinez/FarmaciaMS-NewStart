import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


function NavbarReactBootstrap() {
    const {cartQuantity} = useContext(CartContext)
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Farmacia del MS</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="me-auto">
                        <NavLink as={NavLink} to="/">Inicio</NavLink>
                        <NavDropdown title="Medicamentos" id="basic-nav-dropdown">
                        <NavDropdown.Item as={NavLink} to="/category/Antibióticos">Antibióticos</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={NavLink} to="/category/Analgésicos">Analgésicos</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={NavLink} to="/category/Antifebriles">Antifebriles</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={NavLink} to="/category/Benzodiacepinas">Benzodiacepinas</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={NavLink} to="/category/Inhibidores">Inhibidores</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <NavLink to='/cart' style={{textDecoration: 'none'}}><CartWidget/>
                    </NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarReactBootstrap
