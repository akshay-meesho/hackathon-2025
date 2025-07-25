import React, { useState, useEffect } from "react";

const ConfettiPiece = ({ style }) => <div className='pointer-events-none' style={style}></div>;

const Confetti = ({ origin }) => {
	const [pieces, setPieces] = useState([]);

	useEffect(() => {
		if (origin) {
			const newPieces = Array.from({ length: 80 }).map((_, i) => ({
				id: i,
				style: {
					position: "fixed",
					top: `${origin.y}px`,
					left: `${origin.x}px`,
					width: `${Math.floor(Math.random() * 8) + 5}px`,
					height: `${Math.floor(Math.random() * 8) + 5}px`,
					backgroundColor: [
						"#f44336",
						"#e91e63",
						"#9c27b0",
						"#673ab7",
						"#3f51b5",
						"#2196f3",
						"#03a9f4",
						"#00bcd4",
						"#009688",
						"#4caf50",
						"#8bc34a",
						"#cddc39",
						"#ffeb3b",
						"#ffc107",
						"#ff9800",
						"#ff5722",
					][Math.floor(Math.random() * 16)],
					transform: `rotate(${Math.random() * 360}deg)`,
					"--randomX": (Math.random() - 0.5) * 2,
					"--randomY": (Math.random() - 0.5) * 2,
					animation: `explode 1.2s ease-out forwards`,
				},
			}));
			setPieces(newPieces);
		}
	}, [origin]);

	if (!origin) return null;

	return (
		<div className='fixed top-0 left-0 w-full h-full pointer-events-none z-50'>
			{pieces.map((p) => (
				<ConfettiPiece key={p.id} style={p.style} />
			))}
		</div>
	);
};

export default Confetti;
