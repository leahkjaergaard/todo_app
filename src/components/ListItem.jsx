const ListItem = ({ task, onToggle }) => {
  return (
    <div className="border rounded p-2 mb-2 flex justify-between items-center">
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.title}</span>
      <button onClick={onToggle} className="bg-blue-500 text-white rounded p-2">
        {task.completed ? "Undo" : "Complete"}
      </button>
    </div>
  );
};

export default ListItem;
