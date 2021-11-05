import Home from "./components/pages/home/Home";
import Settings from "./components/pages/settings/Settings";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import TopBar from "./components/topbar/TopBar";


function App() {
  return (
    <>
    <div className="App">
        <TopBar/>
        <Settings/>
    </div>
    </>
  );
}

export default App;
