/** @format */

import { useState } from "react";
import "./App.css";
import { Button } from "antd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className=' text-red-400 '>hello from react</p>
      <Button size='large' type='primary'>
        Button
      </Button>
    </>
  );
}

export default App;
