import DatePicker from "./DatePicker"
import PopoUpLeft from "./PopUpLeft"
import TaskStatus from "./TaskStatus"

const PopUpContent = () => {
	return (
		<div className="py-11 px-5">
			<div className="flex justify-between">
				<PopoUpLeft></PopoUpLeft>
				<DatePicker></DatePicker>

			</div>
			<TaskStatus></TaskStatus>
		</div>
	)
}
export default PopUpContent