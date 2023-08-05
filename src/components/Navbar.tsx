import { FaMagnifyingGlass } from "react-icons/fa6";
import logo from "@/assets/images/logo.svg";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-muted-gold container mx-auto">
      <div className="navbar-start gap-2">
        <a className="btn btn-ghost normal-case">
          <img src={logo} alt="LinkedKin logo" className="" />
        </a>

        <div className="form-control flex flex-row relative">
          <div className="-mr-8 px-2 absolute h-full">
            <FaMagnifyingGlass className="h-full" />
          </div>

          <input
            type="text"
            className="input input-bordered w-24 md:w-auto border-muted-gold pl-8"
            style={{
              background: "linear-gradient(to bottom, #bdb096, #7D7463)",
            }}
          />
        </div>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 font-display font-bold text-xl">
          <li>
            <a>home</a>
          </li>

          <li>
            <a>connections</a>
          </li>

          <li>
            <a>guilds</a>
          </li>
        </ul>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>

          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
