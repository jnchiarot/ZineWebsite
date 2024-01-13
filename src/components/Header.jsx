import HomeFetch from "./HomeFetch";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
// import Zines from "./Zines";

const Header = () => {
  return (
    <div className="main-header">
      <Router>
        <nav>
          <ul>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            <li>
              <Link to="/HomeFetch">Zines</Link>
            </li>
          </ul>
        </nav>
        <img
          src="./images/image-from-rawpixel-id-9779147-original.png"
          width={"100px"}
        />

        <Routes>
          {/* <Route path="/" element={<App />}></Route> */}
          <Route path="/HomeFetch" element={<HomeFetch />}></Route>
        </Routes>
      </Router>
    </div>
  );
};
export default Header;
