import { $users, User } from "@/stores/user";
import UserPicture from "./UserPicture";
import { Link } from "wouter";

interface UserFamilyProps {
  user: User;
}

const UserFamily: React.FC<UserFamilyProps> = () => {
  const example = $users.get()[0];

  const parents = [example, example];
  // const siblings = [example, example, example];
  // const spouse = [example, example, example];
  // const children = [example, example, example];

  return (
    <div className="card w-full bg-sandstone shadow-xl col-span-12 lg:col-span-4">
      <div className="card-body p-4">
        <h2 className="card-title font-accent text-4xl">Familial Relations</h2>

        <h3 className="card-title font-display text-2xl">Parents</h3>
        <div className="flex flex-row gap-2">
          {parents.map((p, i) => (
            <Link href={`/${p.id}`} key={i}>
              <a className="w-12 h-12">
                <UserPicture
                  profileImage={p.profileImage}
                  name={p.name}
                  size="48px"
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserFamily;
