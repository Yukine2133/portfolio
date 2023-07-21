import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Experience",
    },
  ];
  return (
    <header className="flex justify-between items-center w-full h-20 bg-black px-4 text-white fixed ">
      <div>
        <h1 className="font-logo text-5xl ml-2">Vitaliy</h1>
      </div>

      <ul className="hidden  md:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="cursor-pointer  px-4 text-gray-500 hover:scale-105 font-medium pointer duration-200 "
            >
              <Link to={link} smooth duration={800}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => setMenu(!menu)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {menu ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {menu && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => {
            return (
              <li key={id} className="px-4 cursor-pointer py-6 text-4xl ">
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
};

export default Header;
