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

function TodoTask({ 

  text, 
  color, 
  DeleteTask, 
  completeTask, 
  disabledDeleteTask, 
  disabledEditTask,
  isComplete,
  uncompleteTask

}) {
  return (
    <div className="task" style={{background: color}}>
      <TaskTitle text={text} />
      <div className="box-button">
        <EditTaskButton disabled={disabledEditTask}/>
        <DeleteTaskButton onDeleteTask={DeleteTask} disabled={disabledDeleteTask}/>
        {isComplete == false && <CompleteTaskButton onCompleteTask={completeTask}/>}
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
    alert("Delete " + index)
    setTask(
      task.filter((value, key) => key != index)   
    )
  }

  const CompleteTask = function (index) {
    alert("Complete " + index)
    setCompleteTasks(
      function(prev) {
        console.log(prev)

        return [...prev.filter(i => i != index), index];
      }
    )
  }

  const UncompleteTask = function (index) {
    alert("Delete " + index)
    setCompleteTasks(
      completeTasks.filter((value, key) => value != index)   
    )
  }
 
  const isDisabled = function () {
    return text ? false : true;
  };

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
        
        />;
      })}
    </div>
  );
}

export default TodoList;
