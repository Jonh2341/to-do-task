import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function AddTaskButton({onAddTask, disabled}) {
  const addHanddle = function() {
    onAddTask && onAddTask();
  }

  return (
    <Button 
      variant="contained" 
      startIcon={<AddIcon />}
      onClick={addHanddle}
      disabled={disabled}>
      Add
    </Button>
  );
}

export default AddTaskButton;
