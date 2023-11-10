import {
	IonButton,
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonItem,
	IonTextarea,
	IonButtons,
	IonBackButton,
	IonIcon,
} from "@ionic/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { trashBinOutline } from "ionicons/icons";
import { getDatabase, ref, update, remove, push } from "firebase/database";

interface Court {
	courtImage: string;
	courtName: string;
	gameType: "Indoor" | "Outdoor";
	id: string;
	location: string;
}

interface Equipment {
	ball: boolean;
	pump: boolean;
}

interface Game {
	availableSpots: number;
	court: Court;
	equipment: Equipment;
	gameDescription: string;
	gameName: string;
	gameSize: string;
	id: string;
	skillLevel: "Beginner" | "Casual" | "Skilled" | "Experienced";
	time: string;
}

const EditPage: React.FC = () => {
	const history = useHistory();
	const database = getDatabase();

	const [game, setGame] = useState<Game>({
		availableSpots: 2,
		court: {
			courtImage: "https://example.com/court-image.jpg",
			courtName: "Example Court",
			gameType: "Outdoor",
			id: "1",
			location: "Example Location",
		},
		equipment: {
			ball: true,
			pump: true,
		},
		gameDescription: "This is an example game description.",
		gameName: "Example Game",
		gameSize: "3 vs 3",
		id: "1",
		skillLevel: "Skilled",
		time: "Nov 12, 2023 6:00 PM",
	});

	const handleUpdate = async () => {
		const gameRef = ref(database, `games/${game.id}`);
		try {
			await update(gameRef, game);
			console.log("Game Updated", game);
			history.push("/"); // Redirect to another page after updating
		} catch (error) {
			console.error("Error updating game", error);
		}
	};

	const handleDelete = async () => {
		const gameRef = ref(database, `games/${game.id}`);
		try {
			await remove(gameRef);
			console.log("Game Deleted", game);
			history.push("/"); // Redirect to another page after deleting
		} catch (error) {
			console.error("Error deleting game", error);
		}
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton defaultHref="#"></IonBackButton>
					</IonButtons>
					<IonTitle>Edit Game</IonTitle>
					<div
						className="progressBar ion-padding-end"
						slot="end"
					>
						<IonButton
							fill="clear"
							size="small"
							onClick={handleDelete}
						>
							<IonIcon
								aria-hidden="true"
								icon={trashBinOutline}
							></IonIcon>
						</IonButton>
					</div>
				</IonToolbar>
			</IonHeader>
			<IonContent
				fullscreen
				className="ion-padding"
			>
				<main>
					{/* Your form fields go here */}
					<form onSubmit={(e) => e.preventDefault()}>
						<IonItem>
							<IonTextarea
								label="Name of your game"
								labelPlacement="stacked"
								placeholder="E.g. Sunday Basketball"
								autoGrow={true}
								value={game.gameName}
								onIonChange={(e) => setGame({ ...game, gameName: e.detail.value! })}
							></IonTextarea>
						</IonItem>
						{/* Add more form fields as needed */}
					</form>
				</main>
			</IonContent>
			<IonButton
				expand="block"
				className="ion-padding"
				slot="end"
				onClick={handleUpdate}
			>
				Save and Update
			</IonButton>
		</IonPage>
	);
};

export default EditPage;
