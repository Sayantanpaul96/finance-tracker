import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Orb from "./Components/Orb/Orb";
import { useMemo, useState } from "react";
import DashBoard from "./Components/Dashboard/Dashboard";
import Income from "./Components/Income/Income";
import Expenses from "./Components/Expenses/Expenses";
import { useGlobalContext } from "./context/globalContext";

function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext()
  console.log(global);
  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  const displayData = () => {
    switch (active) {
      case 1:
        return <DashBoard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <DashBoard />;
    }
  };

  return (
    <div className="app">
      {orbMemo}
      <div className="main-layout">
        <Navigation active={active} setActive={setActive} />
        <main>{displayData()}</main>
      </div>
    </div>
  );
}

export default App;
