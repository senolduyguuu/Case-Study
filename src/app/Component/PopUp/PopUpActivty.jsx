import Image from 'next/image';
import Avatar from "../../public/assets/PopUpImg/Avatar.png";
import Avatar1 from "../../public/assets/PopUpImg/Avatar1.png";
import Avatar2 from "../../public/assets/PopUpImg/Avatar2.png";
import Avatar3 from "../../public/assets/PopUpImg/Avatar3.png";
import Avatar4 from "../../public/assets/PopUpImg/Avatar4.png";
import Avatar5 from "../../public/assets/PopUpImg/Avatar5.png";
import FilterIcon from "../../public/assets/PopUpImg/filterIcon.png";
import SearchIcon from "../../public/assets/PopUpImg/searchIcon.png";

const activities = [
	{
		user: 'Lana Steiner',
		action: 'Invited',
		target: 'Alisa Hester',
		time: '2 mins ago',
		userImage: Avatar,
	},
	{
		user: 'Demi Wilkinson',
		action: 'Invited',
		target: 'Alisa Hester',
		time: '2 mins ago',
		userImage: Avatar1,
	},
	{
		user: 'Candice Wu',
		action: 'Commented in',
		target: 'Marketing site redesign',
		time: '3 hours ago',
		userImage: Avatar2,
	},
	{
		user: 'Candice Wu',
		action: 'Was added to',
		target: 'Marketing site redesign',
		time: '3 hours ago',
		userImage: Avatar2,
	},
	{
		user: 'Natali Craig',
		action: 'Added 3 labels to the project',
		target: 'Marketing site redesign',
		time: '6 hours ago',
		userImage: Avatar3,
	},
	{
		user: 'Natali Craig',
		action: 'Invited',
		target: 'Lana Steiner',
		time: '6 hours ago',
		userImage: Avatar3,
	},
	{
		user: 'Orlando Diggs',
		action: 'Created 7 tasks in',
		target: 'Marketing site redesign',
		time: '11 hours ago',
		userImage: Avatar4,
	},
	{
		user: 'Drew Cano',
		action: 'Added a file to',
		target: 'Marketing site redesign',
		time: '12 hours ago',
		userImage: Avatar5,
	},
];

const PopUpActivity = () => {
	return (
		<div className="p-4 bg-white rounded-lg shadow-lg max-w-md">
			<div className="flex justify-between items-center mb-4">
				<h3 className="text-lg font-bold">Activity</h3>
				<div className="flex space-x-2">
					<Image src={SearchIcon} width={15} height={15} alt="Search Icon" />
					<Image src={FilterIcon} width={15} height={15} alt="Filter Icon" />
				</div>
			</div>
			<div className="max-h-96 overflow-y-auto scrollbar-hide bg-RightBgColor p-4">
				<ul className="space-y-4">
					{activities.map((activity, index) => (
						<li key={index} className="flex items-start">
							<div className="flex-shrink-0">
								<Image
									src={activity.userImage}
									alt={activity.user}
									className="w-12 h-12 	 mr-4"
								/>
							</div>
							<div className="flex-grow">
								<div className="flex gap-6 items-center">
									<p className="font-semibold">{activity.user}</p>
									<p className="text-xs text-gray-500">{activity.time}</p>
								</div>
								<p className="text-sm">
									{activity.action}{' '}
									<span className="font-semibold text-blue-500">{activity.target}</span>
								</p>
							</div>
							<div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-1"></div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default PopUpActivity;
