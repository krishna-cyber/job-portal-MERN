/** @format */

import React from "react";
import Navbar from "./Navbar";
import { Button, Input, Select } from "antd";

import { CiSearch, CiLocationOn } from "react-icons/ci";
import Tag11 from "./Tag11";

const onSearch = (value) => console.log(value);
const Header = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
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
      <div className=' flex flex-col gap-2 md:gap-0 md:flex-row  w-full'>
        <Input
          className=' rounded-none'
          placeholder={` Search for jobs, companies, and more...`}
          allowClear
          prefix={<CiSearch />}
          onSearch={onSearch}
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
        <Button shape={"default"} size={"large"} type='primary'>
          Search Jobs
        </Button>
      </div>
      <Tag11 />
    </header>
  );
};

export default Header;
