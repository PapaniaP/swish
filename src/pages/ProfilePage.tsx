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
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">ProfilePage</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ExploreContainer name="ProfilePage" />
			</IonContent>
		</IonPage>
	);
};

export default ProfilePage;
