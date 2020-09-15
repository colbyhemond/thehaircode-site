import NavButton from "./NavButton";
import styles from "./navbar.module.css";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const NavBar = props => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="">
      <Link href="/">
      <img className={styles.logo} src='/blended-logo.jpg'></img>
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {props.navButtons.map(button => (
        <div className={styles.button} key={button.path}>
          <NavButton // key={button.path.toString()} 
          path={button.path} label={button.label} icon={button.icon} />
        </div>
        ))}

      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;