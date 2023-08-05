import { getGuild } from "@/stores/guilds";
import guildCover from "@/assets/images/guild-cover.jpg";
import logo from "@/assets/images/logo.svg";

interface GuildProps {
  guildId: string;
}

const Guild: React.FC<GuildProps> = ({ guildId }) => {
  const guild = getGuild(guildId);
  // const currentUserId = useStore($currentUser)!;
  // const currentUser = getUser(currentUserId)!;
  if (!guild) return <h1>Guild not found</h1>;

  return (
    <div
      className="min-h-screen -mt-20 flex items-center justify-center flex-col"
      style={{
        background: "black",
        backgroundImage: `url(${guildCover})`,
      }}
    >
      <div className="container mx-auto text-white text-center">
        <h2 className="font-accent text-9xl">Guilds</h2>
        <div className="flex items-center gap-2 justify-center">
          By
          <img src={logo} alt="LinkedKin logo" className="" draggable="false" />
        </div>
      </div>
    </div>
  );
};

export default Guild;
