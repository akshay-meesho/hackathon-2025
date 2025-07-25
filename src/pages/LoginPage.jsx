import React, { useState } from "react";
import { LogIn } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { MOCK_USERS } from "../data/mockData";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const LoginPage = ({ setPage }) => {
	const { setIsAuthenticated, setUserRole } = useAppContext();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleLogin = (e) => {
		e.preventDefault();
		setIsLoading(true);
		setError("");

		setTimeout(() => {
			const user = MOCK_USERS[username];
			if (user && user.password === password) {
				setIsAuthenticated(true);
				setUserRole(user.role);
				setPage("choose-cloud");
			} else {
				setError("Invalid credentials. Try user/password or admin/password.");
			}
			setIsLoading(false);
		}, 400);
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4'>
			<div className='w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg'>
				<div className='text-center'>
					<h1 className='text-3xl font-bold text-gray-800'>Cloud Cost Analyzer</h1>
					<p className='mt-2 text-gray-500'>Please sign in to continue</p>
				</div>
				<form onSubmit={handleLogin} className='space-y-6'>
					<input
						type='text'
						placeholder='Username (user or admin)'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className='w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white'
					/>
					<input
						type='password'
						placeholder='Password (password)'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white'
					/>
					{error && <p className='text-sm text-red-500 text-center'>{error}</p>}
					<button
						type='submit'
						disabled={isLoading}
						className='w-full flex justify-center items-center gap-2 px-4 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105 disabled:bg-blue-400 disabled:cursor-not-allowed'>
						{isLoading ? (
							<LoadingSpinner />
						) : (
							<>
								<LogIn size={20} /> Sign In
							</>
						)}
					</button>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
