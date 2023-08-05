import { atom } from "nanostores";
import { uuid } from "uuidv4";

export type User = {
  id: string;
  name: string;
  immediateFamilyUserIds: string[];
  occupation: string;
  isMale: boolean;
  profileImage: string;
  bio: string;
  spouse?: string;
  openTo: UserOpenTo[];
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

export enum UserOpenTo {
  MARRIAGE,
  MISTRESS,
  JOB,
}

export const $users = atom<User[]>([]);

export const addUser = (user: Omit<User, "id">) =>
  $users.set([...$users.get(), { id: uuid(), ...user } as User]);

export const removeUser = (id: string) =>
  $users.set($users.get().filter((user) => user.id !== id));
