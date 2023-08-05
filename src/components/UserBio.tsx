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
      </div>
    </div>
  );
};

export default UserBio;
