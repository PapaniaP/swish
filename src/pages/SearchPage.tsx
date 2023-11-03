import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./SearchPage.css";

const SearchPage: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>SearchPage</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">SearchPage</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ExploreContainer name="SearchPage" />
			</IonContent>
		</IonPage>
	);
};

export default SearchPage;
