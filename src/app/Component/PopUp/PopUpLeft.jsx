import Image from 'next/image'
import Copy from "../../public/assets/PopUpImg/Copy 2.png"
import TaskIcon from "../../public/assets/PopUpImg/Task Icon.png"
const PopUpLeft = () => {
	return (
		<div className='flex items-start gap-2 p-4 rounded-lg'>
			<Image src={TaskIcon} width={25} height={25} alt="Task Icon" />
			<div>
				<p className='text-lg font-semibold text-gray-800 '>
					Bu örnek görevdir. Örnek görevin <br></br> içeriğine dair açıklama detail’da bulunmaktadır.
				</p>
				<div className='flex gap-2 mt-4'>
					<p className='text-sm text-gray-500 mt-1'>
						ID: #435365
					</p>
					<Image src={Copy} width={16} height={16}></Image>
				</div>

			</div>
		</div>
	)
}

export default PopUpLeft
