import React, { useState } from "react";
import { Database, CheckCircle, ArrowRight, Square } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { BUCKET_DATA } from "../data/mockData";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const SelectBucketsPage = ({ setPage }) => {
	const { selectedCloud, selectedBuckets, setSelectedBuckets, fullyOptimizedBucketIds } =
		useAppContext();
	const [isLoading, setIsLoading] = useState(false);
	const [showError, setShowError] = useState(false);
	const buckets = BUCKET_DATA[selectedCloud] || [];

	const handleToggleBucket = (bucketId) => {
		if (fullyOptimizedBucketIds.includes(bucketId)) return;
		setShowError(false);
		setSelectedBuckets((prev) =>
			prev.includes(bucketId) ? prev.filter((id) => id !== bucketId) : [...prev, bucketId]
		);
	};

	const handleSelectAll = () => {
		setShowError(false);
		// Select all buckets that are not fully optimized
		const availableBuckets = buckets
			.filter((bucket) => !fullyOptimizedBucketIds.includes(bucket.id))
			.map((bucket) => bucket.id);
		setSelectedBuckets(availableBuckets);
	};

	const handleDeselectAll = () => {
		setShowError(false);
		setSelectedBuckets([]);
	};

	const handleAnalyze = () => {
		if (selectedBuckets.length === 0) {
			setShowError(true);
			return;
		}
		setIsLoading(true);
		setTimeout(() => {
			setPage("cost-saving");
			setIsLoading(false);
		}, 400);
	};

	return (
		<div className='w-full max-w-2xl p-8 space-y-6 bg-white rounded-xl shadow-lg'>
			<div className='text-center'>
				<h1 className='text-3xl font-bold text-gray-800'>Select Storage Buckets</h1>
				<p className='mt-2 text-gray-500'>
					Choose the {selectedCloud.toUpperCase()} buckets you want to analyze.
				</p>
			</div>
			<div className='flex justify-between items-center'>
				<div className='flex gap-2'>
					<button
						onClick={handleSelectAll}
						className='flex items-center gap-2 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors'>
						<CheckCircle size={16} />
						Select All Available
					</button>
					<button
						onClick={handleDeselectAll}
						className='flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors'>
						<Square size={16} />
						Deselect All
					</button>
				</div>
				<div className='text-sm text-gray-500'>
					{selectedBuckets.length} of {buckets.filter(bucket => !fullyOptimizedBucketIds.includes(bucket.id)).length} available selected
				</div>
			</div>
			<div className='space-y-4 max-h-96 overflow-y-auto pr-4'>
				{buckets.map((bucket) => {
					const isOptimized = fullyOptimizedBucketIds.includes(bucket.id);
					const isSelected = selectedBuckets.includes(bucket.id);
					return (
						<div
							key={bucket.id}
							onClick={() => handleToggleBucket(bucket.id)}
							className={`flex items-center justify-between p-4 rounded-lg transition-all duration-200 
                                ${
																	isOptimized
																		? "bg-green-50 text-gray-500 cursor-not-allowed"
																		: isSelected
																		? "bg-blue-100 border-blue-400 ring-2 ring-blue-300 cursor-pointer"
																		: "bg-gray-100 hover:bg-gray-200 cursor-pointer"
																}`}>
							<div className='flex items-center gap-3'>
								<Database
									className={
										isOptimized ? "text-green-600" : isSelected ? "text-blue-600" : "text-gray-500"
									}
									size={20}
								/>
								<span className={`font-medium ${isOptimized ? "text-gray-600" : "text-gray-800"}`}>
									{bucket.name}
								</span>
								{isOptimized && (
									<span className='flex items-center gap-1 text-xs font-semibold text-green-800 bg-green-200 px-2 py-0.5 rounded-full'>
										<CheckCircle size={12} />
										Fully Optimized
									</span>
								)}
							</div>
							{!isOptimized && (
								<div
									className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
										isSelected ? "bg-blue-600 border-blue-600" : "border-gray-400"
									}`}>
									{isSelected && (
										<svg
											className='w-4 h-4 text-white'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='3'
												d='M5 13l4 4L19 7'
											/>
										</svg>
									)}
								</div>
							)}
						</div>
					);
				})}
			</div>
			<div className='flex justify-end items-center pt-6'>
				<div className='flex flex-col items-end'>
					<button
						onClick={handleAnalyze}
						disabled={isLoading}
						className='flex items-center justify-center gap-2 px-6 py-2 w-48 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all transform hover:scale-105'>
						{isLoading ? (
							<LoadingSpinner />
						) : (
							<>
								Analyze Savings <ArrowRight size={18} />
							</>
						)}
					</button>
					{showError && (
						<p className='text-sm text-red-500 mt-2'>
							Please select at least one bucket to analyze.
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default SelectBucketsPage;
