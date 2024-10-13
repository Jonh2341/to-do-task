import { ArrowUpOutlined } from "@ant-design/icons";
import "./Todo.css";
import { Button } from "antd";

function ArrowBtnUp({onClick}) {
    return (
        <Button icon={<ArrowUpOutlined />} onClick={onClick} size="small"/>
    );
}

export default ArrowBtnUp;