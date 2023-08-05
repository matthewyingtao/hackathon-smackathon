import { atom } from "nanostores";
import { v4 as uuid } from "uuid";

export type Guild = {
  id: string;
  name: string;
  profileImage: string;
};

export const $guilds = atom<Guild[]>([]);

export const addGuild = (post: Omit<Guild, "id">) =>
  $guilds.set([...$guilds.get(), { id: uuid(), ...post } as Guild]);

export const getGuild = (id: string) =>
  $guilds.get().find((guild) => guild.id === id);
