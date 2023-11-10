import {
	IonButton,
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonTextarea,
	IonSelect,
	IonSelectOption,
	IonDatetime,
	IonCheckbox,
	IonItem,
	IonLabel,
	IonModal,
	IonDatetimeButton,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import "./CreatePage2.css";
import "./CreatePage3.css";
import "../styles.css";
import "../theme/variables.css";

// Define a Court interface if you have specific properties for a court
export interface Court {
	id: string;
	courtImage: string;
	gameType: string;
	location: string;
	courtName: string;
	courtType: string;
}

export interface GameFormState {
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

const CreatePage3: React.FC = () => {
	const [formData, setFormData] = useState<GameFormState>({
		gameName: "",
		gameDescription: "",
		skillLevel: "",
		gameSize: "",
		court: null,
		availableSpots: 10,
		time: "",
		equipment: {
			ball: false,
			pump: false,
		},
	});

	const handleInputChange = (name: keyof GameFormState, value: any) => {
		setFormData({ ...formData, [name]: value });
	};

	const handleCheckboxChange = (name: keyof GameFormState["equipment"]) => {
		setFormData({
			...formData,
			equipment: { ...formData.equipment, [name]: !formData.equipment[name] },
		});
	};

	// Below this is fetching data for displaying courts in dropdown
	const [courts, setCourts] = useState<Court[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = `https://swish-cc699-default-rtdb.europe-west1.firebasedatabase.app/Courts.json`;
				const response = await fetch(url);

				if (!response.ok) {
					throw new Error("Network response was not ok");
				}

				const data = await response.json();
				const loadedCourts = Object.keys(data).map((key) => ({
					id: key,
					...data[key],
				}));
				setCourts(loadedCourts);
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		};

		fetchData();
	}, []);

	const handleSaveAndCreate = async () => {
		try {
			const response = await fetch(
				"https://swish-cc699-default-rtdb.europe-west1.firebasedatabase.app/games.json",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				}
			);

			if (!response.ok) {
				throw new Error("Something went wrong!");
			}

			// If the game is successfully created, reset the form data
			setFormData({
				gameName: "",
				gameDescription: "",
				skillLevel: "",
				gameSize: "",
				court: null,
				availableSpots: 10,
				time: "",
				equipment: {
					ball: false,
					pump: false,
				},
			});

			// Handle the successful response here, like showing a success message
			console.log("Game created:", await response.json());

			// Optionally, navigate to the search page programmatically if needed
			// history.push('/search'); // You would need to use useHistory from 'react-router-dom' for this
		} catch (error) {
			console.error("Failed to create game:", error);
		}
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Create Game</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent
				fullscreen
				className="ion-padding"
			>
				<IonItem>
					<IonLabel position="stacked">Name of your game</IonLabel>
					<IonTextarea
						autoGrow={true}
						placeholder="E.g. Sunday Basketball"
						value={formData.gameName}
						onIonChange={(e) => handleInputChange("gameName", e.detail.value!)}
					></IonTextarea>
				</IonItem>
				<IonItem>
					<IonLabel position="stacked">Game description</IonLabel>
					<IonTextarea
						placeholder="Any extra information for players can go here."
						autoGrow={true}
						value={formData.gameDescription}
						onIonChange={(e) => handleInputChange("gameDescription", e.detail.value!)}
					></IonTextarea>
				</IonItem>
				<IonItem>
					<IonLabel position="stacked">Skill level</IonLabel>
					<IonSelect
						justify="space-between"
						label="Skill level"
						placeholder="Select"
						value={formData.skillLevel}
						onIonChange={(e) => handleInputChange("skillLevel", e.detail.value)}
					>
						<IonSelectOption value="Beginner">Beginner</IonSelectOption>
						<IonSelectOption value="Casual">Casual</IonSelectOption>
						<IonSelectOption value="Skilled">Skilled</IonSelectOption>
						<IonSelectOption value="Experienced">Experienced</IonSelectOption>
					</IonSelect>
				</IonItem>
				<IonItem>
					<IonLabel position="stacked">Court</IonLabel>
					<IonSelect
						justify="space-between"
						label="Court"
						placeholder="Select"
						value={formData.court?.id} // Assuming the court object has an id
						onIonChange={(e) =>
							handleInputChange(
								"court",
								courts.find((court) => court.id === e.detail.value)
							)
						}
					>
						{courts.map((court) => (
							<IonSelectOption
								key={court.id}
								value={court.id}
							>
								{court.courtName} {/* Assuming the court object has a name */}
							</IonSelectOption>
						))}
					</IonSelect>
				</IonItem>
				<IonItem>
					<IonLabel position="stacked">Game size</IonLabel>
					<IonSelect
						justify="space-between"
						label="Game size"
						placeholder="Select"
						value={formData.gameSize}
						onIonChange={(e) => handleInputChange("gameSize", e.detail.value)}
					>
						<IonSelectOption value="1 vs 1">1 vs 1</IonSelectOption>
						<IonSelectOption value="2 vs 2">2 vs 2</IonSelectOption>
						<IonSelectOption value="3 vs 3">3 vs 3</IonSelectOption>
						<IonSelectOption value="4 vs 4">4 vs 4</IonSelectOption>
						<IonSelectOption value="5 vs 5">5 vs 5</IonSelectOption>
					</IonSelect>
				</IonItem>

				<div className="timeAndEquipment">
					<div className="timepickerContainer">
						<strong className='timepickerStrong'>Select a date and time</strong>
						<IonDatetime value={formData.time} onIonChange={e => handleInputChange('time', e.detail.value!)}></IonDatetime>

						{/* this date picker is not showing up. It seems that it is because of the value in IonDateTime */}

						{/* <IonDatetimeButton datetime="datetime" className="dateButtons"></IonDatetimeButton>
						<IonModal keepContentsMounted={true}>
							<IonDatetime value={formData.time} id="datetime" showDefaultButtons={true} onIonChange={e => handleInputChange('time', e.detail.value!)}></IonDatetime>
						</IonModal> */}
					</div>
					<div>
						<div className="text">
							<strong>Equipment</strong>
							<p>Check off equipment you have. Players who join your game will have the same option</p>
						</div>
						<IonItem>
							<IonLabel>Ball</IonLabel>
							<IonCheckbox checked={formData.equipment.ball} onIonChange={() => handleCheckboxChange('ball')} />
						</IonItem>
						<IonItem>
							<IonLabel>Pump</IonLabel>
							<IonCheckbox checked={formData.equipment.pump} onIonChange={() => handleCheckboxChange('pump')} />
						</IonItem>
					</div>
				</div>
			</IonContent>
			<IonButton className="ion-padding" expand="block" slot="end" onClick={handleSaveAndCreate} routerLink="/search">
				Save and Create
			</IonButton>
		</IonPage>
	);
};

export default CreatePage3;
