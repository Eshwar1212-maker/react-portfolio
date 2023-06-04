import { useState } from "react";
import BasketballFit from "../modals/BasketballFitModal"
import SwiftChatModal from "../modals/SwiftChatModal";
import FamilyGram from "../modals/FamilyGramModal";


const Work = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [isSwiftOpen, setIsSwiftOpen] = useState(false);
  let [isFamilyOpen, setIsFamilyOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
  function openFamily() {
    setIsFamilyOpen(true);
  }
  function closeFamily() {
    setIsFamilyOpen(false);
  }



  return (
    <div className="container mt-64 flex justify-between mx-auto px-8 md:px-14 lg:px-24 w-full h-screen">
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
         <FamilyGram
        isOpenModal={isFamilyOpen}
        openModal={openFamily}
        onClose={closeFamily}
      />
      <section className="w-full">
        <h2 id="work" className="secondary-title">My work</h2>
        <p className="section-paragraph">These are the projects I have worked on so far, with the most complex, fun projects being first, down in order to the
          older projects i was working on when i first started coding.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <ProjectItem
            onClick={openModal}
            imageSrc="https://hips.hearstapps.com/hmg-prod/images/sportsman-in-the-gym-texting-on-smartphone-royalty-free-image-537230860-1546969957.jpg"
            title="BasketballFit"
          />
          <ProjectItem
            onClick={openSwiftModal}
            imageSrc="https://pittnews.com/wp-content/uploads/2021/12/DSC_8799-1-900x601.jpg
            "
            title="SwiftChat"
          />
          <ProjectItem
            onClick={openFamily}
            imageSrc="https://i.insider.com/59d9fd2884da9579bc3a5ff4?width=1136&format=jpeg"
            title="FamilyGram"
          />
        </div>
      </section>
    </div>
  )
}
export default Work

const ProjectItem = ({ imageSrc, title, onClick }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative w-full bg-nav h-36 lg:h-72 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick} // Added onClick event here
    >
      <img src={imageSrc} className="w-full h-full object-cover" alt={title} />
      {isHovered && (
        <div className="absolute inset-0 flex flex-col justify-center bg-black bg-opacity-75 text-white text-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-[13px] py-2">Click for more info</p>
        </div>
      )}
    </div>
  );
};

