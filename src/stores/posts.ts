import { atom } from "nanostores";
import { uuid } from "uuidv4";

export type Post = {
  id: string;
  userId: string;
  title: string;
  body: string;
  createdAt: Date;
};

export const $posts = atom<Post[]>([]);

export const addPost = (post: Omit<Post, "id">) =>
  $posts.set([...$posts.get(), { id: uuid(), ...post } as Post]);
