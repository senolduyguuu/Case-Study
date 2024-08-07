import Image from 'next/image';
import Dropdown from '../../public/assets/Dropdown.png';

const RightHeader = () => {
	return (
		<div className="flex justify-between items-center ">
			<h2 className="text-DarkBlue text-[1.375rem] font-semibold leading-8">
				Frontend Case
			</h2>
			<Image src={Dropdown} alt="Dropdown" width={20} height={24} />
		</div>
	);
};

export default RightHeader;
