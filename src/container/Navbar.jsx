import React, { useState } from "react";
import { navbarLinks } from "../data/data";
import { logo, avatar } from "../assets/index";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartInfo from "../components/CartInfo";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import { FiMenu } from "react-icons/fi";
import { CgCloseO } from "react-icons/cg";
const Navbar = () => {
  const { count } = useContext(MyContext);
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav>
      {
        showMenu ? <div className="overlay--menu" ></div> : null 
      }
      <div className="right">
        <div
          className="toggle--btn"
          onClick={() => setShowMenu((showMenu) => !showMenu)}
        >
          <i>
            <FiMenu />
          </i>
        </div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className={` ${showMenu ?  "show":null}  links`}>
          {
            showMenu ?           
            <i  className="close--toggle" onClick={()=>setShowMenu(showMenu=>!showMenu)} ><CgCloseO/></i>
            :
            null

          }
          {navbarLinks.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </div>
      </div>
      <div className="left">
        <div className="icon-cart">
          {count ? <div className="notification">1</div> : null}
          <i onClick={() => setShow((so) => !so)}>
            {" "}
            <AiOutlineShoppingCart />
          </i>
          {show ? <CartInfo show={show} setShow={setShow} /> : null}
        </div>
        <div className="avatar">
          <img src={avatar} alt="avatar"></img>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
