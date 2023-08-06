import FeedPost from "@/components/FeedPost";
import UserHeader from "@/components/UserHeader";
import { searchPosts, searchUser } from "@/utils/search";
import { $search } from "@/stores/misc";
import { useStore } from "@nanostores/react";

const Search: React.FC = () => {
  const query = useStore($search);

  const matchedUsers = searchUser.search(query);
  const matchedPosts = searchPosts.search(query);

  return (
    <div className="container mx-auto p-3 grid gap-x-3 gap-y-2 grid-cols-12">
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
    </div>
  );
};

export default Search;
