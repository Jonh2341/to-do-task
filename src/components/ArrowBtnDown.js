import { ArrowDownOutlined } from "@ant-design/icons";
import "./Todo.css";
import { Button } from "antd";

function ArrowBtnDown({onClick}) {
    return (
        <Button icon={<ArrowDownOutlined />} onClick={onClick} size="small"/>
    );
}

export default ArrowBtnDown;