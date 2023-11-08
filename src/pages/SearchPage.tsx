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
};

export default SearchPage;
