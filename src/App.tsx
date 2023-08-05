import { Route } from "wouter";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import User from "@/pages/User";
import { useStore } from "@nanostores/react";
import { $currentUser } from "@/stores/user";
import Feed from "./pages/Feed";

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

          <Route path="/:userId">
            {(params) => <User userId={params.userId} />}
          </Route>
        </Navbar>
      )}
    </div>
  );
};

export default App;
