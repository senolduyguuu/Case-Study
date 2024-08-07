"use client";

const Board = ({ children }) => {
	return (
		<div className="bg-white rounded-lg shadow-md w-[19.938rem] h-[45rem] p-3 mt-4 flex flex-col relative group">
			{children}
		</div>
	);
};

export default Board;
