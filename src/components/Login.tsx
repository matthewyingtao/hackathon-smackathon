import { $users, getUser } from "@/stores/user";
import { useStore } from "@nanostores/react";
import { useState } from "react";
import LoginConfirmationModal from "./LoginConfirmationModal";

export const Login: React.FC = () => {
  const users = useStore($users);

  const [selectedUser, setSelectedUser] = useState<string | null>(users[0].id);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <div className="min-h-screen justify-center items-center flex p-3">
        <div className="card bg-sandstone shadow-xl w-96 max-w-full grow-0">
          <div className="card-body">
            <h2 className="card-title font-accent text-4xl">Login</h2>

            <select
              value={selectedUser ?? undefined}
              onChange={(e) => setSelectedUser(e.target.value)}
              className="select w-full max-w-xs"
              style={{
                background: "linear-gradient(to bottom, #B2A18D, #8F7A54)",
              }}
            >
              {users.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name}
                </option>
              ))}
            </select>

            <button
              className="btn btn-primary ml-auto"
              onClick={() => setShowConfirm(true)}
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {selectedUser && (
        <LoginConfirmationModal
          user={getUser(selectedUser)!}
          show={showConfirm}
          setShow={setShowConfirm}
        />
      )}
    </>
  );
};

export default Login;
