import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState, useEffect } from "react";
import "./HomePage.css";
import CardNextGame from "../components/CardNextGame";
import { GameInfo } from "../components/CardNextGame";

const HomePage: React.FC = () => {
	const [games, setGames] = useState<GameInfo[]>([]);

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
			<IonHeader className="ion-no-border">
				<IonToolbar>
					<IonTitle>Home</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				{games.map((game) => (
					<CardNextGame
						key={game.id}
						gameInfo={game}
					/>
				))}
			</IonContent>
		</IonPage>
	);
};

export default HomePage;
