import { getGuild } from "@/stores/guilds";

interface GuildProps {
  guildId: string;
}

const Guild: React.FC<GuildProps> = ({ guildId }) => {
  const guild = getGuild(guildId);
  // const currentUserId = useStore($currentUser)!;
  // const currentUser = getUser(currentUserId)!;
  if (!guild) return <h1>Guild not found</h1>;

  return (
    <div className="container mx-auto p-3 grid gap-x-3 gap-y-2 grid-cols-12">
      <div className="col-span-12 lg:col-span-8">What is up my dudes?</div>
    </div>
  );
};

export default Guild;
