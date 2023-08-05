import { Route } from "wouter";
import Navbar from "@/components/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Route path="/">
        <h1>Home</h1>
      </Route>

      <Route path="/:userId">
        <h1>User page</h1>
      </Route>
    </>
  );
};

export default App;
