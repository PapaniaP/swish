import { IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import "./DisclaimerPage.css";
import { alertCircle } from "ionicons/icons";

const DisclaimerPage: React.FC = () => {

    return (
        <IonPage>
            <IonContent className="ion-padding ion-text-center">
                <div className="container">
                    <IonIcon
                        color="secondary"
                        size="large"
                        className="label-icon"
                        aria-hidden="true"
                        icon={alertCircle}
                    ></IonIcon>
                    <IonTitle className="ion-text-center">Disclaimer</IonTitle>
                    <p className="ion-text-center">All outdoor courts are public and not reserved for your game only. You may find other people there.</p>
                </div>
            </IonContent>
            <IonButton expand="block" className="ion-padding" slot="end" routerLink="/disclaimerbookingpage">
                Next
            </IonButton>
        </IonPage >
    );
};

export default DisclaimerPage;

