//Paolo
// component used to fetch games from the database and return null, as we are not rendering here.

import React, { useEffect } from "react";
import { GameInfo } from "./CardNextGame";

interface GameFetcherProps {
	onDataFetched: (games: GameInfo[]) => void;
}

const GameFetcher: React.FC<GameFetcherProps> = ({ onDataFetched }) => {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = `https://swish-cc699-default-rtdb.europe-west1.firebasedatabase.app/games.json`;
				const response = await fetch(url);

				if (!response.ok) {
					throw new Error("Network response was not ok");
				}

				const data = await response.json();
				const loadedGames = Object.keys(data).map((key) => ({
					id: key,
					...data[key],
				}));
				onDataFetched(loadedGames);
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		};

		fetchData();
	}, [onDataFetched]);

	return null;
};

export default GameFetcher;
