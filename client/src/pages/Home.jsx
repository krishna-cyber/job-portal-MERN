/** @format */

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    document.title = "Job Portal";

    axios
      .get("jobs.json")
      .then((response) => {
        console.log(response.data);
        setJobs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
