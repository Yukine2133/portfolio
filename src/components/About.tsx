const About = () => {
  return (
    <div
      id="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Greetings! I'm Vitaliy, a dedicated and enthusiastic frontend web
          developer, deeply enamored by the captivating world of web
          development. With nearly 5 months of hands-on experience, I'm
          continually fueled by my passion for creating exceptional digital
          experiences and my insatiable appetite for learning. Since embarking
          on my journey into web development, I've found myself utterly absorbed
          in the art of crafting visually stunning and user-friendly websites
          and web applications. My love for this field lies not only in the
          technical intricacies but also in the opportunity to touch the lives
          of people worldwide through the wonders of the internet.
        </p>

        <br />

        <p className="text-xl">
          Aside from coding, I love to learn new things, especially involving
          web development, watch anime and read manhwa.
        </p>
      </div>
    </div>
  );
};

export default About;
