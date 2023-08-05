import { PropsWithChildren } from "react";
import { FaMagnifyingGlass, FaBars } from "react-icons/fa6";
import logo from "@/assets/images/logo.svg";
import { Link } from "wouter";
import UserPicture from "./UserPicture";
import { $currentUserId, getUser, removeCurrentUser } from "@/stores/user";
import { useStore } from "@nanostores/react";

const dodgyAsFuckCssOverride = {
  "--bc": "32 19% 63%",
  "--n": "32 19% 63%",
} as React.CSSProperties;

const anotherDodgyAsFuckCssOverride = {
  "--bc": "39 12% 44%",
  "--n": "39 12% 44%",
} as React.CSSProperties;

const Navbar: React.FC<PropsWithChildren> = ({ children }) => {
  const currentUserId = useStore($currentUserId)!;
  const currentUser = getUser(currentUserId)!;

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-muted-gold container mx-auto px-3">
          <div className="navbar-start gap-4">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                className="btn btn-square btn-ghost"
                style={{ color: "#ffffff", ...dodgyAsFuckCssOverride }}
              >
                <FaBars size="20px" color="white" />
              </label>
            </div>

            <Link href="/">
              <a className="normal-case" id="logo">
                <img
                  src={logo}
                  alt="LinkedKin logo"
                  className=""
                  draggable="false"
                />
              </a>
            </Link>

            <div className="form-control flex-row relative hidden lg:flex">
              <div className="-mr-8 px-4 absolute h-full">
                <FaMagnifyingGlass className="h-full" color="white" />
              </div>

              <input
                type="text"
                className="input input-bordered w-24 md:w-auto border-muted-gold pl-10 rounded-3xl"
                style={{
                  background: "linear-gradient(to bottom, #bdb096, #7D7463)",
                }}
              />
            </div>
          </div>

          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-display font-bold text-xl">
              {["connections", "guilds"].map((i) => (
                <li key={i}>
                  <a style={{ color: "#ffffff", ...dodgyAsFuckCssOverride }}>
                    {i}
                  </a>
                </li>
              ))}
            </ul>

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <UserPicture
                  profileImage={currentUser.profileImage}
                  name={currentUser.name}
                  size="48px"
                />
              </label>

              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li
                  onClick={() =>
                    (
                      document.querySelector("#logo") as HTMLAnchorElement
                    ).focus()
                  }
                >
                  <Link href={`/${currentUser.id}`}>
                    <a
                      className="justify-between"
                      style={dodgyAsFuckCssOverride}
                    >
                      profile
                      <span className="badge">New</span>
                    </a>
                  </Link>
                </li>
                <li
                  style={dodgyAsFuckCssOverride}
                  onClick={() =>
                    (
                      document.querySelector("#logo") as HTMLAnchorElement
                    ).focus()
                  }
                >
                  <a onClick={() => removeCurrentUser()}>logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-sandstone">
          <Link
            href="/"
            onClick={() => {
              (
                document.querySelector("#my-drawer-3") as HTMLInputElement
              ).checked = false;
            }}
          >
            <a className="normal-case p-4">
              <img
                src={logo}
                alt="LinkedKin logo"
                className=""
                draggable="false"
              />
            </a>
          </Link>

          {[
            { text: "connections" },
            { text: "guilds" },
            { text: "profile", href: `/${currentUser.id}` },
            { text: "logout", onClick: () => removeCurrentUser() },
          ].map(({ text, href, onClick, ...args }) => {
            const item = (
              <a
                style={{ color: "#ffffff", ...anotherDodgyAsFuckCssOverride }}
                {...args}
              >
                {text}
              </a>
            );

            return (
              <li
                onClick={() => {
                  (
                    document.querySelector("#my-drawer-3") as HTMLInputElement
                  ).checked = false;
                  onClick?.();
                }}
                key={text}
              >
                {href ? <Link href={href}>{item}</Link> : item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
