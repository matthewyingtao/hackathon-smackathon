import FeedGuildsSidebar from "@/components/FeedGuildsSidebar";
import FeedPost from "@/components/FeedPost";
import FeedUserCard from "@/components/FeedUserCard";
import FeedWrite from "@/components/FeedWrite";
import { $posts } from "@/stores/posts";
import { $currentUserId, $users } from "@/stores/user";
import { fadeUpAnim } from "@/utils";
import { useStore } from "@nanostores/react";
import { motion } from "framer-motion";

const Feed: React.FC = () => {
  const currentUserId = useStore($currentUserId)!;
  const currentUser = $users.get().find((u) => u.id === currentUserId)!;

  const posts = useStore($posts);

  return (
    <motion.div
      variants={fadeUpAnim}
      initial="initial"
      animate="animate"
      transition={{ duration: 1, type: "spring", bounce: 0 }}
      className="container mx-auto px-4 lg:px-12 pb-20 grid gap-x-4 grid-cols-12 items-start"
    >
      <FeedUserCard user={currentUser} />

      <div className="col-span-12 lg:col-span-6 flex flex-col gap-4">
        <FeedWrite />

        {[...posts].reverse().map((p) => (
          <FeedPost key={p.id} post={p} />
        ))}
      </div>

      <FeedGuildsSidebar />
    </motion.div>
  );
};

export default Feed;
