'use client'
import { IoChevronForward } from 'react-icons/io5'

function Modal() {

    return (
        <>
            <div className="flex justify-center my-4 mx-4 lg:mx-48">

                <label
                    htmlFor="my-modal-6"
                    className="flex items-center justify-between bg-base-300 text-base-content text-lg w-full py-4 px-6 cursor-pointer"
                >
                    Here's 30% off your first order. Really! Check it out
                    <IoChevronForward />
                </label>
            </div>
        </>
    )
}

export default Modal