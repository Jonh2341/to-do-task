import TodoText from "./TaskText";
import "./Todo.css";
import TodoTitle from "./TodoTitle";
import AddTaskButton from "./AddTaskButton";
import TaskTitle from "./taskTitle";
import EditTaskButton from "./editTaskButton";
import DeleteTaskButton from "./DeleteTaskButton";

function TodoTask() {
  return (
    <div className="task">
      <TaskTitle />
      <div className="box-button">
        <EditTaskButton />
        <DeleteTaskButton />
      </div>
    </div>
  );
}

function TodoList() {
  return (
    <div className="todo-list">
      <TodoTitle text="To do list" />
      <div className="EnterTask">
        <TodoText />
        <AddTaskButton />
      </div>
      <TodoTask />
    </div>
  );
}

export default TodoList;
