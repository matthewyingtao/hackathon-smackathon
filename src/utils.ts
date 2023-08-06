import { User, getUser } from "./stores/user";

export const toDataUrl = async (url: string): Promise<string> => {
  const response = await fetch(url);
  const blob = await response.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = function () {
      resolve(reader.result as string);
    };
    reader.readAsDataURL(blob);
  });
};

export const displayFellowships = (user: User) =>
  user.immediateFamily.length.toPrecision(1) +
  (user.immediateFamily.length ===
  parseInt(user.immediateFamily.length.toPrecision(1))
    ? " fellowships"
    : "+ fellowships");


interface searchNode {
  id: string;
  distance: number;
}

export const RunSeparationBFS = (
  userID: string,
  searchForID: string,
): number => {
  const searchedUsers = new Set<string>();
  const queue: searchNode[] = [{ id: userID, distance: 0 }];

  while (queue.length > 0) {
    const { id, distance } = queue.shift()!;

    if (id === searchForID) {
      return distance;
    }

    if (searchedUsers.has(id)) {
      continue;
    } else {
      searchedUsers.add(id);
    }

    const user = getUser(id)!;

    for (const family of user.immediateFamily) {
      queue.push({ id: family.userId, distance: distance + 1 });
    }
  }

  return -1;
};
