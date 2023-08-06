import { UserOpenTo } from "@/stores/user";
import marriage from "@/assets/images/marriage.png";
import mistress from "@/assets/images/mistress.png";
import work from "@/assets/images/work.png";

interface UserPictureProps {
  openTo: UserOpenTo;
  size: `${number}px`;
}

const UserStatus: React.FC<UserPictureProps> = ({ openTo, size }) => {
  return openTo == undefined ? null : (openTo as UserOpenTo) ===
    UserOpenTo.MARRIAGE ? (
    <img
      draggable={false}
      src={marriage}
      alt=""
      className="absolute right-2"
      style={{
        height: size,
      }}
    />
  ) : openTo === UserOpenTo.MISTRESS ? (
    <img
      draggable={false}
      src={mistress}
      alt=""
      className="absolute right-2 h-20"
      style={{
        height: size,
      }}
    />
  ) : (
    <img
      draggable={false}
      src={work}
      alt=""
      className="absolute right-2 h-20"
      style={{
        height: size,
      }}
    />
  );
};

export default UserStatus;
