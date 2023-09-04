import { useState } from "react";
import SwiftChatModal from "../modals/SwiftChatModal";
import BasketballFitModal from "../modals/BasketballFitModal";
import syncImgae from "../assets/sync.png"
import basketball from "../assets/basketballtwo.png"
import chat from "../assets/chat.png"
import gram from "../assets/gram.png"
import SyncModal from "../modals/SyncedModal";


const Work = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [isSwiftOpen, setIsSwiftOpen] = useState(false);
  let [isSyncedOPen, setIsSyncedOpen] = useState(false);





  return (
    <div className="container mt-64 flex justify-between mx-auto px-8 md:px-14 lg:px-24 w-full h-screen">
      <BasketballFitModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        demo="https://www.loom.com/share/d7b67b83c5e1436ba89c522fe884e387"
        live="https://capstone-ec476.firebaseapp.com/"
        github="https://github.com/Eshwar1212-maker/BasketballFit"
      />
      <SwiftChatModal
        isOpen={isSwiftOpen}
        onClose={() => setIsSwiftOpen(false)}
        demo="https://www.loom.com/share/2674de7ec21c40618c5750451a3a4f70"
        live="https://swiftchat-spvb.vercel.app/?callbackUrl=%2Fusers"
        github="https://github.com/Eshwar1212-maker/swiftchat"
      />
      <SyncModal
        isOpen={isSyncedOPen}
        onClose={() => setIsSyncedOpen(false)}
        demo="https://www.loom.com/share/2674de7ec21c40618c5750451a3a4f70"
        live="https://swiftchat-spvb.vercel.app/?callbackUrl=%2Fusers"
        github="https://github.com/Eshwar1212-maker/swiftchat"
      />

      <section className="w-full">
        <h2 id="work" className="secondary-title">My work</h2>
        <p className="section-paragraph">These are the projects I have worked on so far, with the most complex, fun projects being first, down in order to the
          older projects i was working on when i first started coding.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <ProjectItem
            onClick={() => setIsSyncedOpen(true)}
            imageSrc={syncImgae}
            title="Synced"
            githubLink="https://github.com/Eshwar1212-maker/Sports-Sync"
            liveLink="https://sportssync.vercel.app/"
            demoLink="https://www.loom.com/share/0deb7783ff534e1ca21d8ccca999e4f1"
            live="Live website"
            demo="Video demo"
            github="Github repository"
          />
          <ProjectItem
            onClick={() => setIsSwiftOpen(true)}
            imageSrc={chat}
            title="SwiftChat"
            githubLink="https://github.com/Eshwar1212-maker/swiftchat"
            liveLink="https://swiftchat-spvb.vercel.app/?callbackUrl=%2Fusers"
            demoLink="https://www.loom.com/share/2674de7ec21c40618c5750451a3a4f70"
            live="Live website"
            demo="Video demo"
            github="Github repository"
          />
          <ProjectItem
            onClick={() => setIsOpen(true)}
            imageSrc={basketball}
            title="BasketballFit"
            githubLink="https://github.com/Eshwar1212-maker/BasketballFit"
            liveLink="https://capstone-ec476.firebaseapp.com/"
            demoLink="https://www.loom.com/share/d7b67b83c5e1436ba89c522fe884e387"
            live="Live website"
            demo="Video demo"
            github="Github repository"
          />
          <ProjectItem
            imageSrc={gram}
            title="FamilyGram"
            liveLink="https://fsgvfsgsgbgffa.web.app/"
            live="Live website"
          />
        </div>
      </section>
    </div>
  )
}
export default Work

interface ProjectItemProps{ 
  imageSrc: string,
  onClick?: any
  github?:string
  githubLink?: string
  live?: string
  liveLink?: string
  title?:string
  demo?: string
  demoLink?: string
}

const ProjectItem = ({ imageSrc, onClick, github, githubLink, live, liveLink, demo, demoLink, title }: ProjectItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
    className="relative w-full bg-nav cursor-pointer"
    onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick} // Added onClick event here
    >
      <img src={imageSrc} className="object-cover h-full w-full" alt={`${title} image for project`} />
      {isHovered && (
        <div className="absolute inset-0 flex flex-col justify-center bg-black bg-opacity-75 text-white text-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="hidden md:text-[13px] py-2">Click for more info</p>
          <div className="flex gap-4 justify-center underline">
              <a target="blank" href={githubLink} className="" aria-label={`${title} github repo`}>{github}</a>
              <a target="blank" href={liveLink} className="" aria-label={`${title} live website`}>{live}</a>
              <a target="blank" href={demoLink} className="" aria-label={`${title} video demo`}>{demo}</a>
          </div>
        </div>
      )}
    </div>
  );
};
