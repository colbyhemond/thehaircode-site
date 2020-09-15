import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faMapMarkerAlt,
  faUser,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

const navButtons = [
  {
    label: "Home",
    path: "/"
  },
  {
    label: "About",
    path: "/about"
  },
  {
    label: "Services",
    path: "/services"
  },
  {
    label: "Order Inquiries",
    path: "/order"
  },
  {
    label: "Contact",
    path: "/contact"
  },
  {
    label: "FAQ",
    path: "/faq"
  }
];

export default navButtons;