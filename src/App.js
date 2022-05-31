import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Navbar from "./components/Navbar";
import "./App.css";
import HomePage from "./components/HomePage";

import Cryptocurrencies from "./components/Cryptocurrencies";
import CryptoDetails from "./components/CryptoDetails";
import News from "./components/News";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>

          <Route
            path="/cryptocurrencies"
            element={<Cryptocurrencies />}
          ></Route>
          <Route
            exact
            path="/crypto/:coinId"
            element={<CryptoDetails />}
          ></Route>
          <Route path="/news" element={<News />}></Route>
        </Routes>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Copyright © 2021
            <Link to="/">Cryptoverse Inc.</Link> <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>

            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
