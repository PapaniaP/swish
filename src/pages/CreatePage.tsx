import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import "./CreatePage.css";
import "../styles.css"
import "../theme/variables.css"
import { addOutline } from "ionicons/icons";
import React, { useState, useEffect } from "react";
import Court from "../components/Court";
import { GameInfo } from "../components/CardNextGame";

import EmptyStateHome from "../components/EmptyStateHome";

const CreatePage: React.FC = () => {

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

	// sort games based on time
	const sortedGames = [...games].sort((a, b) => {
		const dateA = new Date(a.time);
		const dateB = new Date(b.time);
		return dateA.getTime() - dateB.getTime();
	});

	// Render the first game from new array
	const nextGame = sortedGames.length > 0 ? sortedGames[0] : null;

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle slot="start">CreatePage</IonTitle>
					<div className="progressBar ion-padding-end" slot="end">
						<IonButton color="primary" size="small">1</IonButton>
						<IonButton fill="outline" disabled={true} size="small">2</IonButton>
						<IonButton fill="outline" disabled={true} size="small">3</IonButton>
					</div>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen className="ion-padding">
				<main>
					<div className="subheadingAddcourtContainer">
						<div className="subheadingContainer">
							<IonButton color="primary" size="small">1</IonButton>
							<strong >Pick a court</strong>
						</div>
						<IonButton fill="clear" color="dark" size="small"><IonIcon slot="end" icon={addOutline}></IonIcon><p>Add a court</p></IonButton>
					</div>
					<IonSearchbar className="no-padding"></IonSearchbar>
					{nextGame ? (
						<Court
							key={nextGame.id}
							gameInfo={nextGame}
						/>
					) : (
						<EmptyStateHome /> // needs to be done
					)}
				</main>
			</IonContent>
			<IonButton expand="block" className="ion-padding" slot="end" routerLink="/disclaimerbookingpage">
				Next
			</IonButton>
		</IonPage>
	);
};

export default CreatePage;
