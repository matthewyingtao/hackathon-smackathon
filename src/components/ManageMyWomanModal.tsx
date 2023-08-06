import {
  $users,
  User,
  UserImmediateFamilyRelationshipEnum,
} from "@/stores/user";
import { useStore } from "@nanostores/react";
import { useEffect, useRef } from "react";
import { FaBinoculars, FaXmark, FaHeart } from "react-icons/fa6";
import { Link } from "wouter";
import UserPicture from "./UserPicture";

interface ManageMyWomanModalProps {
  user: User;
  show: boolean;
  setShow: (show: boolean) => void;
}

const ManageMyWomanModal: React.FC<ManageMyWomanModalProps> = ({
  user,
  show,
  setShow,
}) => {
  const ref = useRef<HTMLDialogElement>(null);
  const users = useStore($users);

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
          ManageMyWoman™
        </h2>

        <button className="btn btn-block" onClick={() => setShow(false)}>
          <FaBinoculars />
          View DMs
        </button>

        {!user.immediateFamily.some(
          (u) => u.relationship === UserImmediateFamilyRelationshipEnum.SPOUSE,
        ) && (
          <>
            <h3 className="card-title font-display text-2xl mb-3 mt-6">
              Find Suitors
            </h3>

            {users
              .filter(
                (u) =>
                  u.isMale &&
                  !u.immediateFamily.some((f) => f.userId === user.id),
              )
              .map((u) => (
                <Link href={`/user/${user.id}`} key={u.id}>
                  <a className="card w-full bg-sandstone p-3 flex-row">
                    <div className="w-12 h-12 mr-4">
                      <UserPicture
                        profileImage={u.profileImage}
                        name={u.name}
                        size="48px"
                      />
                    </div>

                    <div>
                      <div className="mb-2">{u.name}</div>

                      <button
                        className="btn btn-xs"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        {user.marriageRequestIds.includes(u.id) ? (
                          "Marriage request sent"
                        ) : (
                          <>
                            <FaHeart />
                            Send marriage request
                          </>
                        )}
                      </button>
                    </div>
                  </a>
                </Link>
              ))}
          </>
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

export default ManageMyWomanModal;
