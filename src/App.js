import {BrowserRouter,Routes,Route} from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Home from "./components/pages/home/Home";
import Register from "./components/pages/register/Register";
import Login from "./components/pages/login/Login";
import Write from "./components/pages/write/Write";
import Setting from "./components/pages/settings/Settings";
import Single from "./components/pages/single/Single";

function App() {
  return (
<BrowserRouter>
    <TopBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/write" element={<Write/>}/>
      <Route path="/settings" element={<Setting/>}/>
      <Route path="/post/:postId" element={<Single/>}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;
