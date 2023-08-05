import { Guild, getGuild } from "@/stores/guilds";
import { FaArrowDown } from "react-icons/fa6";
import guildCover from "@/assets/images/guild-cover.png";
import logo from "@/assets/images/logo.svg";

interface GuildProps {
  guildId?: string;
}

const GuildPage: React.FC<GuildProps> = ({ guildId }) => {
  let guild: Guild | undefined = undefined;
  if (guildId) guild = getGuild(guildId);

  return (
    <div
      className="min-h-screen -mt-20 flex items-center justify-center flex-col bg-cover bg-center"
      style={{
        backgroundImage: `url(${guildCover})`,
      }}
    >
      <div className="container mx-auto text-white text-center grow flex flex-col justify-center">
        <h2 className="font-accent text-9xl">
          {guild ? guild.name : "Guilds"}
        </h2>
        {!guild && (
          <div className="flex items-center gap-2 justify-center">
            By
            <img
              src={logo}
              alt="LinkedKin logo"
              className=""
              draggable="false"
            />
          </div>
        )}
      </div>

      <div className="text-center text-white px-3 py-6">
        <div className="mb-2">Scroll down to enter</div>
        <FaArrowDown className="mx-auto" />
      </div>
    </div>
  );
};

export default GuildPage;
