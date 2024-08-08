"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const RightBtn = () => {
	const router = useRouter();
	const [selectedTab, setSelectedTab] = useState('Boards');

	const buttons = ["Boards", "List", "Other", "Other", "Other", "Other", "Other"];

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const tab = urlParams.get('tab');
		if (tab) {
			setSelectedTab(tab);
		}
	}, []);

	const handleTabClick = (tab) => {
		setSelectedTab(tab);
		const url = new URL(window.location);
		url.searchParams.set('tab', tab);
		router.push(url.toString());
	};

	return (
		<div className="w-full max-w-[31.125rem] mt-11 border border-gray-200 rounded-lg overflow-x-auto">
			<div className="flex">
				{buttons.map((button, index) => (
					<div
						key={index}
						onClick={() => handleTabClick(button)}
						className={`flex-grow flex-shrink-0 px-3 py-2 border-r last:border-r-0 cursor-pointer ${selectedTab === button ? 'text-DarkBlue font-semibold' : 'text-black'
							} bg-white`}
					>
						{button}
					</div>
				))}
			</div>
		</div>
	);
};

export default RightBtn;
