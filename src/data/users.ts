import maCover from "@/assets/images/ma-cover.jpg";
import {
  User,
  UserOpenTo,
  UserSocialClass,
  UserUpperClassRole,
} from "@/stores/user";
import { toDataUrl } from "@/utils";

export const users: Omit<User, "id">[] = [
  {
    name: "Marie Antoinette",
    immediateFamilyUserIds: [],
    occupation: "Queen consort of King Louis XVI of France | Ex-Archduchess",
    isMale: false,
    profileImage: await toDataUrl(maCover),
    bio: "Marie Antoinette, the Queen of France, is renowned for her unmatched beauty, charm, and elegance. Her regal poise and impeccable fashion sense made her a trendsetter at the French court. Beyond her physical allure, she exhibited an inner grace and devotion to her family and country, endearing her to the common people. Her legacy as a woman of beauty, grace, and nobility continues to inspire generations to come.",
    spouse: "Lettuce Head",
    openTo: [UserOpenTo.JOB],
    socialClass: UserSocialClass.UPPER,
    role: UserUpperClassRole.MONARCH,
  },
  {
    name: "King Henry VIII",
    immediateFamilyUserIds: [],
    occupation: "King of England",
    isMale: true,
    profileImage: await toDataUrl(maCover),
    bio: "Bow down to me, peasants!",
    socialClass: UserSocialClass.UPPER,
    role: UserUpperClassRole.MONARCH,
    openTo: [UserOpenTo.MARRIAGE, UserOpenTo.MISTRESS],
  },
];
