import { Guild } from "@/stores/guilds";
import { toDataUrl } from "@/utils";
import maProfile from "@/assets/images/ma-profile.jpg";

export const guilds: Guild[] = [
  {
    id: "1",
    name: "Simps 4 Marie Antoinette",
    profileImage: await toDataUrl(maProfile),
  },
];
