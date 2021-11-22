import {useContext} from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import { Context } from './context/Context';

function App() {
  const {user} = useContext(Context);
  return (
<BrowserRouter>
    <TopBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={user ? <Home/> : <Register/>}/>
      <Route path="/login" element={user ? <Home/> : <Login/>}/>
      <Route path="/write" element={user ? <Write/> : <Register/>}/>
      <Route path="/settings" element={user ? <Setting/> : <Register/>}/>
      <Route path="/post/:postId" element={user ? <Single/> : <Register/>}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;
