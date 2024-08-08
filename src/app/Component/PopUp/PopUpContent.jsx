import TaskDetails from "./Attachment"
import DatePicker from "./DatePicker"
import PopoUpLeft from "./PopUpLeft"


const PopUpContent = () => {
	return (
		<div className="py-11 px-5">
			<div className="flex justify-between">
				<PopoUpLeft></PopoUpLeft>
				<DatePicker></DatePicker>
			</div>
			<TaskDetails></TaskDetails>
		</div>
	)
}
export default PopUpContent