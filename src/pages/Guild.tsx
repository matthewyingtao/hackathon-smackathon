import guildCover from "@/assets/images/guild-cover.png";
import logo from "@/assets/images/logo.svg";
import { Guild, getGuild } from "@/stores/guilds";
import { fadeUpAnim } from "@/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";

interface GuildProps {
  guildId?: string;
}

const GuildPage: React.FC<GuildProps> = ({ guildId }) => {
  const [isLarge, setIsLarge] = useState(false);

  let guild: Guild | undefined = undefined;
  if (guildId) guild = getGuild(guildId);

  useEffect(() => {
    const resizeHandler = () => setIsLarge(window.innerWidth >= 1024);
    window.addEventListener("resize", resizeHandler);

    resizeHandler();

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div
      className="flex min-h-screen items-center justify-center flex-col bg-cover bg-center"
      style={{
        backgroundImage: `url(${guildCover})`,
        marginTop: isLarge ? "-76px" : "-64px",
      }}
    >
      <motion.div
        variants={fadeUpAnim}
        initial="initial"
        animate="animate"
        transition={{ duration: 1, type: "spring", bounce: 0 }}
        className="container mx-auto text-white text-center grow flex flex-col justify-center p-3"
      >
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
      </motion.div>

      <div className="text-center text-white px-3 py-6">
        <div className="mb-2">Scroll down to enter</div>
        <FaArrowDown className="mx-auto" />
      </div>
    </div>
  );
};

export default GuildPage;
