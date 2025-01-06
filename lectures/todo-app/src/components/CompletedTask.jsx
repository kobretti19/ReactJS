const CompletedTask = ({ ...editedTasks }) => {
  return (
    <>
      <div>
        <ol className="bg-slate-300 ">
          {editedTasks.map((task) => {
            if (task.text) {
              return <li key={task.id}>{task.text}</li>;
            }
          })}
        </ol>
      </div>
      ;
    </>
  );
};
export default CompletedTask;
// if (task.text) {
//   return (
