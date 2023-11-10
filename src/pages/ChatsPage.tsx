// We did not work on this page

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import "./ChatsPage.css";

const ChatsPage: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>ChatsPage</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">ChatsPage</IonTitle>
					</IonToolbar>
				</IonHeader>
			</IonContent>
		</IonPage>
	);
};

export default ChatsPage;
