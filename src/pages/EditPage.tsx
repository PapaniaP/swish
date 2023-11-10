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
import { getDatabase, ref, update, remove, push, onValue } from "firebase/database";
import { Court } from "./CreatePage3";

interface GameState {
	id: string;
	gameName: string;
	gameDescription: string;
	skillLevel: string;
	gameSize: string;
	court: Court | null; // Use the Court interface here
	availableSpots: number;
	time: string;
	equipment: {
		ball: boolean;
		pump: boolean;
	};
}
const EditPage: React.FC = () => {
	const history = useHistory();
	const database = getDatabase();

	const [game, setGame] = useState<GameState>({
		id: "",
		gameName: "",
		gameDescription: "",
		skillLevel: "",
		gameSize: "",
		court: {
			id: "",
			courtName: "",
			courtImage: "",
			location: "",
			courtType: "",
			gameType: "",
		},
		availableSpots: 10,
		time: "",
		equipment: {
			ball: true,
			pump: true,
		},
	});

	const handleUpdate = async () => {
		const gameRef = ref(database, `games/${game.id}`);
		try {
			await update(gameRef, game);
			console.log("Game Updated", game);
			history.push("/search"); // Redirect to another page after updating
		} catch (error) {
			console.error("Error updating game", error);
		}
	};

	const handleDelete = async () => {
		const gameRef = ref(database, `games/${game.id}`);
		try {
			await remove(gameRef);
			console.log("Game Deleted", game);
			history.push("/search"); // Redirect to another page after deleting
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
