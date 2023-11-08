import {
	IonBackButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { shareSocialOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { GameInfo } from "../components/CardNextGame";

const GameDetailsPage: React.FC = () => {
	const [gameDetails, setGameDetails] = useState<GameInfo[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = `https://swish-cc699-default-rtdb.europe-west1.firebasedatabase.app/games.json`;
				const response = await fetch(url);

				if (!response.ok) {
					throw new Error("Network response was not ok");
				}

				const data = await response.json();
				const loadedGame = Object.keys(data).map((key) => ({
					id: key,
					...data[key],
				}));
				setGameDetails(loadedGame);
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		};

		fetchData();
	}, []);

	const selectedGame = [...gameDetails];

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton defaultHref="#"></IonBackButton>
					</IonButtons>
					<IonTitle className="ion-text-center">Game Details</IonTitle>
					<IonButtons slot="end">
						<IonIcon
							className="label-icon"
							aria-hidden="true"
							icon={shareSocialOutline}
							slot="start"
						></IonIcon>
					</IonButtons>
				</IonToolbar>
			</IonHeader>

			<IonContent
				fullscreen
				className="ion-padding"
			></IonContent>
		</IonPage>
	);
};

export default GameDetailsPage;
