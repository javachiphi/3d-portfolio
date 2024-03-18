import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-14 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md "
      >
        <p className="blue-gradient_text">Home</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-black-500'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-black-500'
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
