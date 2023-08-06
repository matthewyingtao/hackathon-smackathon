import DaughterDashboardModal from "@/components/DaughterDashboardModal";
import UserBio from "@/components/UserBio";
import UserFamily from "@/components/UserFamily";
import UserHeader from "@/components/UserHeader";
import {
  $currentUserId,
  UserImmediateFamilyRelationshipEnum,
  getUser,
  useUser,
} from "@/stores/user";
import { fadeUpAnim } from "@/utils";
import { useStore } from "@nanostores/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight, FaInfo } from "react-icons/fa6";

interface UserProps {
  userId: string;
}

const User: React.FC<UserProps> = ({ userId }) => {
  const [showManageMyWomanModal, setShowManageMyWomanModal] = useState(false);

  const user = useUser(userId);
  const currentUserId = useStore($currentUserId)!;
  const currentUser = getUser(currentUserId)!;
  if (!user) return <h1>User not found</h1>;

  const isDaughter = currentUser.immediateFamily.some(
    (u) =>
      u.userId === user.id &&
      u.relationship === UserImmediateFamilyRelationshipEnum.CHILD &&
      getUser(u.userId)!.isMale === false,
  );

  const isWife = currentUser.immediateFamily.some(
    (u) =>
      u.userId === user.id &&
      u.relationship === UserImmediateFamilyRelationshipEnum.SPOUSE &&
      getUser(u.userId)!.isMale === false,
  );

  return (
    <>
      <motion.div
        variants={fadeUpAnim}
        initial="initial"
        animate="animate"
        transition={{ duration: 1, type: "spring", bounce: 0 }}
        className="container mx-auto p-3 grid gap-x-3 gap-y-2 grid-cols-12"
      >
        <div className="col-span-12 lg:col-span-8">
          <UserHeader user={user} />

          {currentUser.isMale && (isDaughter || isWife) && (
            <div className="alert bg-woman-pink border-woman-pink text-white mt-2">
              <FaInfo />

              <span>This is your {isDaughter ? "daughter" : "wife"}.</span>

              <button
                className="btn btn-primary float-right"
                onClick={() => setShowManageMyWomanModal(true)}
              >
                Go to Dashboard
                <FaArrowRight />
              </button>
            </div>
          )}
        </div>

        <UserFamily user={user} />

        <UserBio user={user} />
      </motion.div>

      <DaughterDashboardModal
        user={user}
        show={showManageMyWomanModal}
        setShow={setShowManageMyWomanModal}
      />
    </>
  );
};

export default User;
