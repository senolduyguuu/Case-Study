"use client";

import Image from 'next/image';
import { useState } from 'react';
import Layer from '../../public/Layer 1.png';
import Circle from '../../public/More Circle.png';
import Plus from '../../public/Plus 4.png';
import Board from './Board';

const BoardCard = ({ boardTitle }) => {
	const [showNewTaskForm, setShowNewTaskForm] = useState(false);
	const [newTask, setNewTask] = useState('');
	const [tasks, setTasks] = useState([]);

	const handleNewTaskClick = () => {
		setShowNewTaskForm(true);
	};

	const handleTaskChange = (e) => {
		setNewTask(e.target.value);
	};

	const handleAddTask = () => {
		const newTasks = [{ title: newTask }, ...tasks];
		setTasks(newTasks);
		setShowNewTaskForm(false);
		setNewTask('');
	};

	return (
		<Board>
			<div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-2">
				<div className="flex items-center">
					<h2 className="font-normal text-Purple text-base mr-2">{boardTitle}</h2>
					<span className="flex items-center justify-center w-6 h-6 bg-CircleColor border-CircleBorderColor border-2 text-CircleTextColor rounded-full text-sm">{tasks.length}</span>
				</div>
				<div className="flex items-center space-x-2">
					<button className="text-blue-500 hover:text-blue-700">
						<Image src={Plus} alt="Plus" width={24} height={24} />
					</button>
					<button className="text-blue-500 hover:text-blue-700">
						<Image src={Circle} alt="Circle" width={24} height={24} />
					</button>
				</div>
			</div>
			<div className='flex-grow flex flex-col justify-center items-center relative'>
				<Image src={Layer} alt="Layer" />
				<div
					className="flex justify-center items-center text-center w-full py-2 text-Gray cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
					onClick={handleNewTaskClick}
				>
					+ New Task
				</div>
			</div>
			{showNewTaskForm && (
				<div className="new-task-form absolute top-0 left-0 w-full p-4 bg-white border rounded shadow-md">
					<input
						type="text"
						value={newTask}
						onChange={handleTaskChange}
						className="border rounded p-2 w-full mb-2"
						placeholder="Enter new task..."
					/>
					<button onClick={handleAddTask} className="bg-blue-500 text-white px-4 py-2 rounded">Add Task</button>
				</div>
			)}
			<div className="mt-4 overflow-x-auto max-h-[20rem] whitespace-nowrap">
				{tasks.map((task, index) => (
					<div key={index} className="border p-2 rounded mb-2 inline-block mr-2">{task.title}</div>
				))}
			</div>
		</Board>
	);
};

export default BoardCard;
