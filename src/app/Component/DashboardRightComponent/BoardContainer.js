"use client";
import Board from './Board';
import BoardCard from './BoardCard';
import OpenBoardSection from './OpenBoardSection';

const BoardContainer = ({ boards }) => {
	const addBoard = () => {
		const newBoard = {
			title: `Board ${boards.length + 1}`,
			description: ''
		};
		setBoards([...boards, newBoard]);
	};

	return (
		<div className="flex gap-4 overflow-x-auto py-4 scrollbar-hide">
			<div className="flex gap-4 flex-nowrap">
				<OpenBoardSection boards={boards} />
				{boards.map((board, index) => (
					<BoardCard key={index} boardTitle={board.title} />
				))}
				<Board>
					<button className="text-2xl font-bold text-gray-600" onClick={addBoard}>+</button>
				</Board>
			</div>
		</div>
	);
};

export default BoardContainer;
