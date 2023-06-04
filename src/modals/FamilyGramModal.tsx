import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

interface ModalProps {
    isOpenModal?: boolean;
    onClose: any;
    openModal?: () => void;
}
export default function FamilyGram({ isOpenModal, onClose, openModal }: ModalProps) {
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
                                        FamilyGram
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
                                    <p className='text-[16px]'>React · Tailwind CSS · Firebase/Firestore</p>
                                </div>

                                <div className="mt-2 flex justify-between gap-5">
                                    <ul className='text-sm list-disc pl-5 w-3/5'>
                                        <li>Created a website where people can talk about what is on their minds using React, Tailwind CSS, and Firebase.</li>
                                     
                                    </ul>
                                    <div className='flex flex-col text-sm'>
                                        <img className=' w-[430px] h-[390px]' src='https://i.insider.com/59d9fd2884da9579bc3a5ff4?width=1136&format=jpeg' />
                                        <a className='text-center' target="/blank" href="https://fsgvfsgsgbgffa.web.app/">
                                            <button className='underline'>Live Website</button>
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
