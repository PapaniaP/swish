import React, { useState } from "react";
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
import GameFetcher from "./GameFetcher";
import { GameInfo } from "./CardSearchGame";

const GamesList: React.FC = () => {
	const [games, setGames] = useState<GameInfo[]>([]);

	const handleGameDataFetched = (data: GameInfo[]) => {
		setGames(data);
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Game List</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<GameFetcher onDataFetched={handleGameDataFetched} />
				{games.map((game) => (
					<CardSearchGame
						key={game.id}
						gameInfo={game}
					/>
				))}
			</IonContent>
		</IonPage>
	);
};

export default GamesList;
