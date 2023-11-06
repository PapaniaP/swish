import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState, useEffect } from "react";
import "./HomePage.css";
import CardNextGame from "../components/CardNextGame";
import { GameInfo } from "../components/CardNextGame";

const HomePage: React.FC = () => {
	const [games, setGames] = useState<GameInfo[]>([]);

	useEffect(() => {
		const url = `https://swish-cc699-default-rtdb.europe-west1.firebasedatabase.app/games.json`;
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
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
		<IonPage>
			<IonHeader className="ion-no-border">
				<IonToolbar>
					<IonTitle>Your next game</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Your next game</IonTitle>
					</IonToolbar>
				</IonHeader>
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
