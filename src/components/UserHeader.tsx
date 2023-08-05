import { User, getUser } from "@/stores/user";
import { mockUser } from "@/mockdata/mockuser";
import UserPicture from "./UserPicture";

interface UserHeaderProps {
  user: User;
}

const UserBio: React.FC<UserHeaderProps> = ({ user }) => {
  return (
    <div className="card w-full bg-sandstone shadow-xl">
      <figure className="h-48">
        <img
          src={user.coverImage}
          alt={`Cover image for ${user.name}`}
          className="w-full"
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
          <span>Queen consort of King Louis XVI @ France | Ex-Archduchess</span>
        </div>
        <div className="mb-4">
          <div className="font-display text-2xl">
            {user.immediateFamilyUserIds.length.toPrecision(1) +
              (user.immediateFamilyUserIds.length ===
              parseInt(user.immediateFamilyUserIds.length.toPrecision(1))
                ? " fellowships"
                : "+ fellowships")}
          </div>
          <div className="font-display">
            {(() => {
              let a: string = "";

              const sharedUsers: User[] = user.immediateFamilyUserIds
                .filter((id) => mockUser.immediateFamilyUserIds.includes(id))
                .map((id) => getUser(id))
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
                a += ", " + sharedUsers[1].name;
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
        <div className="mb-2 flex gap-2">
          <button className="btn btn-primary">Connect</button>
          <button className="btn btn-ghost">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default UserBio;
