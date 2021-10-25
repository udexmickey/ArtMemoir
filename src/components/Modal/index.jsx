import { useRef, useEffect } from "react";
import "./modal.style.scss";

export default function CustomModal({ modalStyle, className, noClose, children, show, onClose, backdropStyle }){
    const modalRef = useRef(null);

    useEffect(
        () => {
            if (show) {
                modalRef.current.classList.add('visible');
            }
            else {
                modalRef.current.classList.remove('visible');
            }
        },
        [show]
    );
    return (
        <>
            <div 
                ref={modalRef}
                style={backdropStyle}
                className={`modal__wrap ${className && className}`}
                onClick={(e) => {if(!(e.target instanceof SVGElement) && e.target.className.includes('modal__wrap')) {onClose()}}}
            >
                    {onClose && show && !noClose ? <button
                        onClick={onClose}
                        style={{ width: 60, height: 40, position: 'fixed', top: 0, right: 0, margin: '1rem', zIndex : 20000, border:"none" ,background:"none", color:"white" , cursor:"pointer" }}
                >
                    close
                </button> : ""}
                <div
                    className="modal"
                >
                    {children}
                </div>    
            </div>
        </>
    )
}
