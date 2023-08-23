import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  demo: string;
  live: string;
  github: string;
}

const SwiftChatModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 flex items-center justify-center"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute inset-0 bg-[#2f2f2f] bg-opacity-80 transition-opacity" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <Dialog.Panel className="relative z-10 transform overflow-hidden rounded-lg px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:max-w-lg sm:p-6 bg-white">
            <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
              <button
                type="button"
                className="rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={onClose}
              >
                <span className="sr-only">Close</span>
                <IoClose className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="w-full">
              <div className="flex justify-between">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Sports Sync
                </Dialog.Title>
              </div>

              <p className="mt-4 text-[16px]">
                TypeScript · Nextjs · Prisma · MongoDB · HeadlessUI · Pusher ·
                Nextauth · Tailwind CSS · React.js
              </p>

              <div className="mt-4 flex flex-wrap gap-5">
                <ul className="flex-grow text-sm list-disc pl-5">
                  <li>
                    SwiftChatSwiftChat Developed a real-time chat application
                    using Next.js 13, leveraging its modern routing system and
                    server-side rendering features to improve performance and
                    provide a seamless user experience.{" "}
                  </li>
                  <li>
                    Designed and implemented user authentication using Next Auth
                    with Google, Github, email, and password options to ensure
                    secure access.
                  </li>
                  <li>
                    Integrated Pusher for real-time web socket communication,
                    enabling instant message updates across all users within a
                    specific chat group.{" "}
                  </li>
                  <li>
                    Engineered a feature allowing users to create group chats
                    and message other users, enhancing user engagement and
                    interaction.{" "}
                  </li>
                  <li>
                    Employed Tailwind CSS for a responsive, mobile-first design,
                    and incorporated Headless UI to maintain excellent keyboard
                    accessibility and HTML semantics, enhancing the app's
                    usability across various devices and user need{" "}
                  </li>
                </ul>

                <div className="flex flex-col w-1/3 text-sm">
                  <a
                    className="text-center mt-2"
                    target="_blank"
                    href="https://swiftchat-spvb.vercel.app/?callbackUrl=%2Fconversations"
                  >
                    <button className="underline">Live Website</button>
                  </a>
                  <button className="underline mt-2">Video demo</button>
                  <a
                    className="text-center mt-2"
                    target="_blank"
                    href="https://github.com/Eshwar1212-maker/swiftchat"
                  >
                    <button className="underline">Github repository</button>
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default SwiftChatModal;
