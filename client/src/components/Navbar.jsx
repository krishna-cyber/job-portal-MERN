/** @format */

import { Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navItems = [
    {
      name: "Start a Job Search",
      path: "/",
    },
    {
      name: "My Jobs",
      path: "/my-job",
    },
    {
      name: "Salary Estimate",
      path: "/salary",
    },
    {
      name: "Post Job",
      path: "/post-job",
    },
  ];

  return (
    <header>
      <nav className=' flex'>
        <a
          href='/'
          className=' flex  items-center no-underline text-2xl text-black gap-2'>
          <svg
            width='29'
            height='30'
            viewBox='0 0 29 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <circle
              cx='12.0143'
              cy='12.5143'
              r='12.0143'
              fill='#3575E2'
              fill-opacity='0.4'
            />
            <circle cx='16.9857' cy='17.4857' r='12.0143' fill='#3575E2' />
          </svg>
          <span>Job Portal</span>
        </a>
        {/* Creating a navlinks  */}
        <ul className='flex items-center gap-12 text-[1.2rem]'>
          {navItems.map(({ name, path }) => (
            <li key={path} className=' list-none'>
              <NavLink
                to={path}
                className='text-black no-underline hover:text-blue-600'>
                {name}
              </NavLink>
            </li>
          ))}
          <Button type='primary' className='rounded-md'>
            Login
          </Button>
          <Button type='primary' className='rounded-md'>
            Register
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
