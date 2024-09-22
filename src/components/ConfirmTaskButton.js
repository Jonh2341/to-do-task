import "./Todo.css";
import { Button } from "@mui/material";

function ConfirmTaskButton({disabled, onConfirmTask}) {
    return (
        <Button variant="contained" className="Font" onClick={onConfirmTask} disabled={disabled}>Confirm</Button>
    );
}

export default ConfirmTaskButton;