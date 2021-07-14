import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar(props) {
  // function toggleNav() {
  //   animateSlider();
  //   const burgerButton = document.getElementById("burger");
  //   burgerButton.classList.toggle("is-active");
  // }

  // function animateSlider() {

  //   const list = document.getElementsByClassName("list")[0];
  //   list.childNodes.forEach((e, index) => {
  //     if (e.style.animation) e.style.animation = "";
  //     else
  //       e.style.animation = `listItemFade 0.5s ease forwards ${
  //         index / 5 + 0.3
  //       }s`;
  //   });
  // }

  return (
    <nav className="nav-wrapper">
      <div id="burger" class="ico-btn" >
        <span class="ico-btn__burger"></span>
      </div>

      {/* <Link className="nav-brand" to="/">iCinema</Link> */}

      <div id="slider" className="slider">
        <ul className="list">
          <Link  to="/movies">
            Home
          </Link>
              <Link  to="/login">
                Login
              </Link>

              <Link  to="/resigter">
                Register
              </Link>
        </ul>
      </div>
    </nav>
  );
}

// mapStateToProps

// mapDispatchToProps

export default (Navbar);
