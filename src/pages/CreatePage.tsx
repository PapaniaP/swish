import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import "./CreatePage.css";
import "../styles.css"
import "../theme/variables.css"
import { addOutline } from "ionicons/icons";
import React, { useState, useEffect } from "react";
import Court from "../components/Court";
import { CourtInfo } from "../components/Court";

import EmptyStateHome from "../components/EmptyStateHome";

const CreatePage: React.FC = () => {

	const [courts, setCourts] = useState<CourtInfo[]>([]);

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
					{courts.map((court) => (
						<Court
							key={court.id}
							CourtInfo={court}
						/>
					))}


				</main>
			</IonContent>
			<IonButton expand="block" className="ion-padding" slot="end" routerLink="/disclaimerbookingpage">
				Next
			</IonButton>
		</IonPage>
	);
};

export default CreatePage;
