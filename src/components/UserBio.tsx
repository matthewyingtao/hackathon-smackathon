import { User } from "@/stores/user";

interface UserBioProps {
  user: User;
}

const UserBio: React.FC<UserBioProps> = ({ user }) => {
  return (
    <div className="card w-full bg-sandstone shadow-xl col-span-12 lg:col-span-8">
      <div className="card-body">
        <h2 className="card-title font-accent text-4xl">Biography</h2>

        <p>{user.bio}</p>
      <div className="absolute w-36 h-36 top-24 left-8">
        <img src={frame} alt="" className="absolute w-full h-full" />

        <img
          src={user.profileImage}
          alt={`Profile image for ${user.name}`}
          className="w-32 h-32 m-2 object-cover rounded-full"
        />
      </div>

      <div className="card-body block pt-16">
        <div className="float-right">France</div>

        <div className="mb-2">
          <h2 className="card-title font-display text-bold text-3xl">
            {user.name}
          </h2>
          <span>Queen consort of King Louis XVI @ France | Ex-Archduchess</span>
        </div>

        <div className="mb-4">
          <div className="font-display text-2xl">
            {user.immediateFamily.length.toPrecision(1) +
              (user.immediateFamily.length ===
              parseInt(user.immediateFamily.length.toPrecision(1))
                ? " fellowships"
                : "+ fellowships")}
          </div>
          <div className="font-display">
            {(() => {
              let a: string = "";

              const mockUserIds = new Set(
                mockUser.immediateFamily.map((obj) => obj.userId),
              );

              const sharedUsers: User[] = user.immediateFamily
                .filter(({ userId }) => mockUserIds.has(userId))
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

        {
          <div className="mb-2">
            {mockUser.immediateFamily.includes(user.id) ? (
              <button className="btn btn-primary">Connect as Family</button>
            ) : (
              <button className="btn btn-primary">You are Family!</button>
            )}
          </div>
        }
      </div>
    </div>
  );
};

export default UserBio;
