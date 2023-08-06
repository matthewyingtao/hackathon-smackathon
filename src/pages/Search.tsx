import FeedPost from "@/components/FeedPost";
import UserHeader from "@/components/UserHeader";
import { $search } from "@/stores/misc";
import { fadeUpAnim } from "@/utils";
import { searchPosts, searchUser } from "@/utils/search";
import { useStore } from "@nanostores/react";
import { motion } from "framer-motion";
import { Link } from "wouter";

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
      className="container flex flex-row justify-center mx-auto px-4 lg:px-12 pb-20 gap-4 flex-wrap-reverse"
    >
      <div className="space-y-8 flex-[3_1_40ch]">
        {matchedPosts.map(({ item }) => (
          <FeedPost post={item} />
        ))}
      </div>
      <div className="space-y-8 flex-[2_1_25ch]">
        {matchedUsers.map(({ item }) => (
          <Link href={`/user/${item.id}`}>
            <a href="">
              <UserHeader user={item} />
            </a>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Search;
