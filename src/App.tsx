import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import Feed from "@/pages/Feed";
import GuildPage from "@/pages/Guild";
import Search from "@/pages/Search";
import User from "@/pages/User";
import { $currentUserId } from "@/stores/user";
import { useStore } from "@nanostores/react";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "wouter";

const App: React.FC = () => {
  const currentUser = useStore($currentUserId);
  const [location] = useLocation();

  return (
    <div className="font-body bg-muted-gold min-h-screen text-[hsl(215_28%_17%)]">
      {currentUser === null ? (
        <Login></Login>
      ) : (
        <Navbar>
          <AnimatePresence>
            <Switch key={location}>
              <Route path="/">
                <Feed />
              </Route>
              <Route path="/guilds">
                <GuildPage />
              </Route>
              <Route path="/guild/:guildId">
                {(params) => <GuildPage guildId={params.guildId} />}
              </Route>
              <Route path="/user/:userId">
                {(params) => <User userId={params.userId} />}
              </Route>
              <Route path="/search">
                <Search />
              </Route>
            </Switch>
          </AnimatePresence>
        </Navbar>
      )}
    </div>
  );
};

export default App;
