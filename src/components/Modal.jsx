import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      className="rounded-xl p-8 border-b-4 bg-beige border-navy backdrop:bg-stone-900/90"
      ref={dialog}
    >
      <div className="flex flex-col gap-4 text-center">
        <div className="text-sm md:text-base">{children}</div>
        <form method="dialog">
          <button className="px-3 py-1 rounded-md text-xs md:text-sm font-medium text-white bg-teal border-b-2 border-stone-700 hover:bg-navy hover:border-teal">
            {buttonCaption}
          </button>
        </form>
      </div>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
