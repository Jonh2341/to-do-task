import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import TodoList from "./TodoList";

function AddTaskButton() {
    return (
      <Button variant="contained" startIcon={<AddIcon/>}>Add</Button>
    );
}
  
export default AddTaskButton;
  