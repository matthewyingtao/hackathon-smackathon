export default function Navbar() {
  return (
    <div className="navbar bg-base-100 p-4">
      <div className="navbar-start flex flex-row gap-4">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <h1 className="font-bold text-4xl">LinkedKin</h1>
      </div>
      <div className="navbar-end">
        <button>
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
