import "./Todo.css";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";


function CompleteTaskButton() {
  return (
    <Button
      variant="contained"
      color="success"
      className="Font"
    >
      Complete
    </Button>
  );
}

export default CompleteTaskButton;
