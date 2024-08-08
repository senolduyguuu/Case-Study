import Image from 'next/image'
import Icon3 from "../../public/assets/Icon3.png"
const DatePicker = () => {
	return (
		<div className='flex items-center gap-1 border border-BorderColor w-[220px] h-[40px]'>
			<Image src={Icon3} alt='Icon3' width={20} height={20}></Image>
			<p className='text-sm	'>05.02.2024 - 20.04.2024</p>
		</div>

	)
}
export default DatePicker