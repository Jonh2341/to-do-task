import { TextField } from "@mui/material";
import AddTaskBtn from "./AddTaskButton";

function TodoText() {
    return (
      <TextField 
        variant="outlined" 
        sx={{width: "80%"}} 
        placeholder="Enter task"
      />
    );
}
  
export default TodoText;
  