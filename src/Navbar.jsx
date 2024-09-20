import React, { useState, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import iesLogo from '../assets/IES balck logo .png';
// import { AuthContext } from '../Context/isLoginUser';
import { useAppContext } from '../Context/AppContext.jsx';
import './CSS/Navbar.css';

const Navbar = () => {
  const { openChatBot } = useAppContext();
  // const { isLogin, logout } = useContext(AuthContext);
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation(); // Hook to access the current route

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  // Function to check if the current route matches either "/blogs" or "/blog/:id"
  const isBlogActive = () => {
    return location.pathname === '/blogs' || location.pathname.startsWith('/blog/');
  };

  const isOurProjectActive = () => {
    return location.pathname === '/our-projects' || location.pathname.startsWith('/project/');
  };

  const isCareerActive = () => {
    return location.pathname === '/career' || location.pathname.startsWith('/job/');
  };

  return (
    <>
      {navOpen && (
        <div className="fixed inset-0 bg-black opacity-[0.5] z-10" onClick={toggleNav}></div>
      )}
      <header className="navbar-header bg-white shadow-md w-full fixed z-30 top-0 left-0">
        <div className="container mx-auto px-4 flex flex-n justify-between items-center py-4 flex-row relative z-20">
          {/* Logo on the left */}
          <div className="flex items-center">
            <img src={iesLogo} alt="Logo" className="w-24" />
          </div>

          {/* Hamburger Menu for mobile on the right */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleNav} className="text-2xl text-gray-700 focus:outline-none">
              {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>

          {/* Menu for larger screens */}
          <nav className="hidden md:flex space-x-5 ml-auto text-gray-700 gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'font-[700]' : 'text-gray-700 hover:text-black'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/our-projects"
              className={isOurProjectActive() ? 'font-[700]' : 'text-gray-700 hover:text-black'}
            >
              Our Projects
            </NavLink>
            <NavLink
              to="/blogs"
              className={isBlogActive() ? 'font-[700]' : 'text-gray-700 hover:text-black'}
            >
              Blogs
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? 'font-[700]' : 'text-gray-700 hover:text-black'
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/career"
              className={
                isCareerActive() ? 'font-[700]' : 'text-gray-700 hover:text-black'
              }
            >
              Career
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? 'font-[700]' : 'text-gray-700 hover:text-black'
              }
            >
              About Us
            </NavLink>
          </nav>

          {/* Buttons for larger screens */}
          <div className="hidden md:flex ml-auto space-x-5">
            {/* {isLogin ? (
              <NavLink
                to="/login"
                onClick={() => logout()}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-[#2f3130] group bg-gradient-to-br from-[red] to-[red] group-hover:from-black group-hover:to-black hover:text-white rounded-full"
              >
                <span className="relative py-2.5 transition-all ease-in bg-white group-hover:bg-opacity-0 rounded-full px-6 w-32 text-center duration-300">
                  Logout
                </span>
              </NavLink>
            ) : (
              <NavLink to="/signup">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-[#2f3130] group bg-gradient-to-br from-black to-black group-hover:from-black group-hover:to-black hover:text-white rounded-full">
                  <span className="relative py-2.5 transition-all ease-in bg-white group-hover:bg-opacity-0 rounded-full px-6 w-32 duration-300">
                    Signup
                  </span>
                </button>
              </NavLink>
            )} */}
            <a href='https://wa.link/js81dg' target='_main'>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-[#2f3130] group bg-gradient-to-br from-black to-black group-hover:from-black group-hover:to-black hover:text-white rounded-full">
                <span className="relative py-2.5 transition-all ease-in duration-75 text-white group-hover:bg-opacity-0 rounded-full px-6 w-32">
                  Contact Us
                </span>
              </button>
            </a>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {navOpen && (
          <>
            <nav className="md:hidden bg-white shadow-lg absolute w-full z-20 top-full left-0">
              <div className="px-4 py-4 space-y-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? 'font-[700] block text-gray-700'
                      : 'block text-gray-700 hover:text-black'
                  }
                  onClick={toggleNav}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/our-projects"
                  className={isOurProjectActive() ? 'font-[700] block text-gray-700' : 'block text-gray-700 hover:text-black'}
                  onClick={toggleNav}
                >
                  Our Projects
                </NavLink>
                <NavLink
                  to="/blogs"
                  className={isBlogActive() ? 'font-[700] block text-gray-700' : 'block text-gray-700 hover:text-black'}
                  onClick={toggleNav}
                >
                  Blogs
                </NavLink>
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    isActive
                      ? 'font-[700] block text-gray-700'
                      : 'block text-gray-700 hover:text-black'
                  }
                  onClick={toggleNav}
                >
                  Gallery
                </NavLink>
                <NavLink
                  to="/career"
                  className={
                    isCareerActive()
                      ? 'font-[700] block text-gray-700'
                      : 'block text-gray-700 hover:text-black'
                  }
                  onClick={toggleNav}
                >
                  Career
                </NavLink>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    isActive
                      ? 'font-[700] block text-gray-700'
                      : 'block text-gray-700 hover:text-black'
                  }
                  onClick={toggleNav}
                >
                  About Us
                </NavLink>
                {/* {isLogin ? (
                  <NavLink
                    to="/login"
                    className="block bg-black-800 w-full hover:text-white px-4 py-2 border-[red] border-2 rounded-full text-black text-center hover:bg-[red] transition duration-300"
                    onClick={() => {
                      logout();
                      toggleNav();
                    }}
                  >
                    Logout
                  </NavLink>
                ) : (
                  <NavLink
                    to="/signup"
                    className="block bg-black-800 hover:text-white px-4 py-2 border-black border-2 rounded-full text-black text-center hover:bg-black transition duration-300"
                    onClick={toggleNav}
                  >
                    Signup
                  </NavLink>
                )} */}
                <a
                  href="tel:03338400106"
                  className="block bg-black-800 hover:text-white px-4 py-2 border-black border-2 rounded-full text-black text-center hover:bg-black transition duration-300"
                  onClick={toggleNav}
                >
                  Call Now
                </a>
                <a href='https://wa.link/js81dg' target='_main'
                  className="block w-full bg-black-800 text-white px-4 py-2 border-black border-2 rounded-full text-center bg-black transition duration-300"
                  onClick={()=> {toggleNav(); openChatBot()}}
                >
                  Contact Us
                </a>
              </div>
            </nav>
          </>
        )}
      </header>
    </>
  );
};

export default Navbar;
