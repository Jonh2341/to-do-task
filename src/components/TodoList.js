import TodoText from "./TaskText";
import "./Todo.css";
import TodoTitle from "./TodoTitle";
import TaskTitle from "./taskTitle";
import { useState } from "react";
import AddTaskButton from "./AddTaskButton";
import EditTaskButton from "./editTaskButton";
import DeleteTaskButton from "./DeleteTaskButton";
import CompleteTaskButton from "./CompleteTaskButton";
import Add from "@mui/icons-material/Add";
import UncompleteTaskButton from "./UncompleteTaskButton";
import ConfirmTaskButton from "./ConfirmTaskButton";

function TodoTask({ 
  itemIndex,
  text, 
  color, 
  DeleteTask, 
  completeTask, 
  disabledDeleteTask, 
  disabledEditTask,
  isComplete,
  editTask,
  uncompleteTask

}) {

  const [editText, setEditText] = useState(text);
  const [isEdit, setIsEdit] = useState(false);

  const EditChange = function (e) {
    const value = e.target.value;
    setEditText(value);
  };

  const handleEdit = function() {
    setIsEdit(!isEdit);
    isEdit && editTask();
  }

  const handleConfirm = function () {
    setIsEdit(false);
    editTask(editText, itemIndex);
  }

  return (
    <div className="task" style={{background: color}}>
      {isEdit == false && <TaskTitle text={text} />}
      {isEdit == true && <TodoText text={editText} onTextChange={EditChange} />}
      <div className="box-button">
        {isEdit == false && <EditTaskButton disabled={disabledEditTask} onEditTask={handleEdit}/>}
        {isEdit == true && <ConfirmTaskButton onConfirmTask={handleConfirm}/>}
        {isEdit == false && <DeleteTaskButton onDeleteTask={DeleteTask} disabled={disabledDeleteTask}/>}
        {isEdit == false && isComplete == false && <CompleteTaskButton onCompleteTask={completeTask}/>}
        {isComplete == true && <UncompleteTaskButton onUncompleteTask={uncompleteTask}/>}
      </div>
    </div>
  );
}

function TodoList() {
  const [task, setTask] = useState([]);
  const [text, setText] = useState("");
  const [completeTasks, setCompleteTasks] = useState([]);

  const isComplete = function(index) {
    if (completeTasks.indexOf(index) >= 0) {
      return true;
    } 

    return false;
  };

  const TextChange = function (e) {
    const value = e.target.value;
    setText(value);
  };

  const AddTask = function () {
    setTask([...task, text]);
    setText("");
  };

  const DeleteTask = function (index) {
    setTask(
      task.filter((value, key) => key != index)   
    )
  }

  const CompleteTask = function (index) {
    setCompleteTasks(
      function(prev) {
        console.log(prev)

        return [...prev.filter(i => i != index), index];
      }
    )
  }

  const UncompleteTask = function (index) {
    setCompleteTasks(
      completeTasks.filter((value, key) => value != index)   
    )
  }
 
  const isDisabled = function () {
    return text ? false : true;
  };

  const EditTask = function (text, index) {
    console.log("edit ",text, index);

    const newTasks = task.map((value, key) => {
      if (key == index) {
        return text;
      }
      return value;
    });

    setTask(newTasks);
  }

  const count = task.length;

  // document.addEventListener("keyup", (event) => {
  //   if (isDisabled && event.code === "Enter") return;
  //   else if (event.code === "Enter") AddTask();
  // });

  return (
    <div className="todo-list">
      <TodoTitle text="To do list" />
      <div className="EnterTask">
        <TodoText text={text} onTextChange={TextChange} />
        <AddTaskButton onAddTask={AddTask} disabled={isDisabled()} />
      </div>
      <div>task count: {count}</div>
      {task.map((value, index) => {
        const color = isComplete(index) ? "#a3dda3" : null;
        const disabled = isComplete(index);
        const complete = isComplete(index);

        return <TodoTask 
        key={index} 
        itemIndex={index}
        text={value} 
        color={color}
        disabledDeleteTask={disabled}
        disabledEditTask={disabled}
        isComplete={complete}
        
        DeleteTask={function () {
          DeleteTask(index) ;
        }}
        
        completeTask={function () {
          CompleteTask(index) ;
        }}

        uncompleteTask={function () {
          UncompleteTask(index);
        }}
        
        editTask={EditTask}

        />;
      })}
    </div>
  );
}

export default TodoList;
