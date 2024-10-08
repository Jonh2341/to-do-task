import "./Todo.css";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";


function CompleteTaskButton({ onCompleteTask }) {
  return (
    <Button
      variant="contained"
      color="success"
      className="Font"
      onClick={onCompleteTask}
    >
      Complete
    </Button>
  );
}

export default CompleteTaskButton;
