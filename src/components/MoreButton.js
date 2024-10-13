import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Divider } from "antd";
const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

const MoreButton = ({ items }) => (
  <Dropdown
    trigger={['click']}
    dropdownRender={() => (
      <div style={{background: "#fff"}}>
        <Divider
          style={{
            margin: 0,
          }}
        />
        <Space
          style={{
            padding: 8,
          }}
        >
          {items}
        </Space>
      </div>
    )}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        More
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default MoreButton;
