const TaskCard = ({ title, id, points }) => {
  return (
    <div className="border rounded-lg px-2 m-2 bg-gray-50">
      <div className="text-base font-semibold text-gray-700 py-2">{title}</div>
      <div className="flex justify-between py-2">
        <div>{id}</div>
        <div>{points}</div>
      </div>
    </div>
  );
};

export default TaskCard;
