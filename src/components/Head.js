import React from "react";
import { Link } from 'react-router-dom'

export default function Head() {
  return (
    <>
    <div className="container">
      <img src="" className="logo" alt="LEVIOOSA." />
      <span className="icons">
        <Link to="#" id="desk1">
          <i className="fa fa-user"></i>
        </Link>
        <Link to="#" id="desk2">
          <i className="fa fa-shopping-cart"></i>
          <span className="cart_item">3</span>
        </Link>
        {/* <Link id="desk3" onClick="openSearch()">
          <i className="fa fa-search"></i>
        </Link> */}
      </span>
      {/* <div className="topnav" id="myTopnav">
        <Link to="#home" className="active animate">
          Home
        </Link>
        <Link to="#news" className="animate">
          News
        </Link>
        <Link to="#contact" className="animate">
          Contact
        </Link>
        <div className="dropdown">
          <button className="dropbtn animate">
            Dropdown
            
          </button>
          <div className="dropdown-content animate">
            <Link to="#">Link 1</Link>
            <Link to="#">Link 2</Link>
            <Link to="#">Link 3</Link>
          </div>
        </div>
        <Link to="#about" className="animate">
          About
        </Link>
        <Link to="#" id="mob1" className="animate">
          <i className="fa fa-user"></i>
        </Link>
        <Link to="#" id="mob2" className="animate">
          <i className="fa fa-shopping-cart"></i>
          <span className="cart_item">3</span>
        </Link>
        <Link id="mob3" className="animate" onClick="openSearch()">
          <i className="fa fa-search"></i>
        </Link>
       
      </div> */}

      <table>
        <tr>
          <td>
            <section>
              <h1 className="title">Lorem ipsum dolor sit amet</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <canvas id="canvas" width="100" height="100"></canvas>
            </section>
          </td>
          <td>
            <div className="cards">
              <div className="card_part card_part-one" ><img src="../images/r1.png" alt="product" /></div>

              <div className="card_part card_part-two"><img src="../images/r3.png" alt="product" /></div>

              <div className="card_part card_part-three"><img src="../images/r1.png" alt="product" /></div>

              <div className="card_part card_part-four"><img src="../images/r3.png" alt="product" /></div>
            </div>
          </td>
        </tr>
      </table>
    </div>

</>
  );
}
