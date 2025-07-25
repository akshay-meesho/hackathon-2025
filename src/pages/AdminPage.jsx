import React from "react";

const AdminPage = ({ setPage }) => {
	return (
		<div className='w-full max-w-4xl p-8 space-y-8 bg-white rounded-xl shadow-lg'>
			<div className='text-center'>
				<h1 className='text-3xl font-bold text-gray-800'>Admin Dashboard</h1>
				<p className='mt-2 text-gray-500'>Welcome, Administrator. This is a protected area.</p>
			</div>
			<div className='p-6 bg-yellow-50 border border-yellow-200 rounded-lg'>
				<h2 className='text-xl font-semibold text-yellow-800'>System Status</h2>
				<p className='text-yellow-700 mt-2'>
					All systems are currently operational. No incidents to report.
				</p>
			</div>
		</div>
	);
};

export default AdminPage;
