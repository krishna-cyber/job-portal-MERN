/** @format */

import { useState } from "react";
import { Card, Radio, Input, Space } from "antd";

const Filter = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <aside className=' w-[30%] flex flex-col gap-2'>
      <h1>Filters</h1>
      <Card title='Location' bordered={false}>
        <Radio.Group onChange={onChange} value={value}>
          <Space direction='vertical'>
            <Radio defaultChecked={true} value={1}>
              All
            </Radio>
            <Radio value={2}>London</Radio>
            <Radio value={3}>Seattle</Radio>
            <Radio value={4}>Madrid</Radio>
            <Radio value={5}>Boston</Radio>
            <Radio value={6}>
              Search...
              {value === 6 ? (
                <Input
                  style={{
                    width: 100,
                    marginLeft: 10,
                  }}
                />
              ) : null}
            </Radio>
          </Space>
        </Radio.Group>
      </Card>
      <Card title='Salary' bordered={false}>
        <Radio.Group onChange={(e) => setSize(e.target.value)}>
          <Radio.Button value='large'>Hourly</Radio.Button>
          <Radio.Button value='default'>Monthly</Radio.Button>
          <Radio.Button value='small'>Yearly</Radio.Button>
        </Radio.Group>
      </Card>
      <Card title='Date of posting' bordered={false}>
        Date of posting
      </Card>
    </aside>
  );
};

export default Filter;
