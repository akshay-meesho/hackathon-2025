import React, { useState, useMemo, useEffect, useRef } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	LineChart,
	Line,
	PieChart,
	Pie,
	Cell,
} from "recharts";
import {
	ArrowLeft,
	HardDrive,
	TrendingUp,
	EyeOff,
	Clock,
	Cpu,
	BarChart2,
	Folder,
	Square,
	CheckCircle,
	Database,
} from "lucide-react";
import { useAppContext } from "../context/AppContext";
import {
	BUCKET_DATA,
	FOLDER_DATA,
	SPACE_CONSUMING_DIRS_DATA,
	EXPONENTIAL_GROWTH_DATA,
	INVISIBLE_DATA,
	STALE_DIRECTORIES_DATA,
} from "../data/mockData";
import {
	calculateAvailableFolders,
	calculateChartData,
	calculateTotalPotentialSavings,
	calculateStaleFoldersSavings,
	calculateSpaceConsumedSavings,
	calculateInvisibleDataSavings,
	calculateSelectedStaleSavings,
} from "../utils/calculations";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import Confetti from "../components/ui/Confetti";
import EmptyState from "../components/ui/EmptyState";

const CostSavingPage = ({ setPage }) => {
	const { selectedCloud, selectedBuckets, setSelectedBuckets, setFullyOptimizedBucketIds } =
		useAppContext();
	const [activeOpportunity, setActiveOpportunity] = useState(null);
	const [optimizedFolderIds, setOptimizedFolderIds] = useState([]);
	const [isApplying, setIsApplying] = useState(false);
	const [lastSavedAmount, setLastSavedAmount] = useState(0);
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [confettiOrigin, setConfettiOrigin] = useState(null);
	const [analysisLoading, setAnalysisLoading] = useState({});
	const [analysisResults, setAnalysisResults] = useState({});
	const [selectedGrowthDir, setSelectedGrowthDir] = useState(null);
	const [overallGrowthAnalysis, setOverallGrowthAnalysis] = useState(null);
	const [isOverallAnalysisLoading, setIsOverallAnalysisLoading] = useState(false);
	const [selectedFolders, setSelectedFolders] = useState([]);
	const applyBtnRef = useRef(null);

	const availableFolders = useMemo(
		() => calculateAvailableFolders(selectedBuckets, optimizedFolderIds),
		[selectedBuckets, optimizedFolderIds]
	);

	const spaceConsumingDirs = useMemo(
		() => selectedBuckets.flatMap((bucketId) => SPACE_CONSUMING_DIRS_DATA[bucketId] || []),
		[selectedBuckets]
	);

	const exponentialGrowthDirs = useMemo(
		() => selectedBuckets.flatMap((bucketId) => EXPONENTIAL_GROWTH_DATA[bucketId] || []),
		[selectedBuckets]
	);

	const invisibleData = useMemo(
		() => selectedBuckets.flatMap((bucketId) => INVISIBLE_DATA[bucketId] || []),
		[selectedBuckets]
	);

	useEffect(() => {
		if (activeOpportunity === "stale") {
			setSelectedFolders(availableFolders.map((f) => f.id));
		}
	}, [activeOpportunity, availableFolders]);

	useEffect(() => {
		if (optimizedFolderIds.length === 0) return;

		const fullyOptimizedBucketIds = selectedBuckets.filter((bucketId) => {
			const allFoldersForBucket = FOLDER_DATA[bucketId] || [];
			if (allFoldersForBucket.length === 0) return true;
			return allFoldersForBucket.every((folder) => optimizedFolderIds.includes(folder.id));
		});

		if (fullyOptimizedBucketIds.length > 0) {
			setFullyOptimizedBucketIds((prev) => [...new Set([...prev, ...fullyOptimizedBucketIds])]);
			setSelectedBuckets((prevSelected) =>
				prevSelected.filter((id) => !fullyOptimizedBucketIds.includes(id))
			);
		}
	}, [optimizedFolderIds, selectedBuckets, setSelectedBuckets, setFullyOptimizedBucketIds]);

	const handleToggleFolder = (folderId) => {
		setSelectedFolders((prev) =>
			prev.includes(folderId) ? prev.filter((id) => id !== folderId) : [...prev, folderId]
		);
	};

	const chartData = useMemo(
		() => calculateChartData(availableFolders, selectedCloud, selectedBuckets),
		[availableFolders, selectedCloud, selectedBuckets]
	);

	const staleFoldersSavings = useMemo(
		() => calculateStaleFoldersSavings(availableFolders) * 12,
		[availableFolders]
	);
	const spaceConsumedSavings = useMemo(
		() => calculateSpaceConsumedSavings(spaceConsumingDirs) * 12,
		[spaceConsumingDirs]
	);
	const exponentialGrowthSavings = 36000 * 12; // Hardcoded for now
	const invisibleDataSavings = 5260 * 12; // Fixed value as requested

	const totalPotentialSavings = useMemo(
		() =>
			staleFoldersSavings + spaceConsumedSavings + exponentialGrowthSavings + invisibleDataSavings,
		[staleFoldersSavings, spaceConsumedSavings, exponentialGrowthSavings, invisibleDataSavings]
	);

	const selectedStaleSavings = useMemo(
		() => calculateSelectedStaleSavings(availableFolders, selectedFolders),
		[availableFolders, selectedFolders]
	);

	const handleApplyRules = () => {
		if (applyBtnRef.current) {
			const rect = applyBtnRef.current.getBoundingClientRect();
			setConfettiOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
			setTimeout(() => setConfettiOrigin(null), 2000);
		}

		setIsApplying(true);
		setShowSuccessMessage(false);
		const savingsFromThisAction = selectedStaleSavings;

		setTimeout(() => {
			setLastSavedAmount(savingsFromThisAction);
			setOptimizedFolderIds((prev) => [...prev, ...selectedFolders]);
			setSelectedFolders([]);
			setIsApplying(false);
			setShowSuccessMessage(true);
			setTimeout(() => setShowSuccessMessage(false), 4000);
		}, 500);
	};

	const handleRunAnalysis = (dir) => {
		setAnalysisLoading((prev) => ({ ...prev, [dir.id]: true }));
		setTimeout(() => {
			// 2025 Data Usage Analysis
			const totalMonths = 7;
			const activeMonths = 3; // Last 3 months actively used
			const staleMonths = 4; // First 4 months negligibly used
			const monthlySavings = 10000; // $10k/yo savings
			const currentMonthlyCost = 15000; // Total current cost
			const optimizedCost = currentMonthlyCost - monthlySavings;

			const analysisData = {
				currentCost: currentMonthlyCost,
				optimizedCost: optimizedCost,
				savings: monthlySavings,
				pieData: [
					{ name: "Active Data (Last 3 Months)", value: optimizedCost, color: "#10b981" },
					{ name: "Stale Data (First 4 Months)", value: monthlySavings, color: "#ef4444" },
				],
				totalMonths: totalMonths,
				activeMonths: activeMonths,
				staleMonths: staleMonths,
				dataPattern: "2025 Quarterly Usage Analysis",
				storageReduction: Math.round((monthlySavings / currentMonthlyCost) * 100),
				timelineData: [
					{ month: "Jan 2025", usage: "5%", status: "stale" },
					{ month: "Feb 2025", usage: "3%", status: "stale" },
					{ month: "Mar 2025", usage: "7%", status: "stale" },
					{ month: "Apr 2025", usage: "4%", status: "stale" },
					{ month: "May 2025", usage: "85%", status: "active" },
					{ month: "Jun 2025", usage: "92%", status: "active" },
					{ month: "Jul 2025", usage: "89%", status: "active" },
				],
			};

			setAnalysisResults((prev) => ({
				...prev,
				[dir.id]: analysisData,
			}));
			setAnalysisLoading((prev) => ({ ...prev, [dir.id]: false }));
		}, 2000);
	};

	const handleOverallGrowthAnalysis = () => {
		setIsOverallAnalysisLoading(true);
		setTimeout(() => {
			setOverallGrowthAnalysis(
				"All the directories show similar folder named deletion vector, it could be the cause of increase in size."
			);
			setIsOverallAnalysisLoading(false);
		}, 2500);
	};

	const OpportunityCard = ({ icon, title, savings, onClick }) => {
		const IconComponent = icon;
		return (
			<div
				onClick={onClick}
				className='bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-400 transition-all duration-300 cursor-pointer flex flex-col items-center text-center'>
				<div className='p-3 bg-blue-100 rounded-full mb-4'>
					<IconComponent className='h-8 w-8 text-blue-600' />
				</div>
				<h3 className='text-lg font-semibold text-gray-800'>{title}</h3>
				<p className='text-2xl font-bold text-green-600 mt-2'>${savings.toLocaleString()}/yo</p>
				<p className='text-xs text-gray-500 mt-1'>Forecasted Savings</p>
			</div>
		);
	};

	if (selectedBuckets.length === 0 && !activeOpportunity) {
		return (
			<div className='w-full max-w-5xl p-8 bg-white rounded-xl shadow-lg relative'>
				<EmptyState
					icon={Database}
					title='No Buckets Selected'
					message='Please go back and select at least one bucket to analyze for cost savings.'
				/>
			</div>
		);
	}

	if (activeOpportunity) {
		return (
			<div className='w-full max-w-5xl p-8 bg-white rounded-xl shadow-lg relative'>
				<Confetti origin={confettiOrigin} />
				<button
					onClick={() => {
						setActiveOpportunity(null);
						setSelectedGrowthDir(null);
					}}
					className='flex items-center gap-2 mb-6 text-sm font-semibold text-blue-600 hover:underline'>
					<ArrowLeft size={16} />
					Back to Opportunities
				</button>

				{activeOpportunity === "growth" && (
					<div>
						<h2 className='text-2xl font-bold text-gray-800 text-center mb-2'>
							Exponential Growth Directories
						</h2>
						<p className='text-center text-gray-500 mb-6'>
							These directories are growing rapidly. Consider implementing lifecycle policies.
						</p>

						{exponentialGrowthDirs.length > 0 ? (
							!selectedGrowthDir ? (
								<>
									<div className='bg-white rounded-lg shadow border border-gray-200 max-h-80 overflow-y-auto'>
										<table className='w-full text-sm text-left text-gray-500'>
											<thead className='text-xs text-gray-700 uppercase bg-gray-50 sticky top-0'>
												<tr>
													<th scope='col' className='px-6 py-3'>
														Directory Name
													</th>
													<th scope='col' className='px-6 py-3 text-center'>
														Action
													</th>
												</tr>
											</thead>
											<tbody>
												{exponentialGrowthDirs.map((dir) => (
													<tr key={dir.id} className='bg-white border-b'>
														<th
															scope='row'
															className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-2'>
															<Folder size={16} className='text-purple-500' /> {dir.name}
														</th>
														<td className='px-6 py-4 text-center'>
															<button
																onClick={() => setSelectedGrowthDir(dir)}
																className='flex items-center justify-center gap-2 w-40 mx-auto px-3 py-1.5 text-xs font-semibold text-white bg-purple-600 rounded-md hover:bg-purple-700'>
																<BarChart2 size={14} /> View Growth
															</button>
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
									<div className='mt-6 text-center'>
										{overallGrowthAnalysis ? (
											<p className='text-md text-green-700 bg-green-100 p-3 rounded-md'>
												{overallGrowthAnalysis}
											</p>
										) : (
											<button
												onClick={handleOverallGrowthAnalysis}
												disabled={isOverallAnalysisLoading}
												className='px-6 py-2.5 flex justify-center items-center gap-2 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 disabled:cursor-wait mx-auto'>
												{isOverallAnalysisLoading ? (
													<>
														<LoadingSpinner small /> Analyzing...
													</>
												) : (
													<>
														<Cpu size={18} /> Run Overall AI Analysis
													</>
												)}
											</button>
										)}
									</div>
								</>
							) : (
								<div>
									<button
										onClick={() => setSelectedGrowthDir(null)}
										className='flex items-center gap-2 mb-4 text-sm font-semibold text-blue-600 hover:underline'>
										<ArrowLeft size={16} />
										Back to Directory List
									</button>
									<h3 className='text-lg font-semibold text-center mb-4'>
										{selectedGrowthDir.name}
									</h3>
									<div className='h-96 w-full'>
										<ResponsiveContainer width='100%' height='100%'>
											<LineChart data={selectedGrowthDir.growth}>
												<CartesianGrid strokeDasharray='3 3' />
												<XAxis dataKey='week' />
												<YAxis label={{ value: "Size (TB)", angle: -90, position: "insideLeft" }} />
												<Tooltip />
												<Legend />
												<Line
													type='monotone'
													dataKey='size'
													name='Size (TB)'
													stroke='#8884d8'
													strokeWidth={2}
												/>
											</LineChart>
										</ResponsiveContainer>
									</div>
								</div>
							)
						) : (
							<EmptyState
								icon={TrendingUp}
								title='No Exponential Growth Detected'
								message='None of the currently selected buckets have directories with significant exponential growth.'
							/>
						)}
					</div>
				)}

				{activeOpportunity === "consumed" && (
					<div>
						<h2 className='text-2xl font-bold text-gray-800 text-center mb-2'>
							Most Space Consumed Directories
						</h2>
						<p className='text-center text-gray-500 mb-6'>
							Analyze large directories to find compression or tiering opportunities.
						</p>
						{spaceConsumingDirs.length > 0 ? (
							<div className='bg-white rounded-lg shadow border border-gray-200 max-h-96 overflow-y-auto overflow-x-auto'>
								<table className='w-full text-sm text-left text-gray-500 min-w-[1200px]'>
									<thead className='text-xs text-gray-700 uppercase bg-gray-50 sticky top-0'>
										<tr>
											<th scope='col' className='px-6 py-3'>
												Directory Name
											</th>
											<th scope='col' className='px-6 py-3'>
												Size
											</th>
											<th scope='col' className='px-6 py-3 text-center'>
												Cost Optimization Analysis
											</th>
										</tr>
									</thead>
									<tbody>
										{spaceConsumingDirs.map((dir) => (
											<tr key={dir.id} className='bg-white border-b'>
												<th
													scope='row'
													className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-2'>
													<Folder size={16} className='text-blue-500' /> {dir.name}
												</th>
												<td className='px-6 py-4'>{dir.size}</td>
												<td className='px-6 py-4 text-center'>
													{analysisResults[dir.id] ? (
														<div className='w-full max-w-2xl mx-auto bg-white p-6 rounded-lg border border-gray-200 shadow-lg'>
															<div className='flex items-center justify-between mb-4'>
																<h4 className='text-lg font-semibold text-gray-800'>
																	{analysisResults[dir.id].dataPattern}
																</h4>
																<span className='text-sm bg-red-100 text-red-800 px-3 py-1 rounded-full font-semibold'>
																	${analysisResults[dir.id].savings.toLocaleString()}/yo Savings
																</span>
															</div>

															<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
																{/* Pie Chart Section */}
																<div className='flex flex-col items-center'>
																	<div className='w-32 h-32 mb-3'>
																		<ResponsiveContainer width='100%' height='100%'>
																			<PieChart>
																				<Pie
																					data={analysisResults[dir.id].pieData}
																					cx='50%'
																					cy='50%'
																					innerRadius={25}
																					outerRadius={60}
																					paddingAngle={3}
																					dataKey='value'>
																					{analysisResults[dir.id].pieData.map((entry, index) => (
																						<Cell key={`cell-${index}`} fill={entry.color} />
																					))}
																				</Pie>
																				<Tooltip
																					formatter={(value) => `$${value.toLocaleString()}`}
																				/>
																			</PieChart>
																		</ResponsiveContainer>
																	</div>
																	<div className='text-center space-y-2'>
																		<div className='flex items-center gap-2 text-sm'>
																			<div className='w-3 h-3 bg-green-500 rounded-full'></div>
																			<span>Active Data (67% of cost)</span>
																		</div>
																		<div className='flex items-center gap-2 text-sm'>
																			<div className='w-3 h-3 bg-red-500 rounded-full'></div>
																			<span>Stale Data (33% of cost)</span>
																		</div>
																	</div>
																</div>

																{/* Timeline & Metrics Section */}
																<div className='space-y-4'>
																	<div className='bg-gray-50 p-3 rounded-lg'>
																		<h5 className='font-semibold text-gray-700 mb-2'>
																			Usage Timeline
																		</h5>
																		<div className='grid grid-cols-7 gap-1 mb-2'>
																			{analysisResults[dir.id].timelineData.map((month, index) => (
																				<div key={index} className='text-center'>
																					<div
																						className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
																							month.status === "active"
																								? "bg-green-500 text-white"
																								: "bg-red-200 text-red-800"
																						}`}>
																						{month.month.split(" ")[0].slice(0, 1)}
																					</div>
																					<div className='text-xs mt-1'>{month.usage}</div>
																				</div>
																			))}
																		</div>
																		<div className='text-xs text-gray-600 text-center'>
																			Jan-Apr 2025: Negligible usage | May-Jul 2025: High usage
																		</div>
																	</div>

																	<div className='space-y-2 text-sm'>
																		<div className='flex justify-between'>
																			<span className='text-gray-600'>Current Yearly Cost:</span>
																			<span className='font-semibold'>
																				${analysisResults[dir.id].currentCost.toLocaleString()}
																			</span>
																		</div>
																		<div className='flex justify-between'>
																			<span className='text-gray-600'>After Cleanup:</span>
																			<span className='font-semibold text-green-600'>
																				${analysisResults[dir.id].optimizedCost.toLocaleString()}
																			</span>
																		</div>
																		<div className='flex justify-between border-t pt-2 font-bold'>
																			<span className='text-gray-700'>Yearly Savings:</span>
																			<span className='text-red-600'>
																				${analysisResults[dir.id].savings.toLocaleString()}
																			</span>
																		</div>
																	</div>

																	<div className='bg-blue-50 p-3 rounded-lg'>
																		<p className='text-sm text-blue-800 font-medium'>
																			💡 Recommendation: Delete{" "}
																			{analysisResults[dir.id].staleMonths} months of stale data (
																			{analysisResults[dir.id].storageReduction}% storage reduction)
																		</p>
																	</div>
																</div>
															</div>
														</div>
													) : (
														<button
															onClick={() => handleRunAnalysis(dir)}
															disabled={analysisLoading[dir.id]}
															className='flex items-center justify-center gap-2 w-40 mx-auto px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-wait'>
															{analysisLoading[dir.id] ? (
																<>
																	<LoadingSpinner small /> Analyzing...
																</>
															) : (
																<>
																	<Cpu size={14} /> Run AI Analysis
																</>
															)}
														</button>
													)}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						) : (
							<EmptyState
								icon={HardDrive}
								title='No Large Directories Found'
								message='There are no directories that meet the criteria for this analysis in the selected buckets.'
							/>
						)}
					</div>
				)}

				{activeOpportunity === "stale" && (
					<div>
						<h2 className='text-2xl font-bold text-gray-800 text-center mb-2'>
							Stale Directory Optimization
						</h2>
						<p className='text-center text-gray-500 mb-6'>
							Review stale directories with their last updated times and sizes for optimization
							opportunities.
						</p>

						<div className='p-4 border border-blue-200 bg-blue-50 rounded-lg mb-6 text-center'>
							<h3 className='text-md font-semibold text-blue-800'>Stale Directory Overview</h3>
							<p className='text-3xl font-bold text-blue-600'>
								{STALE_DIRECTORIES_DATA.length} Directories
							</p>
							<p className='text-sm text-blue-700 mt-1'>
								Stale directories identified across your storage buckets for review
							</p>
						</div>

						<div className='bg-white rounded-lg shadow border border-gray-200 max-h-96 overflow-y-auto'>
							<table className='w-full text-sm text-left text-gray-500 min-w-[1200px]'>
								<thead className='text-xs text-gray-700 uppercase bg-gray-50 sticky top-0'>
									<tr>
										<th scope='col' className='px-6 py-3'>
											Directory Name
										</th>
										<th scope='col' className='px-6 py-3'>
											Last Updated At
										</th>
										<th scope='col' className='px-6 py-3'>
											Size
										</th>
									</tr>
								</thead>
								<tbody>
									{STALE_DIRECTORIES_DATA.map((directory) => {
										const lastUpdated = new Date(directory.lastUpdatedAt);
										const now = new Date();
										const daysSinceUpdate = Math.floor((now - lastUpdated) / (1000 * 60 * 60 * 24));
										const isVeryStale = daysSinceUpdate > 365;

										return (
											<tr
												key={directory.id}
												className={`border-b hover:bg-gray-50 ${isVeryStale ? "bg-red-50" : ""}`}>
												<td className='px-6 py-4 font-medium text-gray-900'>
													<div className='flex items-center gap-2'>
														<Folder
															size={16}
															className={`${isVeryStale ? "text-red-500" : "text-yellow-500"}`}
														/>
														<span className='truncate max-w-xs' title={directory.directoryName}>
															{directory.directoryName}
														</span>
													</div>
												</td>
												<td className='px-6 py-4'>
													<div className='flex flex-col'>
														<span
															className={`${
																isVeryStale ? "text-red-600 font-semibold" : "text-gray-700"
															}`}>
															{lastUpdated.toLocaleDateString()}
														</span>
														<span className='text-xs text-gray-500'>
															{daysSinceUpdate} days ago
														</span>
													</div>
												</td>
												<td className='px-6 py-4'>
													<span
														className={`font-semibold ${
															parseFloat(directory.size) > 100 ? "text-purple-600" : "text-blue-600"
														}`}>
														{directory.size}
													</span>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>

						<div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-4'>
							<div className='bg-red-50 p-4 rounded-lg border border-red-200'>
								<h4 className='font-semibold text-red-800 mb-2'>Critical Stale Directories</h4>
								<p className='text-2xl font-bold text-red-600'>
									{
										STALE_DIRECTORIES_DATA.filter((dir) => {
											const daysSinceUpdate = Math.floor(
												(new Date() - new Date(dir.lastUpdatedAt)) / (1000 * 60 * 60 * 24)
											);
											return daysSinceUpdate > 365;
										}).length
									}
								</p>
								<p className='text-sm text-red-700'>Not updated in over 1 year</p>
							</div>
							<div className='bg-blue-50 p-4 rounded-lg border border-blue-200'>
								<h4 className='font-semibold text-blue-800 mb-2'>Total Storage</h4>
								<p className='text-2xl font-bold text-blue-600'>
									{STALE_DIRECTORIES_DATA.reduce((total, dir) => {
										const sizeValue = parseFloat(dir.size);
										return total + sizeValue;
									}, 0).toFixed(1)}{" "}
									TB
								</p>
								<p className='text-sm text-blue-700'>Across all stale directories</p>
							</div>
							<div className='bg-green-50 p-4 rounded-lg border border-green-200'>
								<h4 className='font-semibold text-green-800 mb-2'>Optimization Impact</h4>
								<p className='text-2xl font-bold text-green-600'>68%</p>
								<p className='text-sm text-green-700'>Storage cost reduction potential</p>
							</div>
						</div>
					</div>
				)}
				{activeOpportunity === "invisible" && (
					<div>
						<h2 className='text-2xl font-bold text-gray-800 text-center mb-2'>
							Invisible Data Analysis
						</h2>
						<p className='text-center text-gray-500 mb-4'>
							These files are consuming space but are not part of any current object versions.
						</p>
						<div className='p-6 border border-green-200 bg-green-50 rounded-lg mb-6 text-center'>
							<h3 className='text-lg font-semibold text-green-800'>Total Invisible Data Savings</h3>
							<p className='text-4xl font-bold text-green-600'>$5,260/yo</p>
							<p className='text-sm text-green-700 mt-1'>
								Potential savings from cleaning up invisible data across all buckets
							</p>
						</div>
						{invisibleData.length > 0 ? (
							<div className='bg-white rounded-lg shadow border border-gray-200 max-h-96 overflow-y-auto'>
								<table className='w-full text-sm text-left text-gray-500'>
									<thead className='text-xs text-gray-700 uppercase bg-gray-50 sticky top-0'>
										<tr>
											<th scope='col' className='px-6 py-3'>
												Directory Name
											</th>
											<th scope='col' className='px-6 py-3'>
												Invisible Data Type
											</th>
											<th scope='col' className='px-6 py-3'>
												Size
											</th>
										</tr>
									</thead>
									<tbody>
										{invisibleData.map((dir) => (
											<tr key={dir.id} className='bg-white border-b'>
												<th
													scope='row'
													className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-2'>
													<Folder size={16} className='text-gray-500' /> {dir.name}
												</th>
												<td className='px-6 py-4'>{dir.type}</td>
												<td className='px-6 py-4'>{dir.size}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						) : (
							<EmptyState
								icon={EyeOff}
								title='No Invisible Data Found'
								message="We didn't find any invisible data like incomplete uploads or orphaned files in your selected buckets."
							/>
						)}
					</div>
				)}
			</div>
		);
	}

	return (
		<div className='w-full max-w-5xl p-8 bg-white rounded-xl shadow-lg relative'>
			<Confetti origin={confettiOrigin} />
			<div className='text-center mb-6'>
				<h1 className='text-3xl font-bold text-gray-800'>Cost Savings Analysis</h1>
				<p className='mt-1 text-gray-500'>
					Potential yearly savings for selected {selectedCloud.toUpperCase()} buckets.
				</p>
			</div>
			<div className='p-6 border border-blue-200 bg-blue-50 rounded-lg mb-6 text-center'>
				<h3 className='text-lg font-semibold text-blue-800'>Total Remaining Potential Savings</h3>
				<p className='text-4xl font-bold text-blue-600'>
					${totalPotentialSavings.toLocaleString()}/yo
				</p>
			</div>
			{/* <div className='h-96 w-full'>
				<ResponsiveContainer width='100%' height='100%'>
					<BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
						<CartesianGrid strokeDasharray='3 3' stroke='#e0e0e0' />
						<XAxis
							dataKey='name'
							angle={-15}
							textAnchor='end'
							height={70}
							interval={0}
							tick={{ fontSize: 12 }}
						/>
						<YAxis tickFormatter={(value) => `$${value}`} />
						<Tooltip
							cursor={{ fill: "rgba(239, 246, 255, 0.7)" }}
							formatter={(value) => [`$${value.toLocaleString()}`, "Potential Savings"]}
						/>
						<Legend />
						<Bar
							dataKey='potentialSavings'
							name='Potential Yearly Savings ($)'
							fill='#3b82f6'
							radius={[4, 4, 0, 0]}
						/>
					</BarChart>
				</ResponsiveContainer>
			</div> */}

			<div className='mt-10 border-t border-gray-200 pt-8'>
				<h2 className='text-2xl font-bold text-gray-800 text-center mb-6'>
					Optimization Opportunities
				</h2>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					<OpportunityCard
						icon={HardDrive}
						title='Most Space Consumed'
						savings={spaceConsumedSavings}
						onClick={() => setActiveOpportunity("consumed")}
					/>
					<OpportunityCard
						icon={TrendingUp}
						title='Exponential Growth'
						savings={exponentialGrowthSavings}
						onClick={() => setActiveOpportunity("growth")}
					/>
					<OpportunityCard
						icon={EyeOff}
						title='Buckets with Invisible Data'
						savings={invisibleDataSavings}
						onClick={() => setActiveOpportunity("invisible")}
					/>
					<OpportunityCard
						icon={Clock}
						title='Stale Directories'
						savings={31802}
						onClick={() => setActiveOpportunity("stale")}
					/>
				</div>
			</div>
		</div>
	);
};

export default CostSavingPage;
