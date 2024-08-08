import Image from 'next/image';
import ArrowIcon from "../../public/assets/PopUpImg/arrow-icon.png";
import BottomIcon from "../../public/assets/PopUpImg/bottom-icon.png";
import HeaderIcon from "../../public/assets/PopUpImg/header-icon.png";
import HomeIcon from "../../public/assets/PopUpImg/home-icon.png";
import Chevron from "../../public/assets/PopUpImg/Icon.png";
import PointIcon from "../../public/assets/PopUpImg/point-icon.png";
import RightIcon from "../../public/assets/PopUpImg/right-icon.png";
import StarIcon from "../../public/assets/PopUpImg/star-icon.png";
import TimesIcon from "../../public/assets/PopUpImg/times-icon.png";

const PopUpHeader = ({ onClose }) => {
	return (
		<div className="flex justify-between items-center py-4 px-8 border-gray-300 border-b-2 w-full">
			<div className="flex items-center gap-4">
				<Image src={Chevron} alt="Chevron" width={10} height={5} />
				<Image src={BottomIcon} alt="BottomIcon" width={10} height={5} />
				<Image src={HomeIcon} alt="HomeIcon" width={15} height={15} />
				<Image src={RightIcon} alt="RightIcon" width={4} height={8} />
				<p className="text-sm text-gray-700">25 Proje</p>
				<Image src={RightIcon} alt="RightIcon" width={4} height={8} />
				<p className="text-sm text-gray-700">Projects</p>
				<Image src={RightIcon} alt="RightIcon" width={4} height={8} />
				<p className="text-sm text-DarkBlue font-semibold">FrontEnd Case</p>
				<Image src={HeaderIcon} alt="HeaderIcon" width={16} height={16} />
			</div>
			<div className="flex items-center gap-4">
				<Image src={PointIcon} alt="PointIcon" width={13} height={1} />
				<Image src={ArrowIcon} alt="ArrowIcon" width={15} height={15} />
				<Image src={StarIcon} alt="StarIcon" width={15} height={14} />
				<Image
					src={TimesIcon}
					alt="TimesIcon"
					width={10}
					height={10}
					className="cursor-pointer"
					onClick={onClose}
				/>
			</div>
		</div>
	);
};

export default PopUpHeader;
