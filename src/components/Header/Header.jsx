"use client";


import { Button, Navbar } from "flowbite-react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { Avatar, Drawer, Dropdown } from "flowbite-react";
import { HiChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <nav className="border-gray-200 border-b-[1px] bg-primary py-2">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-2 px-4 ">
          <div className="flex items-center gap-3">
            <Link to='/' className="text-white hover:text-headingColor transition text-lg sm:text-xl">
              <FaSquareInstagram />
            </Link>
            <Link to='/' className="text-white hover:text-headingColor transition text-lg sm:text-xl">
              <FaFacebookSquare />
            </Link>
            <Link to='/' className="text-white hover:text-headingColor transition text-lg sm:text-xl">
              <FaLinkedin />
            </Link>
            <Link to='/' className="text-white hover:text-headingColor transition text-lg sm:text-xl">
              <FaGithubSquare />
            </Link>
          </div>
          <div className=""><h2 className="text-white font-bold">
ENJOY FREE SHIPPING ON US ORDERS OVER $50
</h2></div>
          <div className="flex items-center">
            <Link to="" className="text-sm font-semibold text-white hover:underline">
            united states (USD $)
            </Link>
            
          </div>
        </div>
      </nav>
    <header className="">
      <div className="container">
      <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl dark:text-white font-bold">Markaz <span className="text-primary">Hijabi</span></span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active className="hover:!text-[#ffb4a2]">
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
      </div>
    </header>
    </>
  )
}

export default Header
