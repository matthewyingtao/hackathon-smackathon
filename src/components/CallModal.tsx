import React from "react";
import { useEffect, useRef } from "react";
import { FaXmark } from "react-icons/fa6";

interface CallModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

const CallModal: React.FC<CallModalProps> = ({ show, setShow }) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (ref.current === null) return;
    if (show) {
      ref.current.showModal();
    } else ref.current.close();
  }, [show]);

  useEffect(() => {
    ref.current?.addEventListener("cancel", (event) => {
      event.preventDefault();
    });
  }, [ref]);

  return (
    <dialog ref={ref} className="modal modal-bottom sm:modal-middle">
      <div
        className="modal-box bg-sandstone"
        style={{
          minWidth: "75%",
        }}
      >
        <h2 className="card-title font-accent text-5xl mb-3">
          Visual Rendezvous
        </h2>

        {show && (
          <iframe
            src="https://talky.io/hackathon-smackathon"
            width="100%"
            height="600px"
            allow="camera *;microphone *"
            className="rounded-lg"
          ></iframe>
        )}

        <div className="modal-action">
          <button className="btn" onClick={() => setShow(false)}>
            <FaXmark />
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default CallModal;
