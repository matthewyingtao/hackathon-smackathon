import { searchPosts, searchUser } from "@/shitfuckery/search";

interface SearchProps {
  query: string;
}

const Guild: React.FC<SearchProps> = ({ query }) => {
  const matchedPosts = searchPosts.search(query);
  const matchedUsers = searchUser.search(query);

  return (
    <div className="container mx-auto p-3 grid gap-x-3 gap-y-2 grid-cols-12">
      <div className="col-span-12 lg:col-span-8">
        {JSON.stringify(matchedUsers)}
        {JSON.stringify(matchedPosts)}
      </div>
    </div>
  );
};

export default Guild;
