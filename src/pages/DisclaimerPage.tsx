import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import "./DisclaimerPage.css";
import ExploreContainer from "../components/ExploreContainer";

const DisclaimerPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>CreatePage</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">CreatePage</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="Disclaimer page" />
            </IonContent>
        </IonPage>
    );
};

export default DisclaimerPage;

