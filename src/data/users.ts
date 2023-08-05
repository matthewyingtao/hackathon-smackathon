import {
  User,
  UserImmediateFamilyRelationshipEnum,
  UserOpenTo,
  UserSocialClass,
  UserUpperClassRole,
} from "@/stores/user";
import { toDataUrl } from "@/utils";
import maProfile from "@/assets/images/ma-profile.jpg";
import maCover from "@/assets/images/ma-cover.jpg";

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
    openTo: [UserOpenTo.JOB],
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
    profileImage: await toDataUrl(maProfile),
    coverImage: await toDataUrl(maCover),
    bio: "I'm a king, but I'm also a simp.",
    socialClass: UserSocialClass.UPPER,
    role: UserUpperClassRole.MONARCH,
    openTo: [UserOpenTo.MARRIAGE, UserOpenTo.MISTRESS],
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
    profileImage: await toDataUrl(maProfile),
    coverImage: await toDataUrl(maCover),
    bio: "Bow down to me, peasants!",
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
    profileImage: await toDataUrl(maProfile),
    coverImage: await toDataUrl(maCover),
    bio: "Marie-Thérèse Charlotte is the eldest child of King Louis XVI and Queen Marie Antoinette of France. In 1799 she married her cousin Louis Antoine, Duke of Angoulême, the eldest son of Charles, Count of Artois, henceforth becoming the Duchess of Angoulême. She was briefly Queen of France in 1830.",
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
    profileImage: await toDataUrl(maProfile),
    coverImage: await toDataUrl(maCover),
    bio: "Jean Amilcar is the adopted son of King Louis XVI and Queen Marie Antoinette of France. Jean Amilcar was from French Senegal. He was enslaved as a child and then bought from local slavers by the French official Chevalier de Boufflers, who wished to spare him the deadly transatlantic crossing. ",
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
    profileImage: await toDataUrl(maProfile),
    coverImage: await toDataUrl(maCover),
    bio: "Victoria is Queen of the United Kingdom of Great Britain and Ireland. Her reign will be longer than that of any of her predecessors. It was a period of industrial, political, scientific, and military change within the United Kingdom, and was marked by a great expansion of the British Empire.",
    openTo: [],
    socialClass: UserSocialClass.UPPER,
    role: UserUpperClassRole.MONARCH,
    followingGuildIds: [],
  },
];
