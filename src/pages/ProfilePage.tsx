import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./ProfilePage.css";

const ProfilePage: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>ProfilePage</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
			</IonContent>
		</IonPage>
	);
};

export default ProfilePage;
