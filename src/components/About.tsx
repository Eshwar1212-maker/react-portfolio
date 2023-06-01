


const About = () => {
  return (
    <div className="container mt-32 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full h-[100vh]">
      <section className="w-full">
          <h2 id="about" className="secondary-title">About Me</h2>
          <p className="section-paragraph">I'm a passionate software developer with experience in both frontend and backend technologies. Over the years, I've been involved in the full software development lifecycle, including ideation, design, development, testing, deployment, and support.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <img src="https://miro.medium.com/v2/resize:fit:2000/1*X5z2L4zyEqHUVmCCj2wsPg.png" className="w-full bg-nav h-36 lg:h-72 object-cover cursor-pointer" />
              <div className="md:col-span-2 lg:col-span-1">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">Skills & Experience</h3>
                  <p className="section-paragraph">I have a solid understanding of software engineering principles and a knack for solving complex problems. I've worked with various programming languages such as JavaScript, Python, and C++, and I'm experienced with React, Node.js, and Django frameworks. I also have experience in relational and NoSQL databases, API development, and deployment on cloud platforms.</p>
              </div>
          </div>
      </section>
    </div>
  )
}

export default About;
