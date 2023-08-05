import { Post } from "@/stores/posts";
import UserPicture from "./UserPicture";
import { getUser } from "@/stores/user";
import { Link } from "wouter";

interface FeedPostProps {
  post: Post;
}

const FeedPost: React.FC<FeedPostProps> = ({ post }) => {
  const user = getUser(post.userId)!;

  return (
    <div className="card w-full bg-sandstone shadow-xl">
      <div className="card-body block p-3">
        <div className="flex mb-3">
          <Link href={`/${user.id}`}>
            <a className="relative w-12 h-12 mr-4">
              <UserPicture
                profileImage={user.profileImage}
                name={user.name}
                size="48px"
              />
            </a>
          </Link>

          <div>
            <Link href={`/${user.id}`}>
              <a className="z-10 relative">
                <h2 className="font-display text-bold text-xl font-bold">
                  {user.name}
                </h2>
              </a>
            </Link>

            <div className="text-bold text-xl leading-5">
              {post.createdAt.toLocaleDateString()}
            </div>
          </div>
        </div>

        <h3 className="font-display text-bold text-2xl font-bold mb-3">
          {post.title}
        </h3>

        <p className="break-words">{post.body}</p>
      </div>
    </div>
  );
};

export default FeedPost;
