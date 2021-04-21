import Nav from "./navbar/Nav";
import Login from "./navbar/Login";
import Register from "./navbar/Register";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Theme from "./Theme";
import Dropdown from "./navbar/Dropdown";
import P2p from "./P2p";
import { GrCloudlinux } from "react-icons/gr";
import { GrActions } from "react-icons/gr";
import {useState} from "react";
import "./app.css";

function App() {
  const [first,setlight]=useState(false);
  const [second,setdark]=useState(false);
 
  return (
    <div className={` light ${first?'fresh':'light'} ${second?'dark':"light"}`}>
      <Router>
        <div  className="z-20 flex absolute right-24 top-64 ">
          <h1 onClick={()=>{setlight(!first)}} className="text-4xl mr-8 text-skin-danger"><GrCloudlinux/></h1>
          <h1 onClick={()=>{setdark(!second)}} className="text-4xl text-skin-base"><GrActions/></h1>
        </div>
        <Nav />
        <Dropdown />
        <Route path="/p2p" exact component={P2p} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Router>
    </div>
  );
}

export default App;
