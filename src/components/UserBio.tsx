import { User } from "@/stores/user";
import frame from "@/assets/images/frame.png";

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
            { 
              user.immediateFamilyUserIds.length.toPrecision(1) + 
              (user.immediateFamilyUserIds.length === parseInt(user.immediateFamilyUserIds.length.toPrecision(1)) 
              ? " fellowships" 
              : "+ fellowships")
            } 
          </div>
          <div className="font-display">
            Louis XVI, Phillipe I and 2 other mutual fellowships
          </div>
        </div>

        <div className="mb-2">
          <button className="btn btn-primary">Connect</button>
          <button className="btn btn-ghost">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default UserBio;
