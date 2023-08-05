import { $guilds } from "@/stores/guilds";
import { useStore } from "@nanostores/react";
import { Link } from "wouter";

const FeedGuildsSidebar: React.FC = () => {
  const guilds = useStore($guilds);

  // Pick 10 random guilds
  const randomGuilds = guilds
    .sort(() => Math.random() - Math.random())
    .slice(0, 10);

  return (
    <div className="card w-full bg-sandstone shadow-xl hidden lg:block lg:col-span-3">
      <div className="card-body p-3">
        {randomGuilds.map((guild) => (
          <Link href={`/guild/${guild.id}`} key={guild.id}>
            <a className="card w-full bg-muted-gold p-3">{guild.name}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeedGuildsSidebar;
