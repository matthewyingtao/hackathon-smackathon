import { posts } from "@/data/posts";
import { users } from "@/data/users";
import Fuse from "fuse.js";

export const searchPosts = new Fuse(posts, {
  keys: ["title", "body"],
});

export const searchUser = new Fuse(users, {
  keys: ["name"],
});
