import UserHeader from "@/components/UserHeader";
import UserFamily from "@/components/UserFamily";
import UserBio from "@/components/UserBio";
import { getUser } from "@/stores/user";
import { FaInfo, FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import ManageMyWomanModal from "@/components/ManageMyWomanModal";

interface UserProps {
  userId: string;
}

const User: React.FC<UserProps> = ({ userId }) => {
  const [showManageMyWomanModal, setShowManageMyWomanModal] = useState(false);
  const user = getUser(userId);

  if (!user) return <h1>User not found</h1>;

  return (
    <>
      <div className="container mx-auto p-3 grid gap-x-3 gap-y-2 grid-cols-12">
        <div className="col-span-12 lg:col-span-8">
          <UserHeader user={user} />

          <div className="alert bg-woman-pink border-woman-pink text-white mt-2">
            <FaInfo />

            <span>This woman is your daughter.</span>

            <button
              className="btn btn-primary float-right"
              onClick={() => setShowManageMyWomanModal(true)}
            >
              Go to Dashboard
              <FaArrowRight />
            </button>
          </div>
        </div>

        <UserFamily user={user} />

        <UserBio user={user} />
      </div>

      <ManageMyWomanModal
        show={showManageMyWomanModal}
        setShow={setShowManageMyWomanModal}
      />
    </>
  );
};

export default User;
