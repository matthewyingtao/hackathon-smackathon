import frame from "@/assets/images/frame.png";

interface UserPictureProps {
  profileImage: string;
  name: string;
  size: `${number}px`;
}

const UserPicture: React.FC<UserPictureProps> = ({
  profileImage,
  name,
  size,
}) => {
  return (
    <div
      className="absolute w-36 h-36"
      style={{
        width: size,
        height: size,
      }}
    >
      <img
        src={frame}
        alt=""
        className="absolute w-full h-full"
        draggable="false"
      />

      <img
        src={profileImage}
        alt={`Profile image for ${name}`}
        className="m-2 object-cover rounded-full"
        draggable="false"
        style={{
          width: `calc(${size} - 16px)`,
          height: `calc(${size} - 16px)`,
        }}
      />
    </div>
  );
};

export default UserPicture;
