import {
  UserOpenToEnum,
  UserSocialClass,
  UserUpperClassRole,
  addUser,
} from "@/stores/user";
import maCover from "@/assets/images/ma-cover.jpg";
import { toDataUrl } from "@/utils";

export const generateUsers = async () => {
  addUser({
    name: "King Henry VIII",
    immediateFamilyUserIds: [],
    occupation: "King of England",
    isMale: true,
    profileImage: await toDataUrl(maCover),
    bio: "Bow down to me, peasants!",
    socialClass: UserSocialClass.UPPER,
    role: UserUpperClassRole.MONARCH,
    openTo: [UserOpenToEnum.MARRIAGE, UserOpenToEnum.MISTRESS],
  });
};
