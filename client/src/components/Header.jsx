/** @format */

import Navbar from "./Navbar";
import { Button, Input, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { query } from "../features/search/searchSlice";

import { CiSearch, CiLocationOn } from "react-icons/ci";
import { useState } from "react";

const Header = () => {
  const searchTerms = useSelector((state) => state.query.query);
  const [searchTerm, setSearchTerm] = useState({
    search: "",
    location: [],
  });

  const dispatch = useDispatch();
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setSearchTerm((prevState) => ({
      ...prevState,
      location: value,
    }));
  };

  const handleSubmit = () => {
    console.log(searchTerms);
    dispatch(query(searchTerm));
  };
  return (
    <header>
      <Navbar />
      <h2 className=' text-2xl mt-2 font-semibold md:text-[3rem] my-0'>
        Find your <span className=' text-blue-600'>new job</span> today
      </h2>
      <p className=' text-lg'>
        Thousands of jobs in the computer, engineering and job you can search
        here.
      </p>
      <form className=' flex flex-col gap-2 md:gap-1 md:flex-row  w-full'>
        <Input
          className=' rounded-none'
          placeholder={` Search for jobs, companies, and more...`}
          allowClear
          prefix={<CiSearch />}
          onChange={(e) => {
            setSearchTerm((prevState) => ({
              ...prevState,
              search: e.target.value,
            }));
          }}
          size='large'
        />

        <Select
          suffixIcon={
            <span className=' text-lg font-semibold text-black'>
              <CiLocationOn />
            </span>
          }
          mode='tags'
          style={{ width: "100%" }}
          placeholder='Location'
          size='large'
          onChange={handleChange}
          options={[
            { value: "London" },
            { value: "Boston" },
            { value: "Brussels" },
            { value: "San Francisco" },
            { value: "Seattle " },
          ]}
        />
        <Button
          shape={"default"}
          size={"large"}
          type='primary'
          onClick={handleSubmit}>
          Search Jobs
        </Button>
      </form>
    </header>
  );
};

export default Header;
