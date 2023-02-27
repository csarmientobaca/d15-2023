import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { IoHome } from 'react-icons/io5';
import { FaBookOpen } from "react-icons/fa"
import logo from "../logo/Spotify_Logo.png"

function NavBar() {
    return (
        <div className="col-2">
            <Navbar bg="navbar" variant="white" expand="md" fixed="left" className="justify-content-between" id="sidebar">
                <div className="nav-container">
                    <Navbar.Brand href="index.html">
                        <img
                            src={logo}
                            alt="Spotify_Logo"
                            width="131"
                            height="40"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
                    <Navbar.Collapse id="navbarNavAltMarkup">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link href="index.html"><IoHome />&nbsp; Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#"><FaBookOpen />&nbsp; Your Library</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Form inline className="mt-3">
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-secondary" size="sm"
                                    // onClick={search}
                                    >GO</Button>
                                </Form>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </div>

                <div className="nav-btn">
                    <Button className="signup-btn" variant="primary">Sign Up</Button>{' '}
                    <Button className="login-btn" variant="secondary">Login</Button>{' '}
                    <span><a href="#">Cookie Policy</a> | <a href="#">Privacy</a></span>
                </div>
            </Navbar>
        </div>
    );
}
export default NavBar