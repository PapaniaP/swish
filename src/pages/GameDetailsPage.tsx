// Paolo - not finished - routing was not working

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SearchInfo } from "../components/CardSearchGame";

interface GameDetailsPageProps {
	games: SearchInfo[];
}

function GameDetailsPage({ games }: GameDetailsPageProps) {
	const { id } = useParams<{ id: string }>();
	const [game, setGame] = useState<SearchInfo | null>(null);

	useEffect(() => {
		const gameId = parseInt(id, 10);

		// Use a different variable name for the map function to avoid conflicts
		const fetchedGame = games.find((g) => g.id === gameId.toString());
		setGame(fetchedGame || null);
	}, [games, id]);

	return (
		<div>
			<h1>Game Details</h1>
			{game ? (
				<div>
					<h2>{game.gameName}</h2>
					<p>{game.skillLevel}</p>
					{/* Render other game details */}
				</div>
			) : (
				<p>Game not found</p>
			)}
		</div>
	);
}

export default GameDetailsPage;
