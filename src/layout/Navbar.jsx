import "../layout/style.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    
      <div className="navbar fixed backdrop-blur-xl bg-white/30 z-50 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
              
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                /> 
              </svg>
            </div>
            <nav
              tabIndex={0}
              className="menu  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              <li>
                <NavLink to="/" className={({isActive}) =>`${isActive? "text-warning" : ""}`}>Home</NavLink>
              </li>
              <li>
                
                <NavLink to="/coffees" className={({isActive}) =>`${isActive? "text-warning" : ""}`} >Coffees</NavLink>
              </li>
              <li>
              
                <NavLink to="/dashboard" className={({isActive}) =>`${isActive? "text-warning" : ""}`} >Dashboard</NavLink>
              </li>
            </nav>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <nav className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/" className={({isActive}) =>`${isActive? "text-warning" : ""}`} >Home</NavLink>
            </li>
            <li>
              
              <NavLink to="/coffees" className={({isActive}) =>`${isActive? "text-warning" : ""}`}>Coffees</NavLink>
            </li>
            <li>
            
              <NavLink to="/dashboard" className={({isActive}) =>`${isActive? "text-warning" : ""}`}>Dashboard</NavLink>
            </li>
          </nav>
        </div>
        <div className="navbar-end">
          <img
            className="w-10 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
          />
        </div>
      </div>
   
  );
};

export default Navbar;
