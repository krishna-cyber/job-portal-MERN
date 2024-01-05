/** @format */

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Main from "../components/Main";
import { useSelector } from "react-redux";

const Home = () => {
  const searchQuery = useSelector((state) => state.query.query);
  console.log(searchQuery);

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
  }, [searchQuery]);
  return (
    <>
      <Header />
      <Main jobs={jobs} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
