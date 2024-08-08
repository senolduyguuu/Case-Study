
const TaskModal = ({ task, onClose }) => {
	if (!task) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
				<h2 className="text-xl font-bold mb-4">{task.title}</h2>
				<p>{task.description}</p>
				<button onClick={onClose} className="mt-4 bg-red-500 text-white p-2 rounded">Close</button>
			</div>
		</div>
	);
};

export default TaskModal;
