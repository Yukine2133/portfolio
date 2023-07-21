import githubSearchUsers from "../images/githubSearchUser.png";
import eGuru from "../images/eGuru.png";
import movieSearch from "../images/movieSearch.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: eGuru,
      demoUrl: "https://e-guru213.netlify.app/",
      codeUrl: "https://github.com/Yukine2133/landing-page",
    },
    {
      id: 2,
      src: githubSearchUsers,
      demoUrl: "https://github-search-users213.netlify.app/",
      codeUrl: "https://github.com/Yukine2133/github-search-users",
    },
    {
      id: 3,
      src: movieSearch,
      demoUrl: "https://movie-search-omdbapi213.netlify.app/",
      codeUrl: "https://github.com/Yukine2133/movie-search-omdbApi",
    },
    {
      id: 4,
      src: githubSearchUsers,
    },
  ];

  return (
    <div
      id="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-lg">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoUrl, codeUrl }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                className="rounded-md duration-200 hover:scale-105"
                src={src}
                alt="eGuru"
              />
              <div className="flex items-center justify-center">
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
