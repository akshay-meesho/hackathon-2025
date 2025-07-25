import React, { useState } from "react";
import { AppProvider, useAppContext } from "./context/AppContext";
import PageWrapper from "./components/layout/PageWrapper";
import LoginPage from "./pages/LoginPage";
import ChooseCloudPage from "./pages/ChooseCloudPage";
import SelectBucketsPage from "./pages/SelectBucketsPage";
import CostSavingPage from "./pages/CostSavingPage";
import AdminPage from "./pages/AdminPage";

// Main App Content Component
const AppContent = ({ page, setPage }) => {
	const { isAuthenticated, userRole } = useAppContext();

	if (!isAuthenticated) {
		return <LoginPage setPage={setPage} />;
	}

	let pageComponent;
	switch (page) {
		case "choose-cloud":
			pageComponent = <ChooseCloudPage setPage={setPage} />;
			break;
		case "select-buckets":
			pageComponent = <SelectBucketsPage setPage={setPage} />;
			break;
		case "cost-saving":
			pageComponent = <CostSavingPage setPage={setPage} />;
			break;
		case "admin":
			pageComponent =
				userRole === "admin" ? (
					<AdminPage setPage={setPage} />
				) : (
					<ChooseCloudPage setPage={setPage} />
				);
			break;
		default:
			pageComponent = <ChooseCloudPage setPage={setPage} />;
	}

	return (
		<PageWrapper setPage={setPage} page={page}>
			{pageComponent}
		</PageWrapper>
	);
};

// Main App Component
export default function App() {
	const [page, setPage] = useState("login");

	return (
		<AppProvider>
			<style>{`
                @keyframes explode {
                    0% {
                        transform: translate(0, 0) scale(1);
                        opacity: 1;
                    }
                    100% {
                        transform: translate(calc(var(--randomX) * 300px), calc(var(--randomY) * 300px)) scale(0);
                        opacity: 0;
                    }
                }
                @keyframes pulse-once { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }
                .animate-pulse-once { animation: pulse-once 0.8s ease-in-out; }
            `}</style>
			<main className='bg-gray-50 font-sans'>
				<AppContent page={page} setPage={setPage} />
			</main>
		</AppProvider>
	);
}
