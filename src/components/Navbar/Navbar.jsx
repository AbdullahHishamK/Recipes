import { useState } from 'react';
import logo from './../../assets/logo-BfNap0Pe.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200">
        <div className={`fixed top-0 z-50 left-0 w-64 h-screen transition-transform transform bg-gray-50 overflow-y-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}>
          <div className="h-full px-3 py-4">
            <div>
              <img src={logo} alt="logo" className="w-full" />
            </div>
            <ul className="space-y-4 mt-6 font-medium">
              <li className="px-4 bg-[#f29724] hover:scale-105 hover:shadow-xl hover:shadow-orange-50 transition-all mb-6 rounded-xl text-lg shadow-lg shadow-orange-300 font-semibold text-white">
                <NavLink className="flex items-center p-2 rounded-lg" to="/home" data-discover="true" onClick={toggleNavbar}>
                  <i className="fa-solid fa-utensils"></i>
                  <span className="flex-1 ms-3 whitespace-nowrap">Meals</span>
                </NavLink>
              </li>
              <li className="px-4 border hover:scale-105 hover:shadow-xl hover:shadow-orange-50 transition-all border-gray-300 rounded-xl text-lg">
                <a className="flex items-center p-2 rounded-lg" href="#/" data-discover="true" onClick={toggleNavbar}>
                  <i className="fa-solid fa-utensils"></i>
                  <span className="flex-1 ms-3 whitespace-nowrap">Ingredients</span>
                </a>
              </li>
              <li className="px-4 border hover:scale-105 hover:shadow-xl hover:shadow-orange-50 transition-all border-gray-300 rounded-xl text-lg">
                <a className="flex items-center p-2 rounded-lg" href="#/" data-discover="true" onClick={toggleNavbar}>
                  <i className="fa-solid fa-utensils"></i>
                  <span className="flex-1 ms-3 whitespace-nowrap">Area</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sm:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200">
          <img src={logo} alt="logo" className="w-24" />
          <button onClick={toggleNavbar} className="text-gray-500 focus:outline-none">
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;