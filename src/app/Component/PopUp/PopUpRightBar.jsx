import Image from 'next/image';
import PlusIcon from "../../public/assets/PopUpImg/PlusIcon.png";
import RightIcon from "../../public/assets/PopUpImg/rightBarIcon.png";
import RightIcon2 from "../../public/assets/PopUpImg/rightBarIcon2.png";

const PopUpRightBar = () => {
	const items = [
		{ icon: RightIcon, text: "Activity", active: true },
		{ icon: RightIcon2, text: "Condition", active: false },
		{ icon: RightIcon, text: "QA", active: false },
		{ icon: RightIcon2, text: "Meetings", active: false },
		{ icon: RightIcon, text: "Docs", active: false },
	];

	return (
		<div className="flex flex-col items-center bg-white p-2 shadow-lg h-full ">
			<ul className="space-y-6">
				{items.map((item, index) => (
					<li key={index} className={`flex flex-col items-center ${item.active ? 'text-orange-500' : 'text-gray-400'}`}>
						<Image src={item.icon} alt={item.text} width={24} height={24} />
						<span className={`text-xs ${item.active ? 'font-bold' : 'font-normal'}`}>{item.text}</span>
					</li>
				))}
			</ul>
			<div className="mt-auto">
				<Image src={PlusIcon} alt="Add" width={24} height={24} />
			</div>
		</div>
	);
};

export default PopUpRightBar;
