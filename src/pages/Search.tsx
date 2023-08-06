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
      className="container mx-auto p-3 grid gap-x-3 gap-y-2 grid-cols-12"
    >
      <div className="col-span-12 lg:col-span-8">
        <div>
          {matchedUsers.map(({ item }) => (
            <UserHeader user={item} />
          ))}
        </div>
        <div>
          {matchedPosts.map(({ item }) => (
            <FeedPost post={item} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Search;
