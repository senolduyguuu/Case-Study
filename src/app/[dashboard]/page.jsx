"use client";
import axios from 'axios';
import { useEffect, useState } from 'react';
import HeaderNav from "../Component/DashboardComponent/HeaderNav";
import LeftLayout from "../Layout/LeftSideBar";
import RightLayout from "../Layout/RightSideBar";

export default function Dashboard() {
	const [boards, setBoards] = useState([]);
	const [selectedTask, setSelectedTask] = useState(null);
	const [showPopup, setShowPopup] = useState(false);
	const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwNCwiaWF0IjoxNzIzMTAyNjI2fQ.TwfiadXs88pzE6XrHldYJvN4V8kzUzqLfmYxBNzNEuc';

	useEffect(() => {
		const fetchBoards = () => {
			axios.get('https://api.management.parse25proje.link/api/boards', {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
				.then(response => {
					console.log('API Response:', response.data);
					// Yanıtın tam yapısını kontrol etmek için:
					console.log('API Full Response:', response);

					// Yanıtın doğru yapıda olup olmadığını kontrol edin:
					if (response.data && Array.isArray(response.data.data)) {
						setBoards(response.data.data);  // Doğru alanın kullanıldığından emin olun
					} else {
						console.error('Unexpected API response format:', response.data);
					}
				})
				.catch(error => {
					console.error('API request failed:', error);
				});
		};

		fetchBoards();
	}, [token]);

	useEffect(() => {
		console.log("Boards state updated:", boards);
	}, [boards]);

	const handleTaskClick = (task) => {
		setSelectedTask(task);
		setShowPopup(true);
	};

	const handleClosePopup = () => {
		setSelectedTask(null);
		setShowPopup(false);
	};

	return (
		<>
			<div className="flex flex-col h-screen">
				<HeaderNav />
				<div className="grid grid-cols-1 md:grid-cols-[282px_minmax(0,_1fr)] gap-4">
					<div className="md:w-[282px]">
						<LeftLayout />
					</div>
					<div className="flex-1 bg-gray-100 overflow-auto">
						<RightLayout boards={boards} onTaskClick={handleTaskClick} />
					</div>
				</div>
			</div>
		</>
	);
}
