import { $users, getUser } from "@/stores/user";
import { useStore } from "@nanostores/react";
import { motion } from "framer-motion";
import { useState } from "react";
import LoginConfirmationModal from "./LoginConfirmationModal";
import logo from "@/assets/images/logo.svg";

export const Login: React.FC = () => {
  const users = useStore($users);

  const [selectedUser, setSelectedUser] = useState<string | null>(users[0].id);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <div className="min-h-screen flex-col justify-center items-center flex p-3">
        <img
          src={logo}
          alt="LinkedKin logo"
          className="mb-6"
          draggable="false"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0 }}
          className="card bg-sandstone shadow-xl w-96 max-w-full grow-0"
        >
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
              className="btn ml-auto"
              onClick={() => setShowConfirm(true)}
            >
              Login
            </button>
          </div>
        </motion.div>
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
