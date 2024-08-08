import Image from 'next/image';
import { useState } from 'react';
import PdfIcon from '../../public/assets/PopUpImg/pdfIcon.png';
import UserIcon from '../../public/assets/PopUpImg/UserIcon.png';

const TaskDetails = () => {
	const [activeTab, setActiveTab] = useState('Attachment');
	const [uploadedFiles, setUploadedFiles] = useState([]);

	const handleFileUpload = (event) => {
		const files = Array.from(event.target.files);
		setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
	};

	const renderContent = () => {
		if (activeTab === 'Attachment') {
			return (
				<div className="p-4">
					{uploadedFiles.map((file, index) => (
						<div key={index} className="mb-4">
							<div className="flex items-center gap-2 mb-2">
								<Image src={UserIcon} alt="User Icon" width={40} height={40} className="rounded-full" />
								<div>
									<p className="text-gray-800 font-semibold">Olivia Rhye</p>
									<p className="text-sm text-gray-500">2 mins ago</p>
								</div>
							</div>
							<p className="text-gray-700">Added a file to Marketing site redesign</p>
							<div className="flex items-center gap-2 border p-2 rounded mt-2">
								<Image src={PdfIcon} alt="PDF Icon" width={40} height={40} />
								<div>
									<p className="text-gray-800">{file.name}</p>
									<p className="text-sm text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
								</div>
							</div>
						</div>
					))}
					<div className="flex items-center justify-center border-dashed border-2 border-gray-300 rounded p-4 mt-4">
						<input
							type="file"
							accept="application/pdf"
							onChange={handleFileUpload}
							className="absolute opacity-0 w-full h-full cursor-pointer"
						/>
						<p className="text-gray-500">Click to upload or drag and drop<br />SVG, PNG, JPG or GIF (max. 800x400px)</p>
					</div>
				</div>
			);
		} else if (activeTab === 'Comment') {
			return (
				<div className="p-4">
					<div className="flex items-start gap-2 mb-4">
						<Image src={UserIcon} alt="User Icon" width={40} height={40} className="rounded-full" />
						<div className="flex-1">
							<p className="text-gray-800 font-semibold">Olivia Rhye</p>
							<p className="text-sm text-gray-500">2 mins ago</p>
							<p className="text-gray-700 mt-2">Added a file to Marketing site redesign</p>
							<p className="text-gray-700 mt-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id."</p>
						</div>
					</div>
					<div className="flex items-start gap-2 mb-4">
						<Image src={UserIcon} alt="User Icon" width={40} height={40} className="rounded-full" />
						<div className="flex-1">
							<p className="text-gray-800 font-semibold">Olivia Rhye</p>
							<p className="text-sm text-gray-500">2 mins ago</p>
							<p className="text-gray-700 mt-2">Added a file to Marketing site redesign</p>
							<p className="text-gray-700 mt-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id."</p>
						</div>
					</div>
					<div className="flex items-center border-t border-gray-300 pt-4">
						<input
							type="text"
							placeholder="Enter a comment..."
							className="flex-1 border border-gray-300 rounded-lg p-2"
						/>
						<button className="bg-blue-500 text-white p-2 rounded-lg ml-2">
							Gönder
						</button>
					</div>
				</div>
			);
		}
	};

	return (
		<div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
			<div className="flex justify-around border-b border-gray-300">
				<button
					className={`flex-1 py-4 ${activeTab === 'Attachment' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
					onClick={() => setActiveTab('Attachment')}
				>
					Attachment
				</button>
				<button
					className={`flex-1 py-4 ${activeTab === 'Sub Task' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
					onClick={() => setActiveTab('Sub Task')}
				>
					Sub Task
				</button>
				<button
					className={`flex-1 py-4 ${activeTab === 'Comment' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
					onClick={() => setActiveTab('Comment')}
				>
					Comment
				</button>
			</div>
			{renderContent()}
		</div>
	);
};

export default TaskDetails;
