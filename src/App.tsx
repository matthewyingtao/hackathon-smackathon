import { Route, Link } from "wouter";
import Navbar from "@/components/Navbar";
import User from "@/pages/User";
import { useStore } from "@nanostores/react";
import { $users } from "@/stores/user";

const App: React.FC = () => {
  const users = useStore($users);
  return (
    <div className="font-body bg-muted-gold min-h-screen">
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
    </div>
  );
};

export default App;
