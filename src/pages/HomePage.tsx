import React, { useState } from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import CardNextGame from "../components/CardNextGame";
import EmptyStateHome from "../components/EmptyStateHome";
import GameFetcher from "../components/GameFetcher";
import { GameInfo } from "../components/CardNextGame";

const HomePage: React.FC = () => {
	const [games, setGames] = useState<GameInfo[]>([]);

	const handleGameDataFetched = (data: GameInfo[]) => {
		setGames(data);
	};

	const sortedGames = [...games].sort((a, b) => {
		const dateA = new Date(a.time);
		const dateB = new Date(b.time);
		return dateA.getTime() - dateB.getTime();
	});

	const nextGame = sortedGames.length > 0 ? sortedGames[0] : null;

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Home</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<GameFetcher onDataFetched={handleGameDataFetched} />
				{nextGame ? (
					<CardNextGame gameInfo={nextGame} />
				) : (
					<EmptyStateHome /> // Handle empty state
				)}
			</IonContent>
		</IonPage>
	);
};

export default HomePage;
