import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
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
import { GameInfo } from "../components/CardNextGame";

type GameDetailsPageProps = {};

const GameDetailsPage: React.FC<GameDetailsPageProps> = () => {
	const { id } = useParams<{ id: string }>();
	const [gameDetails, setGameDetails] = useState<GameInfo | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://swish-cc699-default-rtdb.europe-west1.firebasedatabase.app/games.json"
				);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}

				const data = await response.json();
				console.log("firebase", data);

				const games = data.games;

				const game = games.find((game: any) => game.id === parseInt(id, 10));
				console.log("game found", game);

				if (game) {
					setGameDetails(game);
				}
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		};

		fetchData();
	}, [id]);

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
			>
				{gameDetails ? (
					<div>
						<h1>Game Details</h1>
						<p>ID: {gameDetails.id}</p>
						<p>Game Name: {gameDetails.gameName}</p>
						{/* Display other game details here */}
					</div>
				) : (
					<div>Loading...</div>
				)}
			</IonContent>
		</IonPage>
	);
};

export default GameDetailsPage;
