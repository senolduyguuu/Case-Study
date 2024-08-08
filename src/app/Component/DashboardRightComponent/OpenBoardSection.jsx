"use client";

import Image from 'next/image';
import AvatarOne from '../../public/Avatar group.png';
import Calendar from '../../public/Calendar - 2 1.png';
import FlagOne from "../../public/Flag - 1.png";
import FlagTwo from "../../public/Flag - 2.png";
import Circle from '../../public/More Circle.png';
import Plus from '../../public/Plus 4.png';
import Rectangle from "../../public/Rectangle 41978.png";
import Board from './Board';

const OpenBoardSection = ({ boards }) => {
	const exampleTasks = [
		{
			title: 'Operasyon Birimi',
			description: "Bu örnek görevdir. Örnek görevin içeriğine dair açıklama detail'da bulunmaktadır.",
			date: '05.02.2024 - 10.02.2024',
			milestone: 'Milestone Name',
			members: [
				{ name: 'Member1', imgSrc: AvatarOne },
			],
			flag: FlagOne,
			titleColor: 'text-Orange',
		},
		{
			title: 'Teknik Birimi',
			description: 'İkinci bir görev.',
			date: '05.02.2024 - 10.02.2024',
			milestone: 'Milestone Name',
			members: [
				{ name: 'Member3', imgSrc: AvatarOne },
			],
			flag: FlagTwo,
			titleColor: 'text-DarkPurple',
		},
	];
	const displayedBoards = boards.slice(0, 2);
	const tasks = [...exampleTasks, ...displayedBoards];

	return (
		<Board>
			<div className="flex flex-col">
				<div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-2">
					<div className="flex items-center">
						<h2 className="font-normal text-Purple text-base mr-2">OPEN</h2>
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
				{tasks.map((task, index) => (
					<div key={index} className="rounded-lg p-4 border border-BorderColor hover:shadow-lg hover:border-blue-500 transition duration-300 ease-in-out" onClick={() => onTaskClick(task)}>
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
		</Board>
	);
};

export default OpenBoardSection;
