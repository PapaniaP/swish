//Paolo
// This was a placeholder page that was supposed to be called in the Search page.
import React, { useEffect, useState } from "react";
import {
	IonContent,
	IonHeader,
	IonItem,
	IonList,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import CardSearchGame from "./CardSearchGame";
import { SearchInfo } from "./CardSearchGame";
import GameFetcher from "./GameFetcher";

const GamesList: React.FC = () => {
	const [games, setGames] = useState<SearchInfo[]>([]);

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
				setGames(loadedGames);
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		};

		fetchData();
	}, []);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Game List</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				{games.map((game) => (
					<CardSearchGame
						key={game.id}
						searchInfo={game}
					/>
				))}
			</IonContent>
		</IonPage>
	);
};

export default GamesList;
