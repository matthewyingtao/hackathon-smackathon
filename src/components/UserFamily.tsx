import { User } from "@/stores/user";

interface UserFamilyProps {
  user: User;
}

const UserFamily: React.FC<UserFamilyProps> = ({ user }) => {
  return (
    <div className="card w-full bg-sandstone shadow-xl col-span-12 lg:col-span-4">
      <div className="card-body">
        <h2 className="card-title font-accent text-4xl">Familial Relations</h2>

        <p>{user.bio}</p>
      </div>
    </div>
  );
};

export default UserFamily;
