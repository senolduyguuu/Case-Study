import Image from 'next/image'
import headerIcon from '../../public/assets/headerIcon.png'
import headerImg from '../../public/assets/headerImg.png'

const HeaderNav = () => {
	return (
		<header className="border-b border-BorderColor">
			<div className="px-4 py-4 w-full h-[4.5rem] flex justify-between items-center">
				<h1 className="text-DarkBlue text-xl font-bold">kargakarga</h1>
				<div className="flex items-center gap-4">
					<Image src={headerIcon} alt="Header Icon" width={20} height={20} />
					<Image src={headerIcon} alt="Header Icon" width={20} height={20} />
					<Image src={headerImg} alt="Header Image" width={50} height={50} />
				</div>
			</div>
		</header>
	)
}
export default HeaderNav