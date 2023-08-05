import { atom } from "nanostores";

export type Person = {
  id: string;
  name: string;
  immediateFamily: string[];
  isMale: boolean;
  profileImage: string;
  bio: string;
} & (
  | {
      socialClass: UserSocialClass.LOWER;
      role: UserLowerClassRole;
    }
  | {
      socialClass: UserSocialClass.MIDDLE;
      role: UserMiddleClassRole;
    }
  | {
      socialClass: UserSocialClass.UPPER;
      role: UserUpperClassRole;
    }
);

export enum UserSocialClass {
  LOWER,
  MIDDLE,
  UPPER,
}

export enum UserUpperClassRole {
  MONARCH,
  NOBLE,
  KNIGHT,
  CLERGY,
}

export enum UserMiddleClassRole {
  MERCHANT,
  DOCTOR,
  LOWER_CLERGY,
  OTHER,
}

export enum UserLowerClassRole {
  PEASANT,
  SERF,
}

export const $users = atom<Person[]>([]);

export const addUser = (user: Person) => $users.set([...$users.get(), user]);
