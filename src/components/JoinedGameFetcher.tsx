import React, { useState, useEffect } from "react";
import { GameInfo } from "./CardYourGames";

interface JoinedGameFetcherProps {
	onDataFetched: (games: GameInfo[]) => void;
}

const JoinedGameFetcher: React.FC<JoinedGameFetcherProps> = ({ onDataFetched }) => {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = `https://swish-cc699-default-rtdb.europe-west1.firebasedatabase.app/joinedGames.json`;
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
	}, []);

	return null;
};

export default JoinedGameFetcher;
