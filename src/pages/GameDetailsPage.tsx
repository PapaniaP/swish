import { useParams } from "react-router-dom";
import {
	IonBackButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { shareSocialOutline } from "ionicons/icons";
import { GameInfo } from "../components/CardNextGame";

type GameDetailsPageProps = {
	gameInfo: GameInfo;
};

const GameDetailsPage: React.FC<GameDetailsPageProps> = ({ gameInfo }) => {
	// const { gameInfo } = props; this does not make sense to me, Samo

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton defaultHref="#"></IonBackButton>
					</IonButtons>
					<IonTitle className="ion-text-center">Game Details</IonTitle>
					<IonButtons slot="end">
						<IonIcon
							className="label-icon"
							aria-hidden="true"
							icon={shareSocialOutline}
							slot="start"
						></IonIcon>
					</IonButtons>
				</IonToolbar>
			</IonHeader>

			<IonContent
				fullscreen
				className="ion-padding"
			></IonContent>
		</IonPage>
	);
};

export default GameDetailsPage;
