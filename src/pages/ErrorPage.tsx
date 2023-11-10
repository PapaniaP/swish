// We did not work on this page

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./ErrorPage.css";

const ErrorPage: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>ErrorPage</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">ErrorPage</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ExploreContainer name="ErrorPage" />
			</IonContent>
		</IonPage>
	);
};

export default ErrorPage;
