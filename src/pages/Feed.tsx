import FeedUserCard from "@/components/FeedUserCard";
import FeedWrite from "@/components/FeedWrite";
import FeedPost from "@/components/FeedPost";
import { $posts } from "@/stores/posts";
import { $currentUser, $users } from "@/stores/user";
import { useStore } from "@nanostores/react";
import FeedGuildsSidebar from "@/components/FeedGuildsSidebar";

const Feed: React.FC = () => {
  const currentUserId = useStore($currentUser)!;
  const currentUser = $users.get().find((u) => u.id === currentUserId)!;

  const posts = useStore($posts);

  return (
    <div className="container mx-auto p-3 grid gap-x-3 grid-cols-12 items-start">
      <FeedUserCard user={currentUser} />

      <div className="col-span-12 lg:col-span-6 space-y-2">
        <FeedWrite />

        {posts.map((p) => (
          <FeedPost key={p.id} post={p} />
        ))}
      </div>

      <FeedGuildsSidebar />
    </div>
  );
};

export default Feed;
