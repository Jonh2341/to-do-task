import { TextField } from "@mui/material";
import AddTaskBtn from "./AddTaskButton";

function TodoText({text, onTextChange}) {
    return (
      <TextField 
        variant="outlined" 
        sx={{width: "80%"}} 
        placeholder="Enter task"
        value={text}
        onChange={onTextChange}
      />
    );
}
  
export default TodoText;
  