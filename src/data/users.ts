import maCover from "@/assets/images/ma-cover.jpg";
import Jean from "@/assets/images/pfps/jean.jpg";
import KH4 from "@/assets/images/pfps/kh4.jpg";
import Louis from "@/assets/images/pfps/louis.jpg";
import maProfile from "@/assets/images/pfps/ma-profile.jpg";
import Marie from "@/assets/images/pfps/marie.jpg";
import Victoria from "@/assets/images/pfps/victoria.jpg";
import {
  User,
  UserImmediateFamilyRelationshipEnum,
  UserMiddleClassRole,
  UserOpenTo,
  UserSocialClass,
  UserUpperClassRole,
} from "@/stores/user";
import { toDataUrl } from "@/utils";

export const users: User[] = [
  {
    id: "1",
    name: "Marie Antoinette",
    immediateFamily: [
      {
        userId: "3",
        relationship: UserImmediateFamilyRelationshipEnum.SPOUSE,
      },
      {
        userId: "4",
        relationship: UserImmediateFamilyRelationshipEnum.CHILD,
      },
      {
        userId: "5",
        relationship: UserImmediateFamilyRelationshipEnum.CHILD,
      },
    ],
    occupation: "Queen consort of King Louis XVI @ France | Ex-Archduchess",
    isMale: false,
    profileImage: await toDataUrl(maProfile),
    coverImage: await toDataUrl(maCover),
    bio: "Marie Antoinette, the Queen of France, is renowned for her unmatched beauty, charm, and elegance. Her regal poise and impeccable fashion sense made her a trendsetter at the French court. Beyond her physical allure, she exhibited an inner grace and devotion to her family and country, endearing her to the common people. Her legacy as a woman of beauty, grace, and nobility continues to inspire generations to come.",
    marriageRequestIds: [],
    openTo: [UserOpenTo.WORK],
    socialClass: UserSocialClass.UPPER,
    role: UserUpperClassRole.MONARCH,
    followingGuildIds: [],
  },
  {
    id: "2",
    name: "King Henry VIII",
    immediateFamily: [],
    occupation: "King @ England",
    isMale: true,
    profileImage: await toDataUrl(KH4),
    coverImage: await toDataUrl(maCover),
    bio: "I'm a king, but I'm also a simp.",
    marriageRequestIds: [],
    socialClass: UserSocialClass.UPPER,
    role: UserUpperClassRole.MONARCH,
    openTo: [UserOpenTo.MISTRESS],
    followingGuildIds: [],
  },
  {
    id: "3",
    name: "King Louis XVI",
    immediateFamily: [
      {
        userId: "1",
        relationship: UserImmediateFamilyRelationshipEnum.SPOUSE,
      },
      {
        userId: "4",
        relationship: UserImmediateFamilyRelationshipEnum.CHILD,
      },
      {
        userId: "5",
        relationship: UserImmediateFamilyRelationshipEnum.CHILD,
      },
    ],
    occupation: "King @ France",
    isMale: true,
    profileImage: await toDataUrl(Louis),
    coverImage: await toDataUrl(maCover),
    bio: "Bow down to me, peasants!",
    marriageRequestIds: [],
    openTo: [UserOpenTo.MISTRESS],
    socialClass: UserSocialClass.UPPER,
    role: UserUpperClassRole.MONARCH,
    followingGuildIds: [],
  },
  {
    id: "4",
    name: "Marie-Thérèse Charlotte",
    immediateFamily: [
      {
        userId: "1",
        relationship: UserImmediateFamilyRelationshipEnum.PARENT,
      },
      {
        userId: "3",
        relationship: UserImmediateFamilyRelationshipEnum.PARENT,
      },
      {
        userId: "5",
        relationship: UserImmediateFamilyRelationshipEnum.SIBLING,
      },
    ],
    occupation: "Queen @ France",
    isMale: false,
    profileImage: await toDataUrl(Marie),
    coverImage: await toDataUrl(maCover),
    bio: "Marie-Thérèse Charlotte is the eldest child of King Louis XVI and Queen Marie Antoinette of France. In 1799 she married her cousin Louis Antoine, Duke of Angoulême, the eldest son of Charles, Count of Artois, henceforth becoming the Duchess of Angoulême. She was briefly Queen of France in 1830.",
    marriageRequestIds: [],
    openTo: [],
    socialClass: UserSocialClass.UPPER,
    role: UserUpperClassRole.NOBLE,
    followingGuildIds: [],
  },
  {
    id: "5",
    name: "Jean Amilcar",
    immediateFamily: [
      {
        userId: "1",
        relationship: UserImmediateFamilyRelationshipEnum.PARENT,
      },
      {
        userId: "3",
        relationship: UserImmediateFamilyRelationshipEnum.PARENT,
      },
      {
        userId: "4",
        relationship: UserImmediateFamilyRelationshipEnum.SIBLING,
      },
    ],
    occupation: "Prince @ France",
    isMale: false,
    profileImage: await toDataUrl(Jean),
    coverImage: await toDataUrl(maCover),
    bio: "Jean Amilcar is the adopted son of King Louis XVI and Queen Marie Antoinette of France. Jean Amilcar was from French Senegal. He was enslaved as a child and then bought from local slavers by the French official Chevalier de Boufflers, who wished to spare him the deadly transatlantic crossing. ",
    marriageRequestIds: [],
    openTo: [],
    socialClass: UserSocialClass.UPPER,
    role: UserUpperClassRole.NOBLE,
    followingGuildIds: [],
  },
  {
    id: "6",
    name: "Victoria",
    immediateFamily: [],
    occupation: "Queen @ England",
    isMale: false,
    profileImage: await toDataUrl(Victoria),
    coverImage: await toDataUrl(maCover),
    bio: "Victoria is Queen of the United Kingdom of Great Britain and Ireland. Her reign will be longer than that of any of her predecessors. It was a period of industrial, political, scientific, and military change within the United Kingdom, and was marked by a great expansion of the British Empire.",
    marriageRequestIds: [],
    openTo: [],
    socialClass: UserSocialClass.UPPER,
    role: UserUpperClassRole.MONARCH,
    followingGuildIds: [],
  },
  {
    id: "7",
    name: "William Shakespeare",
    immediateFamily: [],
    occupation: "Playwright and Poet @ England",
    isMale: true,
    profileImage: await toDataUrl(Victoria),
    coverImage: await toDataUrl(maCover),
    bio: "I am William Shakespeare, the greatest playwright and poet in English literature. My works, including plays like Romeo and Juliet, Hamlet, and Macbeth, have left a lasting impact on the world of literature and theater. Join me in exploring the beauty and power of words!",
    marriageRequestIds: [],
    openTo: [UserOpenTo.WORK],
    socialClass: UserSocialClass.MIDDLE,
    role: UserMiddleClassRole.OTHER,
    followingGuildIds: [],
  },
  {
    id: "8",
    name: "Ada Lovelace",
    immediateFamily: [],
    occupation: "Mathematician and Writer @ England",
    isMale: false,
    profileImage: await toDataUrl(Victoria),
    coverImage: await toDataUrl(maCover),
    bio: "I am Ada Lovelace, a mathematician and writer. I am known for my work on Charles Babbage's early mechanical general-purpose computer, the Analytical Engine. My notes on the engine include what is now recognized as the world's first algorithm intended for implementation on a machine, making me the first computer programmer.",
    marriageRequestIds: [],
    openTo: [UserOpenTo.WORK, UserOpenTo.MARRIAGE],
    socialClass: UserSocialClass.MIDDLE,
    role: UserMiddleClassRole.OTHER,
    followingGuildIds: [],
  },
  {
    id: "9",
    name: "Charles Dickens",
    immediateFamily: [],
    occupation: "Novelist @ England",
    isMale: true,
    profileImage: await toDataUrl(Victoria),
    coverImage: await toDataUrl(maCover),
    bio: "I am Charles Dickens, a renowned novelist known for my works such as 'Oliver Twist,' 'A Tale of Two Cities,' and 'Great Expectations.' My writings shed light on social issues and inequalities of the Victorian era. Connect with me to delve into the world of vivid characters and intricate plots.",
    marriageRequestIds: [],
    openTo: [UserOpenTo.WORK, UserOpenTo.MARRIAGE],
    socialClass: UserSocialClass.UPPER,
    role: UserUpperClassRole.NOBLE,
    followingGuildIds: [],
  },
];
