import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

interface ModalProps {
    isOpenModal?: boolean;
    onClose: any;
    openModal?: () => void;
}
export default function BasketballFit({ isOpenModal, onClose, openModal }: ModalProps) {
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
                                        BasketballFit
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
                                    <p className='text-[16px]'>React, Typescript, Nodejs, Nestjs, Mongodb, Firebase/Firestore</p>
                                </div>

                                <div className="mt-2 flex justify-between gap-5">
                                <ul className='text-sm list-disc pl-5 w-3/5'>
                                        <li>Engineered a workout and productivity application catered for basketball players, using React, TypeScript,
                                            Node.js, Nest.js, MongoDB, Firebase/Firestore, and Tailwind CSS.</li>
                                        <li>Developed a RESTful API with Nest.js, enabling users to store and manage personalized workout routines
                                            on their calendar, complete with visual charts for monthly workout intensity and consistency reports, all
                                            persistently stored using MongoDB.</li>
                                        <li>Incorporated a group chat feature using Firebase/Firestore, allowing users to exchange messages with
                                            their teams, plan games, and cultivate team collaboration and engagement.</li>
                                        <li>Implemented a dedicated forum section with Firestore, creating an interactive platform for authenticated
                                            users to engage in insightful basketball-related discussions, fostering a sense of community.</li>
                                        <li>Applied lazy loading techniques to enhance application speed, reduce bundle size, and only load routes based on user requests,

                                            contributing to an optimized and responsive user experience.</li>
                                        <li>Utilized the React Context API for global state management, ensuring consistent and seamless access to user data across the application.</li>
                                        <li>Prioritized a responsive, mobile-first design approach using Tailwind CSS, along with the implementation of a user-friendly light
                                            and dark mode toggle via the React Context API, ensuring an appealing and adaptable user interface.</li>
                                    </ul>
                                    <div className='flex flex-col text-sm'>
                                    <img className=' w-[430px] h-[390px]' src='https://www.si.com/.image/t_share/MTk0NDYwOTQ0Nzc0OTk3NTA5/workout-apps-for-men_hero.png' />
                                        <a className='text-center' target="/blank" href="https://capstone-ec476.firebaseapp.com/">
                                            <button className='underline'>Live Website</button>
                                        </a>
                                        <button className='underline'>Video demo</button>
                                        <a className='text-center' target="/blank" href="https://github.com/Eshwar1212-maker/BasketballFit">
                                        <button className='underline'>Github repository</button>

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
