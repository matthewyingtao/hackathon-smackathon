import { Post } from "@/stores/posts";
import UserPicture from "./UserPicture";
import { getUser } from "@/stores/user";
import { Link } from "wouter";
import ReactMarkdown from "react-markdown";

interface FeedPostProps {
  post: Post;
}

const FeedPost: React.FC<FeedPostProps> = ({ post }) => {
  const user = getUser(post.userId)!;

  const replaceHashtagsWithLinks = (text: string): string => {
    const hashtagRegex = /#(\w+)/g;

    return text.replace(
      hashtagRegex,
      (match: string, hashtag: string) =>
        `[${match}](/search/?q=${encodeURIComponent(hashtag)})`,
    );
  };

  return (
    <div className="card w-full bg-sandstone shadow-xl">
      <div className="card-body block p-3">
        <div className="flex mb-3">
          <Link href={`/user/${user.id}`}>
            <a className="relative w-12 h-12 mr-4">
              <UserPicture
                profileImage={user.profileImage}
                name={user.name}
                size="48px"
              />
            </a>
          </Link>

          <div>
            <Link href={`/user/${user.id}`}>
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

        <div className="break-words">
          <ReactMarkdown
            components={{
              a: ({ href, children, ...props }) => (
                <Link href={href as string} {...props}>
                  <a className="link link-primary">{children}</a>
                </Link>
              ),
            }}
          >
            {replaceHashtagsWithLinks(post.body)}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default FeedPost;
