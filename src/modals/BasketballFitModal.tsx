

import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IoClose } from 'react-icons/io5'

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  demo: string
  live: string
  github: string
}

const BasketballFitModal: React.FC<ModalProps> = ({ isOpen, onClose}) => {
  return (
<Transition.Root show={isOpen} as={Fragment}>
  <Dialog as="div" className="fixed z-50 inset-0 flex items-center justify-center" onClose={onClose}>
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-100"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className="absolute inset-0 bg-[#2f2f2f] bg-opacity-80 transition-opacity"
      />
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
      <Dialog.Panel
        className="relative z-10 transform overflow-hidden rounded-lg px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:max-w-lg sm:p-6 bg-white"
      >
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
            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
              BasketballFit
            </Dialog.Title>
          </div>

          <p className="mt-4 text-[16px]">
          TypeScript · Nodejs · NestJS · Cloud Firestore · MongoDB · Firebase · React.js
          </p>

          <div className="mt-4 flex flex-wrap gap-5">
            <ul className="flex-grow text-sm list-disc pl-5">
            <li>
            Developed a REST API with NestJS, enabling users to manage personalized workout routines on their calendar, complete with visual charts for monthly workout consistency/intensity reports, persistently stored in MongoDB.
                    </li>
                    <li>
                    complete with visual charts for monthly workout consistency/intensity reports, persistently stored in MongoDB.
Implemented a dedicated forum section with Firestore, creating an interactive platform for authenticated users to engage in insightful basketball-related discussions, fostering a sense of community.

                    </li>
                    <li>
                    Applied lazy loading techniques to improve application speed, reduce bundle size, and enhance user experience.
                    </li>
                    <li>
                    Utilized the React Context API for global state management, accessing user data across the application, including a light and dark mode, persisted for every user using the browser’s local storage. 
                    </li>
            </ul>

            <div className="flex flex-col w-1/3 text-sm">
              <a className="text-center mt-2" target="_blank" href="https://swiftchat-spvb.vercel.app/?callbackUrl=%2Fconversations" aria-label='live website'>
                <button className="underline">Live Website</button>
              </a>
              <a className="text-center mt-2" target="_blank" href="https://www.loom.com/share/d7b67b83c5e1436ba89c522fe884e387" aria-label='video demo'>
              <button className="underline mt-2">
                Video demo
              </button>
              </a>


              <a className="text-center mt-2" target="_blank" href="https://github.com/Eshwar1212-maker/swiftchat" aria-label='github repository'>
                <button className="underline">Github repository</button>
              </a>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Transition.Child>
  </Dialog>
</Transition.Root>

  )
}

export default BasketballFitModal;