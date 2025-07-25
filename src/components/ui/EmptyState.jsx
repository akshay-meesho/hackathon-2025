import React from "react";

const EmptyState = ({ icon, title, message }) => {
	const IconComponent = icon;
	return (
		<div className='text-center p-10 bg-gray-50 rounded-lg'>
			<IconComponent size={40} className='mx-auto text-gray-400 mb-4' />
			<h3 className='text-xl font-semibold text-gray-700'>{title}</h3>
			<p className='text-gray-500 mt-2'>{message}</p>
		</div>
	);
};

export default EmptyState;
