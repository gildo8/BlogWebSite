import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Settings";
import Single from "./pages/single/Single";

function App() {
  const isLoggedin = true;
  return (
<BrowserRouter>
    <TopBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={isLoggedin ? <Home/> : <Register/>}/>
      <Route path="/login" element={isLoggedin ? <Home/> : <Login/>}/>
      <Route path="/write" element={isLoggedin ? <Write/> : <Register/>}/>
      <Route path="/settings" element={isLoggedin ? <Setting/> : <Register/>}/>
      <Route path="/post/:postId" element={isLoggedin ? <Single/> : <Register/>}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;
