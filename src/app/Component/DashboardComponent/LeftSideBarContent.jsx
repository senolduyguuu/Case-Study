import Image from 'next/image';
import Avatar from '../../public/assets/Avatar.png';
import Icon from '../../public/assets/headerIcon.png';

const icons = [
	{ src: Icon, alt: "Icon 1" },
	{ src: Icon, alt: "Icon 2" },
	{ src: Icon, alt: "Icon 3" },
	{ src: Icon, alt: "Icon 4" }
];

const LeftSideBarContent = () => {
	return (
		<div className="bg-LeftSideBarColor h-full w-[4.5rem] flex flex-col items-center py-4">
			<div className="flex flex-col items-center space-y-4 gap-4">
				{icons.map((icon, index) => (
					<div
						key={index}
						className={`p-2 rounded-md ${index === 0 ? 'bg-[#4E5BA6]' : 'hover:bg-white'}`}
					>
						<Image
							src={icon.src}
							alt={icon.alt}
							width={20}
							height={20}
							className={index === 0 ? 'opacity-100' : 'hover:opacity-80'}
						/>
					</div>
				))}
			</div>
			<div className="mt-auto flex flex-col items-center space-y-4 gap-4">
				{icons.map((icon, index) => (
					<Image
						key={index}
						src={icon.src}
						alt={icon.alt}
						width={20}
						height={20}
						className="hover:opacity-80"
					/>
				))}
				<Image
					src={Avatar}
					alt="Avatar"
					width={40}
					height={40}
					className="hover:opacity-80"
				/>
			</div>
		</div>
	);
};

export default LeftSideBarContent;
