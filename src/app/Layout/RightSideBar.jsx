import BoardContainer from "../Component/DashboardRightComponent/BoardContainer";
import RightBtn from "../Component/DashboardRightComponent/RightBtn";
import RightHeader from "../Component/DashboardRightComponent/RightHeader";

const RightSideBar = ({ boards, onTaskClick }) => {
	return (
		<div className="py-4 px-8 bg-[RightBgColor]">
			<RightHeader />
			<RightBtn />
			<div className="flex gap-4">
				<BoardContainer boards={boards} onTaskClick={onTaskClick} />
			</div>
		</div>
	);
};

export default RightSideBar;
