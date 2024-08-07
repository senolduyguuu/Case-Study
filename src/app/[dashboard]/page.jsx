"use client";
import axios from 'axios';
import { useEffect, useState } from 'react';
import HeaderNav from "../Component/DashboardComponent/HeaderNav";
import LeftLayout from "../Layout/LeftSideBar";
import RightLayout from "../Layout/RightSideBar";

export default function Dashboard() {
	const [boards, setBoards] = useState([]);
	const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTcyMzA1Mzg4M30.CkEBFWrlMEjlyF5XhFn7QlUeN73Lo0i1Ddt8QTri0Ss';

	useEffect(() => {
		const fetchBoards = () => {
			axios.get('https://api.management.parse25proje.link/api/boards', {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
				.then(response => {
					console.log('API Response:', response.data);
					if (response.data && response.data.boards) {
						setBoards(response.data.boards);
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

	return (
		<div className="flex flex-col h-screen">
			<HeaderNav />
			<div className="grid grid-cols-1 md:grid-cols-[282px_minmax(0,_1fr)] gap-4">
				<div className="md:w-[282px]">
					<LeftLayout />
				</div>
				<div className="flex-1 bg-gray-100 overflow-auto">
					<RightLayout boards={boards} />
				</div>
			</div>
		</div>
	);
}
