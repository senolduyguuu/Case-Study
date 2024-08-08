import PopUpHeader from "../Component/PopUp/PopoUpHeader"
import PopUpActivity from "../Component/PopUp/PopUpActivty"
import PopUpContent from "../Component/PopUp/PopUpContent"
import PopUpRightBar from "../Component/PopUp/PopUpRightBar"

const PopUpLayout = () => {
	return (
		<div className="mt-6 w-full max-w-[74.75rem] h-[48rem] mx-auto bg-white shadow-lg rounded-lg">
			<PopUpHeader />
			<div className="grid grid-cols-1 sm:grid-cols-[1fr] md:grid-cols-[1fr] lg:grid-cols-[792px_328px_60px] py-4 px-4 gap-4">
				<PopUpContent />
				<PopUpActivity />
				<PopUpRightBar />
			</div>
		</div>
	)
}

export default PopUpLayout
