import { useState } from "react";
import BasketballFit from "../modals/BasketballFitModal"
import SwiftChatModal from "../modals/SwiftChatModal";


const Work = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [isSwiftOpen, setIsSwiftOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function openSwiftModal() {
    setIsSwiftOpen(true);
  }
  function closeSwiftModal() {
    setIsSwiftOpen(false);
  }


  return (
    <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
      <BasketballFit
        isOpenModal={isOpen}
        openModal={openModal}
        onClose={closeModal}
      />
      <SwiftChatModal
        isOpenModal={isSwiftOpen}
        openModal={openSwiftModal}
        onClose={closeSwiftModal}
      />
      <section className="w-full">
        <h2 id="work" className="secondary-title">My work</h2>
        <p className="section-paragraph">These are the projects I have worked on so far, with the most complex, fun projects being first, down in order to the 
        older projects i was working on when i first started coding.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/sportsman-in-the-gym-texting-on-smartphone-royalty-free-image-537230860-1546969957.jpg"
            className="w-full bg-nav h-36 lg:h-72 object-cover cursor-pointer"
            onClick={openModal}
          />
          <img
           onClick={openSwiftModal}
           src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
           className="w-full md:block bg-nav h-36 lg:h-72 object-cover cursor-pointer" 
           />
          <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80" className="w-full md:block bg-nav h-36 lg:h-72 object-cover cursor-pointer" />
          <img src="https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" className="w-full md:block bg-nav h-36 lg:h-72 object-cover cursor-pointer" />
          <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80" className="w-full md:block bg-nav h-36 lg:h-72 object-cover cursor-pointer" />
          <img src="https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80s" className="w-full md:block bg-nav h-36 lg:h-72 object-cover cursor-pointer" />
          <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="w-full md:block bg-nav h-36 lg:h-72 object-cover cursor-pointer" />
          <img src="https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" className="w-full md:block md:col-span-2 lg:col-span-1 bg-nav h-36 lg:h-72 object-cover cursor-pointer" />
        </div>
      </section>
    </div>
  )
}

export default Work