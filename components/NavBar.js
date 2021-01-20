import NavButton from "./NavButton";
import styles from "./navbar.module.css";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"


const NavBar = props => (

  <Navbar className={styles.navbar} expand="lg">
    <Navbar.Brand href="">
      <Link href="/">
      <img className={styles.logo} src='/assets/hc_logo_white.svg' onMouseOver={e => e.currentTarget.src = '/assets/hc_logo_closed_white.svg' } onMouseOut={e => e.currentTarget.src = '/assets/hc_logo_white.svg' }></img>
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle className={styles.navbartoggler} aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
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