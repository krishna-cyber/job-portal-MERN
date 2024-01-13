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
  const [visibleJobs, setVisibleJobs] = useState([]); //visible jobs on the screen

  //filtering jobs based on search query

  const filterJobs = (jobs) => {
    let filteredJobs;

    if (searchQuery.search === "" && searchQuery.location.length === 0) {
      filteredJobs = jobs;
    } else if (searchQuery.search !== "" && searchQuery.location.length === 0) {
      filteredJobs = jobs.filter((job) => {
        return (
          job.jobTitle
            .toLowerCase()
            .includes(searchQuery.search.toLowerCase()) ||
          job.companyName
            .toLowerCase()
            .includes(searchQuery.search.toLowerCase())
        );
      });
    }
    // filtering jobs based on location . location has array of locations
    else if (searchQuery.search === "" && searchQuery.location.length !== 0) {
      filteredJobs = jobs.filter((job) => {
        return searchQuery.location.includes(job.jobLocation);
      });
      console.log(filteredJobs);
    } else if (searchQuery.search !== "" && searchQuery.location.length !== 0) {
      filteredJobs = jobs.filter((job) => {
        return (
          (job.jobTitle
            .toLowerCase()
            .includes(searchQuery.search.toLowerCase()) ||
            job.companyName
              .toLowerCase()
              .includes(searchQuery.search.toLowerCase())) &&
          searchQuery.location.includes(job.jobLocation)
        );
      });
    }
    setVisibleJobs(filteredJobs);
  };

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    document.title = "Job Portal";

    axios
      .get("jobs.json")
      .then((response) => {
        filterJobs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchQuery]);
  return (
    <>
      <Header />
      <Main jobs={visibleJobs} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
