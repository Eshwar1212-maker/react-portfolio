const Nav = () => {
  return (
    <header className="py-6">
      <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div className="text-lg font-bold">
          Eshwar Tangirala
        </div>
        <div className="hidden md:flex space-x-11 items-center">
          <a href="#" className="text-selected-text">Home</a>
          <a href="#work">My Work</a>
          <a href="#clients">Clients</a>
          <a href="#about">About</a>
          <a href="#hire"><button className="px-6 py-2 bg-theme font-bold">Hire Me</button></a>
        </div>
        <div className="md:hidden">
        <a href="#hire"><button className=" p-2 py-3 rounded-3xl bg-white font-bold text-black">Contact</button></a>

        </div>
      </div>
    </header>
  )
}

export default Nav
