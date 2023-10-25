import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import Logo2 from "../img/logo2.svg";
import { BsBag } from "react-icons/bs";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  
  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 lg:px-8 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
        <div className="w-[40px]">
            <img
              src={isActive ? Logo : Logo2}
              alt=""
            />
          </div>
        </Link>

        {/* Links to other pages */}
        <div className="flex">
          <Link to="/" className={`ml-6 ${isActive ? "text-black" : "text-white"}`}>Home</Link>
          <Link to="/shop" className={`ml-6 ${isActive ? "text-black" : "text-white"}`}>Shop</Link>
          <Link to="/" className={`ml-6 ${isActive ? "text-black" : "text-white"}`}>Contact</Link>
          <Link to="/" className={`ml-6 ${isActive ? "text-black" : "text-white"}`}>About Us</Link>
        </div>


        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className={`text-2xl ${isActive ? "text-black" : "text-white"}`}  />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
