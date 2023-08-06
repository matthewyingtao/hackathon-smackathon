import { posts } from "@/data/posts";
import { users } from "@/data/users";
import Fuse from "fuse.js";

const postsWithUsers = posts.map((post) => {
  return { ...post, name: users.find((user) => user.id === post.userId)?.name };
});

export const searchPosts = new Fuse(postsWithUsers, {
  keys: ["title", "body", "name"],
  threshold: 0.1,
});

export const searchUser = new Fuse(users, {
  keys: ["name"],
  threshold: 0.0,
});
