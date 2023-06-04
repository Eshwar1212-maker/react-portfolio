import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

interface ModalProps {
  isOpenModal?: boolean;
  onClose: any;
  openModal?: () => void;
}
export default function SwiftChatModal({ isOpenModal, onClose, openModal }: ModalProps) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Transition appear show={isOpenModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={onClose}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-[800px] min-h-1/2 md:min-h-3/4 lg:min-h-full p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className='flex justify-between'>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    SwiftChat
                  </Dialog.Title>
                  <div className="">
                    <button
                      type="button"
                      className="text-2xl"
                      onClick={onClose}
                    >
                      X
                    </button>
                  </div>
                </div>
                <div className=''>
                  <p className='text-[16px]'>Nextjs · TypeScript · Prisma · MongoDB · HeadlessUI · Pusher · Nextauth · Tailwind CSS · React.js</p>
                </div>

                <div className="mt-2 flex justify-between gap-5">
                  <ul className="text-sm list-disc pl-5 w-3/5">
                    <li>
                      Developed a real-time chat application using Next.js 13, leveraging its modern routing system and server-side
                      rendering features to improve performance and provide a seamless user experience.
                    </li>
                    <li>
                      Designed and implemented user authentication using Next Auth with Google, Github, email, and password options
                      to ensure secure access.
                    </li>
                    <li>
                      Integrated Pusher for real-time web socket communication, enabling instant message updates across all users
                      within a specific chat group.
                    </li>
                    <li>
                      Utilized Cloudinary for efficient image upload and management, enhancing the app's multimedia capabilities.
                    </li>
                    <li>
                      Engineered a feature allowing users to create group chats and message other users, enhancing user engagement and interaction.
                    </li>
                    <li>
                      Leveraged Zustand for global state management, ensuring reliable and consistent user data across the application.
                    </li>
                    <li>
                      Employed Tailwind CSS for a responsive, mobile-first design, and incorporated Headless UI to maintain excellent keyboard accessibility
                      and HTML semantics, enhancing the app's usability across various devices and user needs.
                    </li>
                  </ul>
                  <div className="flex flex-col text-sm">
                    <img className="w-[430px] h-[390px]" src="https://www.si.com/.image/t_share/MTk0NDYwOTQ0Nzc0OTk3NTA5/workout-apps-for-men_hero.png" />
                    <a className="text-center" target="_blank" href="https://swiftchat-spvb.vercel.app/?callbackUrl=%2Fconversations">
                      <button className="underline">Live Website</button>
                    </a>
                    <button className="underline">Video demo</button>
                    <a className="text-center" target="_blank" href="https://github.com/Eshwar1212-maker/swiftchat">
                      <button className="underline">Github repository</button>
                    </a>
                  </div>
                </div>

              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
