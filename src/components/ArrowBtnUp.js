import "./Todo.css";
import { Button } from "@mui/material";

function ArrowBtnUp({disabled, onBtnUp}) {
    return (
        <Button variant="contained" className="Font"a onClick={onBtnUp} disabled={disabled}>^</Button>
    );
}

export default ArrowBtnUp;