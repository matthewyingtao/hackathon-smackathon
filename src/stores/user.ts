import { useStore } from "@nanostores/react";
import { atom } from "nanostores";

export interface UserImmediateFamily {
  userId: string;
  relationship: UserImmediateFamilyRelationshipEnum;
}

export enum UserImmediateFamilyRelationshipEnum {
  PARENT,
  CHILD,
  SPOUSE,
  SIBLING,
}

export type User = {
  id: string;
  name: string;
  immediateFamily: UserImmediateFamily[];
  occupation: string;
  isMale: boolean;
  profileImage: string;
  coverImage: string;
  bio: string;
  openTo: UserOpenTo[];
  followingGuildIds: string[];
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
  WORK,
}

export const $users = atom<User[]>([]);

export const addUser = (user: User) => $users.set([...$users.get(), user]);

export const removeUser = (id: string) =>
  $users.set($users.get().filter((user) => user.id !== id));

export const getUser = (id: string) =>
  $users.get().find((user) => user.id === id);

export const useUser = (id: string) => {
  const users = useStore($users);

  return users.find((user) => user.id === id);
};

export const updateUser = (id: string, user: Partial<User>) =>
  $users.set(
    $users.get().map((u) =>
      u.id === id
        ? ({
            ...u,
            ...user,
          } as User)
        : u,
    ),
  );

export const $currentUserId = atom<string | null>(null);

export const setCurrentUser = (id: string) => $currentUserId.set(id);

export const removeCurrentUser = () => $currentUserId.set(null);
