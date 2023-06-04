
const Clients = () => {
  return (
    <div className="container mt-64 flex justify-between mx-auto px-8 md:px-14 lg:px-24 w-full h-screen">
    <section className="w-full">
        <h2 id="clients" className="secondary-title">Clients</h2>
        <div className="space-y-12 my-16">

            <div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                <div className="mb-6 lg:mb-0">
                    <img
                    className="rounded-lg w-64"
                     src="data:image/png;base64,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"/>
                </div>

                <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
                    <h3 className="text-white text-3xl font-semibold"><a className="underline" target="blank" href="https://www.linkedin.com/in/momatio/">Momatio Digital Services</a></h3>

                    <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                        <div className="badge">UI/UX</div>
                        <div className="badge">Frontend development</div>
                        <div className="badge">Tailwind CSS</div>
                    </div>
                    <p className="section-paragraph">
                        I’ve had the pleasure of working <a className="underline" target="blank" href="https://www.linkedin.com/in/momatio/">Momat.io </a> 
                        on Fiverr, helping them with issues related to Tailwind CSS on their content delivery network. 
                    </p> 
                </div>

            </div>
        </div>

    </section>
</div>
  )
}

export default Clients