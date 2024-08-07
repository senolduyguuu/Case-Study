"use client";
import Image from 'next/image';
import { useState } from 'react';
import BottomIcon from "../../public/assets/BottomIcon.png";
import ProjectIcon from "../../public/assets/ProjectIcon.png";
import CircleIcon from "../../public/placeholder.png";

const projects = [
	{ name: "Proje İsim 1", notifications: 10, color: "#F04438" },
	{ name: "Proje İsim 2", notifications: 10, color: "#2083D7" },
	{ name: "Proje İsim 3", notifications: 10, color: "#FEC84B" },
	{ name: "Proje İsim 4", notifications: 10, color: "#7F56D9" }
];

const sections = ["Overview", "Notifications", "Analytics", "Reports"];

const LeftSideBarNav = () => {
	const [expandedProject, setExpandedProject] = useState(3);

	const toggleProject = (index) => {
		setExpandedProject(expandedProject === index ? null : index);
	};

	return (
		<div className="flex flex-col h-full bg-white p-4">
			<h2 className="text-base font-medium leading-6 text-black">Projeler</h2>
			<ul className="mt-4 space-y-4 flex-grow">
				{projects.map((project, index) => (
					<li key={index} className="flex flex-col space-y-2">
						<div
							className={`flex justify-between items-center p-2 rounded cursor-pointer space-x-9 ${project.name === "Proje İsim 1" ? 'bg-RightBgColor text-DarkBlue' : ''}`}
							onClick={() => toggleProject(index)}
						>
							<div className="flex items-center">
								<span
									className={`h-2 w-2 rounded-full mr-2`}
									style={{ backgroundColor: project.color }}
								></span>
								<p className='text-sm font-normal'>{project.name}</p>
							</div>
							<Image src={BottomIcon} alt="Toggle Icon" width={10} height={5} />
						</div>
						{expandedProject === index && (
							<ul className="ml-4 text-gray-600">
								{sections.map((section, sectionIndex) => (
									<li key={sectionIndex} className="flex justify-between p-2">
										<span className='text-xs'>{section}</span>
										<span className="bg-BorderColor border border-BorderColor rounded-full px-2 w-[28px] h-[22px] text-center text-xs font-medium Component text-utility-gray-700 flex justify-center items-center">{project.notifications}</span>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
				<button className="flex gap-6 items-center justify-center">
					<Image src={ProjectIcon} alt="Project Icon" width={24} height={24} />
					<p className='text-sm font-normal text-LightGray'>Proje Oluştur</p>
				</button>
			</ul>
			<div>
				<div className='flex justify-between items-center'>
					<h2 className='text-sm	font-semibold	text-text-primary-900'>Olivia Rhye</h2>
					<button className='w-8 h-8 rounded-full flex items-center justify-center'>
						<Image src={CircleIcon} alt="Circle Icon" width={20} height={20} />
					</button>
				</div>
				<p className='text-sm text-DescriptionText font-normal	'>olivia@untitledui.com</p>
			</div>
		</div>
	);
};

export default LeftSideBarNav;
