import {Navbar, Nav, Container} from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>ProStore</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navabr-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to='/cart'>
                        <Nav.Link ><FaShoppingCart /></Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/login'>
                        <Nav.Link >
                        <FaUser /> Sign In
                        </Nav.Link>
                        </LinkContainer>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
        


    </header>
  )
}

export default Header