import UserBio from "@/components/UserBio";
import { getUser } from "@/stores/user";

interface UserProps {
  userId: string;
}

const User: React.FC<UserProps> = ({ userId }) => {
  const user = getUser(userId);

  if (!user) return <h1>User not found</h1>;

  return (
    <div className="container mx-auto p-2">
      <UserBio user={user} />
    </div>
  );
};

export default User;
