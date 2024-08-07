import LeftSideBarContent from "../Component/DashboardComponent/LeftSideBarContent";
import LeftSideBarNav from "../Component/DashboardComponent/LeftSideBarNav";

const LeftSideBar = () => {
	return (
		<aside className="h-full">
			<div className="flex h-full">
				<LeftSideBarContent />
				<LeftSideBarNav />
			</div>
		</aside>
	);
};

export default LeftSideBar;
