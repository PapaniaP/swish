import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./HomePage.css";

const HomePage: React.FC = () => {
	return (
		<IonPage>
			<IonHeader className="ion-no-border">
				<IonToolbar>
					<IonTitle>Your next game</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Your next game</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ExploreContainer name="HomePage" />
			</IonContent>
		</IonPage>
	);
};

export default HomePage;
