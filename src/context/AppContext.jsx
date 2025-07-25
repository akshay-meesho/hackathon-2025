import React, { useState, createContext, useContext, useMemo } from "react";

// -- APP CONTEXT for State Management --
const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userRole, setUserRole] = useState(null);
	const [selectedCloud, setSelectedCloud] = useState(null);
	const [selectedBuckets, setSelectedBuckets] = useState([]);
	const [fullyOptimizedBucketIds, setFullyOptimizedBucketIds] = useState([]);

	const value = useMemo(
		() => ({
			isAuthenticated,
			setIsAuthenticated,
			userRole,
			setUserRole,
			selectedCloud,
			setSelectedCloud,
			selectedBuckets,
			setSelectedBuckets,
			fullyOptimizedBucketIds,
			setFullyOptimizedBucketIds,
		}),
		[isAuthenticated, userRole, selectedCloud, selectedBuckets, fullyOptimizedBucketIds]
	);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
