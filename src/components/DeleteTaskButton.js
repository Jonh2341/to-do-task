import "./Todo.css";
import { Button } from "@mui/material";

function DeleteTaskButton({onDeleteTask}) {
    const onDeleteTaskHandle = function () {
        onDeleteTask && onDeleteTask();
    }

    return (
        <Button variant="contained" className="Font" onClick={onDeleteTaskHandle}>Delete</Button>
    );
}

export default DeleteTaskButton;