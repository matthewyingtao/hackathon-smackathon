import { users } from "@/data/users";
import { addUser } from "@/stores/user";

export const generateUsers = async () => {
  users.forEach((u) => addUser(u));
};
