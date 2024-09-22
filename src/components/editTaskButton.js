import "./Todo.css";
import { Button } from "@mui/material";

function EditTaskButton({disabled, onEditTask}) {
    return (
        <Button variant="contained" className="Font"a onClick={onEditTask} disabled={disabled}>Edit</Button>
    );
}

export default EditTaskButton;