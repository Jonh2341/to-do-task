import "./Todo.css";
import { Button } from "@mui/material";

function EditTaskButton({disabled}) {
    return (
        <Button variant="contained" className="Font" disabled={disabled}>Edit</Button>
    );
}

export default EditTaskButton;