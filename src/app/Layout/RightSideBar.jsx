import BoardContainer from "../Component/DashboardRightComponent/BoardContainer";
import RightBtn from "../Component/DashboardRightComponent/RightBtn";
import RightHeader from "../Component/DashboardRightComponent/RightHeader";

const RightSideBar = () => {
	return (
		<div className="py-4 px-8 bg-[RightBgColor]">
			<RightHeader />
			<RightBtn />
			<div className="flex gap-4">
				<BoardContainer />
			</div>
		</div>
	);
};

export default RightSideBar;
