import {
	IonButton,
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonItem,
	IonTextarea,
	IonSelect,
	IonSelectOption,
	IonDatetime,
	IonModal,
	IonCheckbox,
	IonButtons,
	IonBackButton,
	IonIcon,
} from "@ionic/react";
import React, { useState, useEffect, FormEvent } from "react";
import { useParams, useHistory } from "react-router-dom";
import { trashBinOutline } from "ionicons/icons";

interface RouteParams {
	gameId: string;
}

const EditPage: React.FC = () => {
	const history = useHistory();
	const params = useParams<RouteParams>();
	const [game, setGame] = useState<any>({
		// Initialize with default values or an empty object
		name: "",
		description: "",
		skillLevel: "",
		gameSize: "",
		datetime: "",
		equipment: { ball: false, pump: false },
	});

	const url = `https://swish-cc699-default-rtdb.europe-west1.firebasedatabase.app/games/${params.gameId}.json`;

	useEffect(() => {
		async function getGame() {
			const response = await fetch(url);
			const data = await response.json();
			console.log(data);
			setGame(data);
		}
		getGame();
	}, [url]);

	async function handleSubmit(event: FormEvent) {
		event.preventDefault();

		const gameToUpdate = {
			name: game.gameName,
			description: game.gameDescription,
			skillLevel: game.skillLevel,
			gameSize: game.gameSize,
			datetime: game.datetime,
			equipment: game.equipment,
		};

		const response = await fetch(url, {
			method: "PUT",
			body: JSON.stringify(gameToUpdate),
		});

		if (response.ok) {
			history.push("/games");
		} else {
			console.log("Something went wrong");
		}
	}

	async function deleteGame() {
		if (window.confirm("Are you sure you want to delete this game?")) {
			const response = await fetch(url, {
				method: "DELETE",
			});
			if (response.ok) {
				history.push("/games");
			} else {
				console.log("Something went wrong");
			}
		}
	}

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
							onClick={deleteGame}
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
					<form onSubmit={handleSubmit}>
						<IonItem>
							<IonTextarea
								label="Name of your game"
								labelPlacement="stacked"
								placeholder="E.g. Sunday Basketball"
								autoGrow={true}
								value={game.name}
								onIonChange={(e) => setGame({ ...game, name: e.detail.value! })}
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
				onClick={handleSubmit}
			>
				Save and Update
			</IonButton>
		</IonPage>
	);
};

export default EditPage;
