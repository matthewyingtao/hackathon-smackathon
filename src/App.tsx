import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import Feed from "@/pages/Feed";
import Guild from "@/pages/Guild";
import Search from "@/pages/Search";
import User from "@/pages/User";
import { $currentUser } from "@/stores/user";
import { useStore } from "@nanostores/react";
import { Route } from "wouter";

const App: React.FC = () => {
  const currentUser = useStore($currentUser);

  return (
    <div className="font-body bg-muted-gold min-h-screen">
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

          <Route path="/search/:query">
            {(params) => <Search query={params.query} />}
          </Route>
        </Navbar>
      )}
    </div>
  );
};

export default App;
