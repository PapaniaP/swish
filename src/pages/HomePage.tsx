// Paolo - This is a home page for our app which is featuring Your next game. This type of card is different to the rest because it is hardcoded.

import React, { useState } from "react";
import {
	IonButton,
	IonContent,
	IonHeader,
	IonPage,
	IonText,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import CardNextGame from "../components/CardNextGame";
import CardYourGames from "../components/CardYourGames";
import EmptyStateHome from "../components/EmptyStateHome";
import JoinedGameFetcher from "../components/JoinedGameFetcher";
import { GameInfo } from "../components/CardNextGame";
import "./HomePage.css";

const HomePage: React.FC = () => {
	const [games, setGames] = useState<GameInfo[]>([]);

	const handleGameDataFetched = (data: GameInfo[]) => {
		setGames(data);
	};

	// this sorts games to display the closest to the deadline

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
				<section className="next-game">
					<div className="sub-container">
						<h2 className="sub-heading">Your Next Game</h2>
					</div>
					<JoinedGameFetcher onDataFetched={handleGameDataFetched} />
					{nextGame ? (
						<CardNextGame gameInfo={nextGame} />
					) : (
						<EmptyStateHome /> // Handle empty state
					)}
				</section>
				<section className="your-games">
					<div className="sub-container">
						<h2 className="sub-heading">Your Games</h2>
					</div>
					<JoinedGameFetcher onDataFetched={handleGameDataFetched} />
					{/* displaying next game by mapping through CardYourGames component */}
					{nextGame ? (
						sortedGames.length > 1 ? (
							sortedGames.slice(1).map((game) => (
								<CardYourGames
									key={game.id}
									gameInfo={game}
								/>
							))
						) : (
							<>
								<div className="no-games">
									<IonTitle className="ion-text-center">Disclaimer</IonTitle>
									<p className="ion-text-center">
										No additional games to display. Go to the{" "}
										<IonText color="primary">'Search'</IonText> section to find more
										games.
									</p>
									<IonButton
										className="ion-padding"
										slot="end"
										routerLink="/search"
									>
										Find a game
									</IonButton>
								</div>
							</>
						)
					) : null}
				</section>
			</IonContent>
		</IonPage>
	);
};

export default HomePage;
