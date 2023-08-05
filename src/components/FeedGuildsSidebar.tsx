import { $guilds } from "@/stores/guilds";
import { useStore } from "@nanostores/react";
import { Link } from "wouter";
import UserPicture from "./UserPicture";
import { $currentUserId, updateUser, useUser } from "@/stores/user";
import { FaPlus } from "react-icons/fa6";

const FeedGuildsSidebar: React.FC = () => {
  const currentUserId = useStore($currentUserId)!;
  const currentUser = useUser(currentUserId)!;

  const guilds = useStore($guilds);

  // Pick 10 random guilds
  const randomGuilds = guilds
    .sort(() => Math.random() - Math.random())
    .slice(0, 10);

  return (
    <div className="card w-full bg-another-colour-name shadow-xl hidden lg:block lg:col-span-3">
      <div className="card-body p-3">
        {randomGuilds.map((guild) => {
          const isFollowing = currentUser.followingGuildIds.includes(guild.id);

          return (
            <Link href={`/guild/${guild.id}`} key={guild.id}>
              <a className="card w-full bg-sandstone p-3 flex-row">
                <div className="w-12 h-12 mr-4">
                  <UserPicture
                    profileImage={guild.profileImage}
                    name={guild.name}
                    size="48px"
                  />
                </div>

                <div>
                  <div className="mb-2">{guild.name}</div>

                  <button
                    className="btn btn-xs"
                    onClick={(e) => {
                      e.preventDefault();
                      updateUser(
                        currentUserId,
                        isFollowing
                          ? {
                              followingGuildIds:
                                currentUser.followingGuildIds.filter(
                                  (id) => id !== guild.id,
                                ),
                            }
                          : {
                              followingGuildIds: [
                                ...currentUser.followingGuildIds,
                                guild.id,
                              ],
                            },
                      );
                    }}
                  >
                    {isFollowing ? (
                      "Following"
                    ) : (
                      <>
                        <FaPlus />
                        Follow
                      </>
                    )}
                  </button>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FeedGuildsSidebar;
