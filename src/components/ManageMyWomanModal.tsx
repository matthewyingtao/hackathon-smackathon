import { useEffect, useRef } from "react";
import { FaXmark } from "react-icons/fa6";

interface ManageMyWomanModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

const ManageMyWomanModal: React.FC<ManageMyWomanModalProps> = ({
  show,
  setShow,
}) => {
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
        className="modal-box"
        style={{
          minWidth: "75%",
        }}
      >
        <h2 className="card-title font-accent text-4xl mb-3">
          ManageMyWoman™
        </h2>

        <h3 className="card-title font-display text-2xl mb-3">Find Suitors</h3>
        <h3 className="card-title font-display text-2xl mb-3">View DMs</h3>

        <div className="modal-action">
          <button className="btn btn-primary" onClick={() => setShow(false)}>
            <FaXmark />
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default ManageMyWomanModal;
