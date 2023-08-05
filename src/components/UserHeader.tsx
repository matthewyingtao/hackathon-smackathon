import {
  $currentUserId,
  User,
  UserImmediateFamilyRelationshipEnum,
  getUser,
} from "@/stores/user";
import UserPicture from "./UserPicture";
import { displayFellowships } from "@/utils";
import { useStore } from "@nanostores/react";
import CallModal from "./CallModal";
import { useState } from "react";

interface UserHeaderProps {
  user: User;
}

const UserBio: React.FC<UserHeaderProps> = ({ user }) => {
  const [showCallModal, setShowCallModal] = useState(false);

  const [familyUserIds, setFamilyUserIds] = useState(
    new Set(user.immediateFamily.map((obj) => obj.userId)),
  );

  const currrentUserId = useStore($currentUserId)!;
  const isCurrentUser = currrentUserId === user.id;

  const handleConnectAsFamily = () => {
    if (
      user.immediateFamily
        .map((element) => element.userId)
        .includes($currentUserId.get()!)
    )
      return;
    user.immediateFamily.push({
      userId: $currentUserId.get()!,
      relationship: UserImmediateFamilyRelationshipEnum.CHILD,
    });
    getUser($currentUserId.get()!)!.immediateFamily.push({
      userId: user.id,
      relationship: UserImmediateFamilyRelationshipEnum.PARENT,
    });
    const tempFamilyUserIds = new Set([
      ...familyUserIds.values(),
      $currentUserId.get()!,
    ]);
    setFamilyUserIds(tempFamilyUserIds);
    console.log(familyUserIds);
    return;
  };

  return (
    <>
      <div className="card w-full bg-sandstone shadow-xl">
        <figure className="h-48">
          <img
            src={user.coverImage}
            alt={`Cover image for ${user.name}`}
            className="w-full"
            draggable="false"
          />
        </figure>

        <div className="absolute top-24 left-8">
          <UserPicture
            profileImage={user.profileImage}
            name={user.name}
            size="128px"
          />
        </div>

        <div className="card-body block pt-12">
          <div className="float-right">France</div>
          <div className="mb-2">
            <h2 className="card-title font-display text-bold text-3xl">
              {user.name}
            </h2>
            <span>
              Queen consort of King Louis XVI @ France | Ex-Archduchess
            </span>
          </div>
          <div className="mb-4">
            <div className="font-display text-2xl">
              {displayFellowships(user)}
            </div>
            <div className="font-display">
              {(() => {
                let a: string = "";

                const sharedUsers: User[] = user.immediateFamily
                  .filter(({ userId }) => familyUserIds.has(userId))
                  .map(({ userId }) => getUser(userId))
                  .filter(
                    (user) => user !== null && user !== undefined,
                  ) as User[];

                const connections = sharedUsers.length;

                if (!connections) {
                  return "You share no mutual fellowships";
                }

                if (connections > 0) {
                  a += sharedUsers[0].name;
                }
                if (connections > 1) {
                  a += connections > 2 ? ", " : " and ";
                  a += sharedUsers[1].name;
                }
                if (connections > 2) {
                  a +=
                    ", and " +
                    (connections - 2) +
                    " mildly redundant fellowship" +
                    (connections - 2 === 1 ? "" : "s");
                }

                return a;
              })()}
            </div>
          </div>
          {!isCurrentUser && (
            <div className="mb-2 flex gap-2 flex-wrap">
              {familyUserIds.has($currentUserId.get()!) ? (
                <button className="btn">You are Family!</button>
              ) : (
                <button className="btn" onClick={handleConnectAsFamily}>
                  Connect as Family
                </button>
              )}

              <button className="btn" onClick={() => setShowCallModal(true)}>
                Visual Rendezvous
              </button>
            </div>
          )}
        </div>
      </div>

      <CallModal show={showCallModal} setShow={setShowCallModal} />
    </>
  );
};

export default UserBio;
