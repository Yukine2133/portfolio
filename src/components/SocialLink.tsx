import { FaGithub } from "react-icons/fa";

const SocialLink = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="flex justify-between-items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] ">
          <a
            href="https://github.com/Yukine2133"
            target="_blank"
            rel="noreferrer"
            className="flex justify-between items-center text-white w-full"
          >
            Github <FaGithub size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLink;
