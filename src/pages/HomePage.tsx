import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./HomePage.css";
import CardNextGame from "../components/CardNextGame";
import GameList from "../components/CardNextGame";

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
				<CardNextGame />
			</IonContent>
		</IonPage>
	);
};

export default HomePage;
