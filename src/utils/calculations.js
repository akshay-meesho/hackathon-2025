import { BUCKET_DATA, FOLDER_DATA } from "../data/mockData";

// Calculate savings for available folders
export const calculateAvailableFolders = (selectedBuckets, optimizedFolderIds) => {
	return selectedBuckets
		.flatMap((bucketId) => (FOLDER_DATA[bucketId] || []).map((folder) => ({ ...folder, bucketId })))
		.filter((folder) => !optimizedFolderIds.includes(folder.id));
};

// Calculate chart data for savings visualization
export const calculateChartData = (availableFolders, selectedCloud, selectedBuckets) => {
	const savingsByBucket = availableFolders.reduce((acc, folder) => {
		acc[folder.bucketId] = (acc[folder.bucketId] || 0) + folder.savings;
		return acc;
	}, {});

	return (BUCKET_DATA[selectedCloud] || [])
		.filter((bucket) => selectedBuckets.includes(bucket.id))
		.map((bucket) => ({
			...bucket,
			potentialSavings: savingsByBucket[bucket.id] || 0,
		}));
};

// Calculate total potential savings
export const calculateTotalPotentialSavings = (chartData) => {
	return chartData.reduce((sum, bucket) => sum + bucket.potentialSavings, 0);
};

// Calculate stale folders savings
export const calculateStaleFoldersSavings = (availableFolders) => {
	return availableFolders.reduce((sum, folder) => sum + folder.savings, 0);
};

// Calculate space consumed savings
export const calculateSpaceConsumedSavings = (spaceConsumingDirs) => {
	return spaceConsumingDirs.reduce((sum, dir) => sum + dir.potentialSavings, 0);
};

// Calculate invisible data savings
export const calculateInvisibleDataSavings = (invisibleData) => {
	return invisibleData.reduce((sum, dir) => sum + dir.potentialSavings, 0);
};

// Calculate selected stale savings
export const calculateSelectedStaleSavings = (availableFolders, selectedFolders) => {
	return availableFolders
		.filter((folder) => selectedFolders.includes(folder.id))
		.reduce((sum, folder) => sum + folder.savings, 0);
};
