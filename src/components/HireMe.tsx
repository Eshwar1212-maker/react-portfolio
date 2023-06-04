import {AiFillLinkedin, AiOutlineCopy} from 'react-icons/ai';

const HireMe = () => {

    function copy() {
        navigator.clipboard.writeText("eshwartangirala11@gmail.com");
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <section className="rounded-lg shadow-lg p-8 md:p-16 mx-5">
                <div className="text-center">
                    <h1 id="hire" className="font-bold text-gray-400 text-xl mb-5">
                        I am very active on my Linkedin and Email, feel free to get in touch!
                    </h1>
                    <div className="flex justify-center items-center space-x-3 mb-5">
                        <a
                            className=""
                            target="/blank"
                            href="https://www.linkedin.com/in/eshwar-tangirala-08973316b/"
                        >
                            <AiFillLinkedin size={50} />
                        </a>
                        <p
                            onClick={copy}
                            className="text-xl font-thirdFont cursor-pointer border-b-2 border-gray-300 inline"
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
            </section>
        </div>
    )
}

export default HireMe
