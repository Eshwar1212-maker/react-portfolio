
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
        <a href="#clients">About</a>
        <a href="#hire"><button className="px-6 py-2 bg-theme font-bold">Hire Me</button></a>
        </div>
        <div className="md:hidden">
            <img className="w-[49px] h-[49px] text-white bg-white rounded-full" src="https://www.svgrepo.com/show/452302/hamburger-menu.svg"/>
        </div>
    </div>
</header>
  )
}

export default Nav