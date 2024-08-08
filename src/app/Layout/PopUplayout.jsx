import PopUpHeader from "../Component/PopUp/PopoUpHeader"
import PopUpActivity from "../Component/PopUp/PopUpActivty"
import PopUpContent from "../Component/PopUp/PopUpContent"
import PopUpRightBar from "../Component/PopUp/PopUpRightBar"

const PopUpLayout = () => {
	return (
		<div className=" h-full">
			<PopUpHeader />
			<div className="grid grid-cols-1 lg:grid-cols-[792px_328px_60px] py-4 px-4 gap-4 h-full">
				<PopUpContent />
				<PopUpActivity />
				<PopUpRightBar />

			</div>
		</div>
	);
}

export default PopUpLayout;
