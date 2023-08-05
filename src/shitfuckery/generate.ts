import { users } from "@/data/users";
import { guilds } from "@/data/guilds";
import { addGuild } from "@/stores/guilds";
import { addUser } from "@/stores/user";
import { posts } from "@/data/posts";
import { addPost } from "@/stores/posts";

export const generateUsers = async () => {
  users.forEach((u) => addUser(u));
};

export const generatePosts = async () => {
  posts.forEach((p) => addPost(p));
};

export const generateGuilds = async () => {
  guilds.forEach((g) => addGuild(g));
};
