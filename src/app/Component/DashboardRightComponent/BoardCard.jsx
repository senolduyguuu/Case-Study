"use client";

import PopUpLayout from '@/app/Layout/PopUplayout';
import Image from 'next/image';
import { useState } from 'react';
import AvatarOne from '../../public/Avatar group.png';
import Calendar from '../../public/Calendar - 2 1.png';
import FlagOne from "../../public/Flag - 1.png";
import Layer from '../../public/Layer 1.png';
import Circle from '../../public/More Circle.png';
import Plus from '../../public/Plus 4.png';
import Rectangle from "../../public/Rectangle 41978.png";
import Board from './Board';

const BoardCard = ({ boardTitle }) => {
	const [showNewTaskForm, setShowNewTaskForm] = useState(false);
	const [newTask, setNewTask] = useState({ title: '', description: '', date: '', milestone: '', members: [], titleColor: 'text-Orange' });
	const [tasks, setTasks] = useState([]);
	const [showTaskDetails, setShowTaskDetails] = useState(false);
	const [selectedTask, setSelectedTask] = useState(null);

	const handleNewTaskClick = () => {
		setShowNewTaskForm(true);
	};

	const handleTaskChange = (e) => {
		const { name, value } = e.target;
		setNewTask((prevTask) => ({ ...prevTask, [name]: value }));
	};

	const handleAddTask = () => {
		const newTasks = [{ ...newTask }, ...tasks];
		setTasks(newTasks);
		setShowNewTaskForm(false);
		setNewTask({ title: '', description: '', date: '', milestone: '', members: [], titleColor: 'text-Orange' });
	};

	const handleTaskClick = (task) => {
		setSelectedTask(task);
		setShowTaskDetails(true);
	};

	const handleCloseTaskDetails = () => {
		setShowTaskDetails(false);
		setSelectedTask(null);
	};

	return (
		<Board>
			<div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-2">
				<div className="flex items-center">
					<h2 className="font-normal text-Purple text-base mr-2">Board Title</h2>
					<span className="flex items-center justify-center w-6 h-6 bg-CircleColor border-CircleBorderColor border-2 text-CircleTextColor rounded-full text-sm">{tasks.length}</span>
				</div>
				<div className="flex items-center space-x-2">
					<button className="text-blue-500 hover:text-blue-700" onClick={handleNewTaskClick}>
						<Image src={Plus} alt="Plus" width={24} height={24} />
					</button>
					<button className="text-blue-500 hover:text-blue-700">
						<Image src={Circle} alt="Circle" width={24} height={24} />
					</button>
				</div>
			</div>
			<div className='flex-grow flex flex-col justify-center items-center relative group'>
				<Image src={Layer} alt="Layer" />
				<div
					className="flex justify-center items-center text-center w-full py-2 text-Gray cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
					onClick={handleNewTaskClick}
				>
					+ New Task
				</div>
			</div>
			{showNewTaskForm && (
				<div className="new-task-form absolute top-0 left-0 w-full p-4 bg-white border rounded shadow-md z-10">
					<input
						type="text"
						name="title"
						value={newTask.title}
						onChange={handleTaskChange}
						className="border rounded p-2 w-full mb-2"
						placeholder="Enter task title..."
					/>
					<textarea
						name="description"
						value={newTask.description}
						onChange={handleTaskChange}
						className="border rounded p-2 w-full mb-2"
						placeholder="Enter task description..."
					/>
					<input
						type="date"
						name="date"
						value={newTask.date}
						onChange={handleTaskChange}
						className="border rounded p-2 w-full mb-2"
					/>
					<input
						type="text"
						name="milestone"
						value={newTask.milestone}
						onChange={handleTaskChange}
						className="border rounded p-2 w-full mb-2"
						placeholder="Enter milestone..."
					/>
					<button onClick={handleAddTask} className="bg-blue-500 text-white px-4 py-2 rounded">Add Task</button>
				</div>
			)}
			<div className="mt-4 overflow-y-auto max-h-[20rem]">
				{tasks.map((task, index) => (
					<div key={index} className="rounded-lg p-4 border border-BorderColor hover:shadow-lg hover:border-blue-500 transition duration-300 ease-in-out cursor-pointer" onClick={() => handleTaskClick(task)}>
						<h3 className={`font-semibold text-sm mb-2 ${task.titleColor || 'text-Orange'}`}>{task.title}</h3>
						<p>{task.description}</p>
						<div className="flex justify-between items-center">
							<p className="font-medium text-DescriptionText mb-2 text-sm">{task.description}</p>
							<div className="flex">
								{task.members && task.members.map((member, memberIndex) => (
									<div key={memberIndex} className="relative w-8 h-8">
										<Image
											src={member.imgSrc || AvatarOne}
											alt={member.name}
											layout="fixed"
											width={32}
											height={32}
											className="rounded-full border-2 border-white"
										/>
									</div>
								))}
							</div>
						</div>
						<div className='flex gap-2'>
							<div>
								<Image
									src={Calendar}
									alt="Calendar"
									layout="fixed"
									width={16}
									height={16}
								/>
							</div>
							<div className="text-xs text-gray-500 mb-2">{task.date}</div>
						</div>
						<div className='flex gap-4'>
							<div className="relative w-4 h-4">
								<Image src={Rectangle} alt="Rectangle" layout="fixed" width={16} height={16} />
							</div>
							<div className="text-xs text-gray-500">{task.milestone}</div>
							<div className="relative w-4 h-4">
								<Image src={task.flag || FlagOne} alt="Flag" layout="fixed" width={16} height={16} />
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='relative'>
				{showTaskDetails && selectedTask && (
					<div
						className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10"
						onClick={handleCloseTaskDetails}
					>
						<div
							className="bg-white rounded-lg shadow-lg p-4 max-w-[78.75rem] w-full mx-4 my-6 sm:my-10"
							onClick={(e) => e.stopPropagation()}
						>
							<PopUpLayout onClose={handleCloseTaskDetails} />
						</div>
					</div>
				)}
			</div>
		</Board>
	);
};

export default BoardCard;
