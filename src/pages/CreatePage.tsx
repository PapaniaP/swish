import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import "./CreatePage.css";
import "../styles.css"
import "../theme/variables.css"
import { add, addOutline } from "ionicons/icons";

const CreatePage: React.FC = () => {
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

				</main>
			</IonContent>
			<IonButton expand="block" className="ion-padding" slot="end" routerLink="/disclaimerbookingpage">
				Next
			</IonButton>
		</IonPage>
	);
};

export default CreatePage;
