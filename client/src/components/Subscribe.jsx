/** @format */

import React from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { Card, Input, Button } from "antd";

const Subscribe = () => {
  return (
    <aside className=' w-[30%] flex flex-col gap-2'>
      <h1>Subscribe</h1>
      <Card
        title={
          <span className=' text-xl flex gap-2 items-center font-medium'>
            <MdOutlineMarkEmailUnread className=' text-3xl text-green-500' />{" "}
            <span>Email me for jobs</span>
          </span>
        }>
        <p>Get the latest jobs sent to your inbox</p>
        <span className=' flex flex-col gap-2'>
          {" "}
          <Input
            className=' border-2 border-gray-200 rounded-md p-2'
            type='email'
            placeholder='Email'
          />
          <Button type='primary' size={"large"}>
            Subscribe
          </Button>
        </span>
      </Card>
    </aside>
  );
};

export default Subscribe;
