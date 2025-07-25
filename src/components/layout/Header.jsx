import React from "react";
import { ArrowLeft, DollarSign, Shield, LogOut } from "lucide-react";
import { useAppContext } from "../../context/AppContext";

const Header = ({ setPage, page }) => {
	const { userRole, setUserRole, setIsAuthenticated, setSelectedCloud, setSelectedBuckets } =
		useAppContext();

	const handleLogout = () => {
		setIsAuthenticated(false);
		setUserRole(null);
		setSelectedCloud(null);
		setSelectedBuckets([]);
		setPage("login");
	};

	const handleBack = () => {
		if (page === "select-buckets" || page === "admin") {
			setPage("choose-cloud");
		} else if (page === "cost-saving") {
			setPage("select-buckets");
		}
	};

	return (
		<header className='bg-white shadow-md w-full sticky top-0 z-40'>
			<nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					<div className='flex items-center gap-4'>
						{page !== "choose-cloud" && (
							<button
								onClick={handleBack}
								className='flex items-center gap-1 text-gray-600 hover:text-gray-900 p-2 rounded-md hover:bg-gray-100 transition-colors'>
								<ArrowLeft size={20} />
							</button>
						)}
						<div className='flex items-center'>
							<DollarSign className='h-8 w-8 text-blue-600' />
							<span className='font-bold text-xl ml-2 text-gray-800'>Cloud Cost Analyzer</span>
						</div>
					</div>
					<div className='flex items-center gap-4'>
						{userRole === "admin" && (
							<button
								onClick={() => setPage("admin")}
								className='flex items-center gap-2 px-3 py-2 font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors'>
								<Shield size={18} /> Admin Panel
							</button>
						)}
						<button
							onClick={handleLogout}
							className='flex items-center gap-2 px-3 py-2 font-semibold text-red-600 bg-red-100 rounded-lg hover:bg-red-200 transition-colors'>
							<LogOut size={18} /> Logout
						</button>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
