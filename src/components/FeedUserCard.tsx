import { User } from "@/stores/user";
import UserPicture from "./UserPicture";
import { displayFellowships } from "@/utils";
import { Link } from "wouter";

interface FeedUserCardProps {
  user: User;
}

const FeedUserCard: React.FC<FeedUserCardProps> = ({ user }) => {
  return (
    <Link href={`/${user.id}`}>
      <a className="card w-full bg-sandstone shadow-xl hidden lg:block lg:col-span-3">
        <figure className="h-20">
          <img
            src={user.coverImage}
            alt={`Cover image for ${user.name}`}
            className="w-full"
          />
        </figure>

        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32">
          <UserPicture
            profileImage={user.profileImage}
            name={user.name}
            size="128px"
          />
        </div>

        <div className="card-body block pt-20 text-center">
          <div className="mb-2">
            <h2 className="card-title font-display text-bold justify-center text-3xl">
              {user.name}
            </h2>

            <span className="text-xs">
              Queen consort of King Louis XVI @ France | Ex-Archduchess
            </span>
          </div>

          <div className="font-display text-2xl">
            {displayFellowships(user)}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default FeedUserCard;
