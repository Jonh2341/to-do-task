import "./Todo.css";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";


function UncompleteTaskButton({ onUncompleteTask }) {
  return (
    <Button
      variant="contained"
      className="Font"
      onClick={onUncompleteTask}
    >
      Uncomplete
    </Button>
  );
}

export default UncompleteTaskButton;
