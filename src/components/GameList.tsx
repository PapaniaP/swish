import React, { useState, useEffect } from "react";
import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonItem,
	IonLabel,
	IonAvatar,
	IonImg,
	IonChip,
} from "@ionic/react";
import CardNextGame from "./CardNextGame";
import { GameInfo } from "./CardNextGame";

const GameList: React.FC = () => {
	const [games, setGames] = useState<GameInfo[]>([]);
	const url = `https://swish-cc699-default-rtdb.europe-west1.firebasedatabase.app/games.json`
	useEffect(() => {

	async function getGames() {
		const response = await fetch(url)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		});
		const data = await response.json();
		setGames(data);
	}

			.then((data) => {
				// Convert object of objects into an array
				const loadedGames = Object.keys(data).map((key) => {
					return {
						id: key,
						...data[key],
					};
				});
				setGames(loadedGames);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
			});
	}, []);

	return (
		<div>
			{games.map((game) => (
				<CardNextGame
					key={game.id}
					gameInfo={game}
				/>
			))}
		</div>
	);
};

export default GameList;
