import { Route } from "react-router-dom";
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonSearchbar,
	IonButton,
	IonIcon,
	IonRouterOutlet,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./SearchPage.css";
import { filter } from "ionicons/icons";
import FilterPage from "./FilterPage";

const SearchPage: React.FC = () => {
<<<<<<< HEAD
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
        <IonSearchbar placeholder="Search for Games">
          {" "}
          <IonButton>
            {" "}
            <IonIcon icon={filter}></IonIcon>
          </IonButton>
        </IonSearchbar>
      </IonContent>
    </IonPage>
  );
=======
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
				<IonSearchbar placeholder="Custom Placeholder">
					{" "}
					<IonButton>
						{" "}
						<IonIcon icon={filter}></IonIcon>
					</IonButton>
				</IonSearchbar>
			</IonContent>
		</IonPage>
	);
>>>>>>> d8b24f1113690511f80c77708767ab77263b1d49
};

export default SearchPage;
