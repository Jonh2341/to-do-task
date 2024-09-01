import "./Todo.css";
import { Button } from "@mui/material";

function DeleteTaskButton({onDeleteTask, disabled}) {
    const onDeleteTaskHandle = function () {
        onDeleteTask && onDeleteTask();
    }

    return (
        <Button variant="contained" className="Font" onClick={onDeleteTaskHandle} disabled={disabled}>Delete</Button>
    );
}

export default DeleteTaskButton;