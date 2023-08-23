


const About = () => {
  return (
    <div className="container flex justify-between mt-[90px] mx-auto px-8 md:px-14 lg:px-24 w-full h-[100vh]">
      <section className="w-full">
        <h2 id="about" className="secondary-title">About Me</h2>
        <p className="section-paragraph">
          I am a passionate software developer proficient in both frontend and backend technologies. From the moment I began coding,
          I was captivated by the idea of building applications that add value to people's lives, including my own. The ability to
          create solutions with code felt like a superpower, and the process of continuous learning is both immensely enjoyable and rewarding.
          Due to a chronic autoimmune disorder, I was unable to complete a traditional four-year degree. I acquired my skills through a
          combination of self-learning and by graduating from a comprehensive full-stack engineering coding bootcamp at the FlatIron School in May 2023.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col">
            <img src="https://miro.medium.com/v2/resize:fit:2000/1*X5z2L4zyEqHUVmCCj2wsPg.png" className="w-full bg-nav h-36 lg:h-72 object-cover cursor-pointer" />
            <p className="section-paragraph">A laptop and some coffee is all I need!</p>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">Skills</h3>
            <p className="section-paragraph">I have a solid understanding of software engineering principles and a knack for solving complex problems.
              I've worked programming languages such as Typescript, JavaScript, Java, and Python.
              The frameworks I work with are React, NextJS, Node.js, NestJS, Flask and Express. My go to choice for styling 
              my applications is TailwindCSS</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;
