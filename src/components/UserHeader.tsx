import { User } from "@/stores/user";

interface UserHeaderProps {
  user: User;
}

const UserHeader: React.FC<UserHeaderProps> = ({ user }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={user.coverImage} alt={`Cover image for ${user.name}`} />
      </figure>

      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
