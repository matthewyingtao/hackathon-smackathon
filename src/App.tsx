import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import Feed from "@/pages/Feed";
import Guild from "@/pages/Guild";
import Search from "@/pages/Search";
import User from "@/pages/User";
import { $currentUserId } from "@/stores/user";
import { useStore } from "@nanostores/react";
import { Route } from "wouter";

const App: React.FC = () => {
  const currentUser = useStore($currentUserId);

  return (
    <div className="font-body bg-muted-gold min-h-screen text-[hsl(215_28%_17%)]">
      {currentUser === null ? (
        <Login></Login>
      ) : (
        <Navbar>
          <Route path="/">
            <Feed />
          </Route>

          <Route path="/guild/:guildId">
            {(params) => <Guild guildId={params.guildId} />}
          </Route>

          <Route path="/:userId">
            {(params) => <User userId={params.userId} />}
          </Route>

          <Route path="/search">
            <Search />
          </Route>
        </Navbar>
      )}
    </div>
  );
};

export default App;
