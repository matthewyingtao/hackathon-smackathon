import {
  User,
  UserImmediateFamilyRelationshipEnum,
  getUser,
} from "@/stores/user";
import { Fragment } from "react";
import { Link } from "wouter";
import UserPicture from "./UserPicture";

interface UserFamilyProps {
  user: User;
}

const UserFamily: React.FC<UserFamilyProps> = ({ user }) => {
  const familyInterface = Object.values(UserImmediateFamilyRelationshipEnum)
    .map((_, i) => {
      const familyOfRelation = user.immediateFamily.filter(
        (u) => u.relationship === i,
      );

      if (familyOfRelation.length === 0) return null;

      return (
        <Fragment key={i}>
          <h3 className="card-title font-display text-2xl">
            {i === UserImmediateFamilyRelationshipEnum.PARENT
              ? "Parents"
              : i === UserImmediateFamilyRelationshipEnum.SIBLING
              ? "Siblings"
              : i === UserImmediateFamilyRelationshipEnum.SPOUSE
              ? "Spouse"
              : i === UserImmediateFamilyRelationshipEnum.CHILD
              ? "Children"
              : null}
          </h3>

          <div className="flex flex-row gap-2">
            {familyOfRelation.map((u, i) => {
              const uInfo = getUser(u.userId)!;

              return (
                <Link href={`/user/${u.userId}`} key={i}>
                  <a className="w-12 h-12">
                    <UserPicture
                      profileImage={uInfo.profileImage}
                      name={uInfo.name}
                      size="48px"
                    />
                  </a>
                </Link>
              );
            })}
          </div>
        </Fragment>
      );
    })
    .filter((i) => i !== null);

  return (
    <div className="card w-full bg-sandstone shadow-xl col-span-12 lg:col-span-4">
      <div className="card-body p-4">
        <h2 className="card-title font-accent text-4xl">Familial Relations</h2>
        {familyInterface.length ? familyInterface : "No family members found."}
      </div>
    </div>
  );
};

export default UserFamily;
