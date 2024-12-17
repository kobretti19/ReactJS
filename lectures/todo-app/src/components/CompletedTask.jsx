const CompletedTask = (completedTasks) => {
  return (
    <>
      <div>
        <ol className="bg-slate-300 ">
          {completedTasks.map((task) => {
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
