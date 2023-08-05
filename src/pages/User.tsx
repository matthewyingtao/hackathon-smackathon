import UserHeader from "@/components/UserHeader";
import UserFamily from "@/components/UserFamily";
import UserBio from "@/components/UserBio";
import { getUser } from "@/stores/user";

interface UserProps {
  userId: string;
}

const User: React.FC<UserProps> = ({ userId }) => {
  const user = getUser(userId);

  if (!user) return <h1>User not found</h1>;

  return (
    <div className="container mx-auto p-3 grid gap-x-6 gap-y-2 grid-cols-12">
      <UserHeader user={user} />

      <UserFamily user={user} />

      <UserBio user={user} />
    </div>
  );
};

export default User;
