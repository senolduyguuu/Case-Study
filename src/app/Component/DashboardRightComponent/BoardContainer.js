"use client";

import { useState } from 'react';
import Board from './Board';
import BoardCard from './BoardCard';
import OpenBoardSection from './OpenBoardSection';

const BoardContainer = () => {
	const [boards, setBoards] = useState([
		{ title: 'Board 1' },
		{ title: 'Board 2' },
		{ title: 'Board 3' },
		{ title: 'Board 4' }
	]);

	const addBoard = () => {
		const newBoardTitle = `Board ${boards.length + 1}`;
		setBoards([...boards, { title: newBoardTitle }]);
	};

	return (
		<div className="flex gap-4 overflow-x-auto py-4 scrollbar-hide">
			<div className="flex gap-4 flex-nowrap">
				<OpenBoardSection />
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
