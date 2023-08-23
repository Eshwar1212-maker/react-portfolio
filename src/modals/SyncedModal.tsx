import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoClose } from "react-icons/io5";

interface SyncModalProps {
  isOpen?: boolean;
  onClose: () => void;
  demo: string;
  live: string;
  github: string;
}

const SyncModal: React.FC<SyncModalProps> = ({ isOpen, onClose }) => {
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
                  Synced
                </Dialog.Title>
              </div>

              <p className="mt-4 text-[16px]">
                Nextjs · Typescript · Prisma · Pusher · MongoDB · Tailwind CSS ·
                FullCalenderjs · Shadcn-ui · Tremor
              </p>

              <div className="mt-4 flex flex-wrap gap-5">
                <ul className="flex-grow text-sm list-disc pl-5">
                  <li>
                    Leveraged Nextjs 13's app router to make an all in one
                    workout app for athletes. This project has a full messaging
                    system, calender, workout log, and a dashboard to track user
                    progress.
                  </li>
                  <li>
                    Used prisma and mongodb for a highly scalable backend
                    allowing complex queries for all the main features of the
                    app.
                  </li>
                  <li>
                    Used FullCalender to render a calender where athlets can
                    track everything related to their sport, such as practices,
                    games, events, etc.
                  </li>
                  <li>
                    Created a workout log and dashboard feature, for users to be
                    able to track their workouts, and also add them to their
                    calender. Utilized Tremor for visual charts showcasing
                    progress in the gym.
                  </li>
                  <li>
                    Used Pusher.io for a seamless messaging system, so athletes
                    can create group chats with their team or friends. Allowing
                    them to schedule events easily.
                  </li>
                  <li>
                    Used Tailwind CSS and Shadcn-ui for a seamless user
                    interface prioritizing semantic hmtl and accesibility.
                  </li>
                </ul>

                <div className="flex flex-col w-1/3 text-sm">
                  <a
                    className="text-center mt-2"
                    target="_blank"
                    href="https://sportssync.vercel.app/"
                    aria-label="live website"
                  >
                    <button className="underline">Live Website</button>
                  </a>
                  <a
                    className="text-center mt-2"
                    target="_blank"
                    href="https://www.loom.com/share/0deb7783ff534e1ca21d8ccca999e4f1"
                    aria-label="video demo"
                  >
                   <button className="underline mt-2">Video demo</button>
                  </a>
                  <a
                    className="text-center mt-2"
                    target="_blank"
                    href="https://github.com/Eshwar1212-maker/Sports-Sync"
                    aria-label="github repository"
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

export default SyncModal;
