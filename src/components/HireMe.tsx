
import {AiFillLinkedin, AiFillGithub, AiOutlineCopy} from 'react-icons/ai';

const HireMe = () => {

    function copy() {
        navigator.clipboard.writeText("eshwartangirala11@gmail.com");
      }
      


  return (
    <div className="container flex justify-center items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
     <section id="contact" className="py-48 text-center items-center">
      {/* HEADINGS */}
      <div
  
        className="flex w-full justify-center text-center"
      >
        <div className="text-center items-center">
          <p className="font-playfair font-semibold text-4xl">
          <h2 id="clients" className="secondary-title">Hire me</h2>
          </p>
          <div className="flex my-5">
          </div>
        </div>
      </div>
      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-center gap-16 mt-5 items-center text-center">
        <div
          className="mt-10 md:mt-0"
        >
          <div
            className="py-[60px] w-full lg:h-screen p-2 m-auto text-white items-center text-center"
            id="contact"
          >
            <div className="flex-col text-center items-center max-w-[1000px] m-auto flex justify-center gap-11 ">
              <h1 className="text-gray-400 font-bold">
                I am very active on my Linkedin and Email, feel free to get in
                touch!
              </h1>
              <div className="cursor-pointer">
                <a
                  className=""
                  target="/blank"
                  href="https://www.linkedin.com/in/eshwar-tangirala-08973316b/"
                >
                  <AiFillLinkedin size={50} />
                </a>
              </div>
              <div className="flex flex-row pt-3">
                <p
                  onClick={copy}
                  className="text-xl font-thirdFont cursor-pointer"
                >
                  eshwartangirala11@gmail.com
                </p>
                <AiOutlineCopy
                  onClick={copy}
                  className="cursor-pointer hover:text-gray-400"
                  size={30}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /> <br /> <br /> <br />
    </section>
</div>
  )
}

export default HireMe