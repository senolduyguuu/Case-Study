const RightBtn = () => {
	const buttons = ["Boards", "List", "Other", "Other", "Other", "Other", "Other"];

	return (
		<div className="w-full max-w-[31.125rem] mt-11 border border-gray-200 rounded-lg overflow-x-auto">
			<div className="flex">
				{buttons.map((button, index) => (
					<div
						key={index}
						className={`flex-grow flex-shrink-0 px-3 py-2 border-r last:border-r-0 bg-white ${index === 0 ? 'text-DarkBlue font-semibold' : 'text-black'}`}
					>
						{button}
					</div>
				))}
			</div>
		</div>
	);
};

export default RightBtn;
