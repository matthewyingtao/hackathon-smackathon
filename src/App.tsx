import { Route, Link } from "wouter";
import Navbar from "@/components/Navbar";
import User from "@/pages/User";
import { useStore } from "@nanostores/react";
import { $users } from "@/stores/user";

const App: React.FC = () => {
  const users = useStore($users);
  return (
    <>
      <Navbar />

      <Route path="/">
        {users.map((u) => (
          <Link key={u.id} href={u.id}>
            {u.name}
          </Link>
        ))}
      </Route>

      <Route path="/:userId">
        {(params) => <User userId={params.userId} />}
      </Route>
    </>
  );
};

export default App;
