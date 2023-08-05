import { User, setCurrentUser } from "@/stores/user";
import { useEffect, useRef } from "react";
import { FaXmark, FaArrowRight } from "react-icons/fa6";
import reaper from "@/assets/images/reaper.png";

interface LoginConfirmationModalProps {
  user: User;
  show: boolean;
  setShow: (show: boolean) => void;
}

const LoginConfirmationModal: React.FC<LoginConfirmationModalProps> = ({
  user,
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
        className="modal-box bg-sandstone p-0 flex"
        style={{
          minWidth: "75%",
        }}
      >
        <img
          src={reaper}
          alt="Grim Reaper"
          className="w-1/4 md:w-1/2 object-cover"
        />

        <div className="p-6 flex flex-col">
          <h2 className="card-title font-accent text-5xl mb-3">
            Are you sure?
          </h2>

          <p className="grow">
            Depending on {user.name}'s societal worth, it may be treason to
            login as them if you are not them.
          </p>

          <div className="modal-action justify-between">
            <button className="btn btn-ghost" onClick={() => setShow(false)}>
              <FaXmark />
              Close
            </button>

            <button className="btn" onClick={() => setCurrentUser(user.id)}>
              Go
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default LoginConfirmationModal;
