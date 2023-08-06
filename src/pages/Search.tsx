import FeedPost from "@/components/FeedPost";
import UserHeader from "@/components/UserHeader";
import { $search } from "@/stores/misc";
import { fadeUpAnim } from "@/utils";
import { searchPosts, searchUser } from "@/utils/search";
import { useStore } from "@nanostores/react";
import { motion } from "framer-motion";

const Search: React.FC = () => {
  const query = useStore($search);

  const matchedUsers = searchUser.search(query);
  const matchedPosts = searchPosts.search(query);

  return (
    <motion.div
      variants={fadeUpAnim}
      initial="initial"
      animate="animate"
      transition={{ duration: 1, type: "spring", bounce: 0 }}
      className="container flex flex-row justify-center mx-auto p-3 gap-x-12 gap-y-2"
    >
      <div className="space-y-8">
        {matchedPosts.map(({ item }) => (
          <FeedPost post={item} />
        ))}
      </div>
      <div className="space-y-8 min-w-[30ch]">
        {matchedUsers.map(({ item }) => (
          <UserHeader user={item} />
        ))}
      </div>
    </motion.div>
  );
};

export default Search;
