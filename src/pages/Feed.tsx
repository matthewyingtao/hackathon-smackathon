import FeedUserCard from "@/components/FeedUserCard";
import { $currentUser, $users } from "@/stores/user";
import { useStore } from "@nanostores/react";

const Feed: React.FC = () => {
  const currentUserId = useStore($currentUser)!;
  const currentUser = $users.get().find((u) => u.id === currentUserId)!;

  return (
    <div className="container mx-auto p-3 grid gap-x-3 grid-cols-12">
      <FeedUserCard user={currentUser} />

      <div className="col-span-12 lg:col-span-6">b</div>

      <div className="hidden lg:block lg:col-span-3">c</div>
    </div>
  );
};

export default Feed;
