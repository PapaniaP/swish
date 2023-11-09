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
import CardNextGame from "./CardNextGame";
import GameFetcher from "./GameFetcher";
import { GameInfo } from "./CardNextGame";

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
				<IonList>
					{games.map((game) => (
						<IonItem key={game.id}>
							<CardNextGame
								key={game.id}
								gameInfo={game}
							/>
						</IonItem>
					))}
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default GamesList;
