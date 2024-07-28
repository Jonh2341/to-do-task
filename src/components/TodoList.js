import TodoText from "./TaskText";
import "./Todo.css";
import TodoTitle from "./TodoTitle";
import TaskTitle from "./taskTitle";
import { useState } from "react";
import AddTaskButton from "./AddTaskButton";
import EditTaskButton from "./EditTaskButton";
import DeleteTaskButton from "./DeleteTaskButton";

function TodoTask({text}) {
  return (
    <div className="task">
      <TaskTitle text={text}/>
      <div className="box-button">
        <EditTaskButton />
        <DeleteTaskButton />
      </div>
    </div>
  );
}

function TodoList() {
  const [task, setTask] = useState([]);
  const [text, setText] = useState("");

  const TextChange = function(e) {
    const value = e.target.value;
    setText(value);
  }

  const AddTask = function() {
    setTask([...task, text]);
    setText("");
  }

  const isDisabled = function() {
    if (text) {
      return false;
    } else {
      return true;
    }
  }

  const count = task.length;

  return (
    <div className="todo-list">
      <TodoTitle text="To do list" />
      <div className="EnterTask">
        <TodoText text={text} onTextChange={TextChange}/>
        <AddTaskButton onAddTask={AddTask} disabled={isDisabled()}/>
      </div>
      <div>task count: {count}</div>
      {task.map((value, index) => {
        return (
          <TodoTask key={index} text={value}/>
        );
      })}
    </div>
  );
}

export default TodoList;
