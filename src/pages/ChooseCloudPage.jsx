import React from "react";
import { useAppContext } from "../context/AppContext";

const ChooseCloudPage = ({ setPage }) => {
	const { setSelectedCloud } = useAppContext();

	const handleSelect = (cloud) => {
		setSelectedCloud(cloud);
		setPage("select-buckets");
	};

	const CloudOption = ({ name, logo, onClick }) => (
		<div
			onClick={onClick}
			className='flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-200'>
			<img src={logo} alt={`${name} logo`} className='h-20 w-20 mb-4 object-contain' />
			<span className='text-lg font-semibold text-gray-700'>{name}</span>
		</div>
	);

	return (
		<div className='w-full max-w-4xl p-8 space-y-8 bg-white rounded-xl shadow-lg'>
			<div className='text-center'>
				<h1 className='text-3xl font-bold text-gray-800'>Choose Your Cloud Provider</h1>
				<p className='mt-2 text-gray-500'>Select a platform to analyze its storage costs.</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
				<CloudOption
					name='AWS'
					logo='https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
					onClick={() => handleSelect("aws")}
				/>
				<CloudOption
					name='GCP'
					logo='https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg'
					onClick={() => handleSelect("gcp")}
				/>
				<CloudOption
					name='Azure'
					logo='https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg'
					onClick={() => handleSelect("azure")}
				/>
			</div>
		</div>
	);
};

export default ChooseCloudPage;
