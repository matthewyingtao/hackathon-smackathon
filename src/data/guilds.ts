import maProfile from "@/assets/images/pfps/ma-profile.jpg";
import { Guild } from "@/stores/guilds";
import { toDataUrl } from "@/utils";

export const guilds: Guild[] = [
  {
    id: "1",
    name: "Simps 4 Marie Antoinette",
    profileImage: await toDataUrl(maProfile),
  },
];
