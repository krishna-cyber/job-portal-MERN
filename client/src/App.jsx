/** @format */

import "./App.css";
import { Outlet } from "react-router-dom";
import { Button } from "antd";
import { Typography } from "antd";
import Navbar from "./components/Navbar";
const { Title } = Typography;

function App() {
  return (
    <>
      <Title level={1}>h1. Ant Design</Title>
      <Button size='large' type='primary'>
        Button
      </Button>
      <Navbar />
      <Outlet />
      <footer>This is a footer section</footer>
    </>
  );
}

export default App;
