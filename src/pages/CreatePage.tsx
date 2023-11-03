import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./CreatePage.css";

const CreatePage: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>CreatePage</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">CreatePage</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ExploreContainer name="CreatePage" />
			</IonContent>
		</IonPage>
	);
};

export default CreatePage;
