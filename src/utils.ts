import { User } from "./stores/user";

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
