import { useState, useRef } from "react";
import useOnClickOutside from "@/utils/useOnClickOutside";

const Modal = () => {
    const [openModal, setOpenModal] = useState(false);
    const ref = useRef();
    useOnClickOutside(ref, openModal, () => setOpenModal(false));

    return (
        <div>
            <button onClick={() => setOpenModal(true)}>Modal</button>
            {openModal && (
                <div ref={ref}>
                    <span onClick={() => setOpenModal(false)}>X</span>
                    <div>Modal content here</div>
                </div>
            )}
        </div>
    );
};

export default Modal;