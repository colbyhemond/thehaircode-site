import NavButton from "./NavButton";
// import styles from "./navbar.module.css";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Social from "./Social"
import { attributes } from '../content/settings.md';

const Footer = props => {
    let { socialmedia, contact } = attributes
    return (
    <>
    <div className="footer">
        <div className="container-fluid px-5">
            <div className="row mt-5">
                    <div className="col-12 col-sm-6 col-lg-3 ">
                        <div className="row justify-content-center my-3">
                            <p>
                            <Social dark facebook={{url: socialmedia.facebook}}
                                         twitter={{url: socialmedia.twitter}}
                                         instagram={{url: socialmedia.instagram}} />
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 my-3 mx-4 mx-sm-0" id="location">
                        <div className="row">
                            <p>Hours:<br/>
                                Mon-Sun 8:00am - 6:00pm</p>
                            </div>
                            
                        <div className="row">
                            <address>
                            <p>{contact.name}<br/>
                         
                            <a href="maps:https://www.google.com/maps/place/901+W+Front+St,+Traverse+City,+MI">{contact.address1}<br/>{contact.address2}<br/>
                            {contact.city}, {contact.state} {contact.zip}</a>
                            </p>
                       
                            <p>
                            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                            </p>
                            <p>
                            <a href={`mailto:${contact.email}`}>{contact.email}</a>
                            </p>
                            </address>
                        </div>
                       
                    </div>
                    <div className="col-12 col-lg-6 my-3">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.8388249781706!2d-85.6404381844554!3d44.76370167909892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x881e3283e19225e9%3A0x2ea7aa8f08e8b85b!2sThe%20Hair%20Code%20Salon!5e0!3m2!1sen!2sus!4v1615654443648!5m2!1sen!2sus" width="100%" height="100%" loading="lazy"></iframe>
                    </div>
            </div>
            <div className="row-fluid">
                <Navbar expand="lg" className="py-5 navbar-footer d-flex justify-content-center">
                    <Nav className="mx-auto">
                        {props.navButtons.map(button => (
                        <div key={button.path}>
                            <NavButton path={button.path} label={button.label} icon={button.icon} />
                        </div>
                        ))}
                    </Nav>

                </Navbar>
            </div>
            <div className="row-fluid">
                <div className="d-flex justify-content-center py-2 copyright">
                The Haircode Salon Copyright { year } { props.siteTitle }
                </div>
            </div>
        </div>

    </div>
    <style type="text/css"> {`

    .copyright {
        color: var(--white-ch);
    }

    .footer {
        background-color: var(--black-ch)
    }

    p, p a {
        color: var(--white-ch)
    }


    `}</style>
    </>
    )};

let year = new Date().getFullYear();

export default Footer;