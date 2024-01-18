/** @format */
import { useState } from "react";
import { Card, Avatar, Button, Divider, Flex, Radio } from "antd";
const { Meta } = Card;
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { CiDollar, CiCalendarDate } from "react-icons/ci";
const Main = ({ jobs }) => {
  const [size, setSize] = useState("large");
  console.log(jobs);
  return (
    <>
      <main className=' flex justify-between gap-3'>
        <aside className=' w-[30%] flex flex-col gap-2'>
          <h1>Filters</h1>
          <Card title='Location' bordered={false}>
            Location
          </Card>
          <Card title='Salary' bordered={false}>
            <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
              <Radio.Button value='large'>Hourly</Radio.Button>
              <Radio.Button value='default'>Monthly</Radio.Button>
              <Radio.Button value='small'>Yearly</Radio.Button>
            </Radio.Group>
          </Card>
          <Card title='Date of posting' bordered={false}>
            Date of posting
          </Card>
        </aside>

        <div className='center'>
          {" "}
          <h1>
            Total jobs: <span className=' text-green-600'>{jobs.length}</span>{" "}
          </h1>
          {jobs.map((job) => (
            <Card className=' my-2'>
              <Meta
                className=' font-semibold'
                avatar={<Avatar className=' w-20 h-20' src={job.companyLogo} />}
                title={job.jobTitle}
                description={job.companyName}
              />
              <div className=' my-3 text-lg font-extralight flex justify-around items-center'>
                <span className=' flex items-center gap-1'>
                  <IoLocationOutline />
                  {job.jobLocation}
                </span>
                <span className=' flex items-center gap-1'>
                  <IoTimeOutline />
                  {job.employmentType}
                </span>
                <span className=' flex items-center gap-1'>
                  <CiDollar />
                  {job.maxPrice}${job.salaryType}
                </span>
                <span className=' flex items-center gap-1'>
                  <CiCalendarDate />
                  {job.postingDate}
                </span>
              </div>
              <p className=' font-extralight'>{job.description}</p>
            </Card>
          ))}
        </div>
        <aside>
          <h1>subscribe</h1>
        </aside>
      </main>
    </>
  );
};

export default Main;
