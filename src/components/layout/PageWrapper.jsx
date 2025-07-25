import React from "react";
import Header from "./Header";

const PageWrapper = ({ children, setPage, page }) => (
	<div className='min-h-screen bg-gray-50 flex flex-col'>
		<Header setPage={setPage} page={page} />
		<main className='flex-grow flex flex-col items-center justify-center p-4'>{children}</main>
	</div>
);

export default PageWrapper;
