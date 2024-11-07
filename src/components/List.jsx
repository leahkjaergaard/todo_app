import ListItem from "./ListItem";

const List = ({ tasks, toggleTaskCompletion }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">List</h2>
      {tasks.map((task, index) => (
        <ListItem key={index} task={task} onToggle={() => toggleTaskCompletion(index)} />
      ))}
    </div>
  );
};

export default List;
