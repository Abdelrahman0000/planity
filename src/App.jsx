import "./App.css";
import { TopNavbar } from "./Component";
import { Arrivail, Client, Featurs, Intro, Plantes } from "./Sections";

function App() {
  return (
    <div className="app">
      <TopNavbar />
      <Intro />
      <Arrivail />
      <Plantes />
      <Featurs />
      <Client />
    </div>
  );
}

export default App;
