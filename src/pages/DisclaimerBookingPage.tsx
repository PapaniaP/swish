import { IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import "./DisclaimerPage.css";
import { checkmarkCircle } from "ionicons/icons";

const DisclaimerBookingPage: React.FC = () => {

    return (
        <IonPage>
            <IonContent className="ion-padding ion-text-center">
                <div className="container">
                    <IonIcon
                        color="secondary"
                        size="large"
                        className="label-icon"
                        aria-hidden="true"
                        icon={checkmarkCircle}
                    ></IonIcon>
                    <IonTitle className="ion-text-center">Booking a gym</IonTitle>
                    <p className="ion-text-center">Please ensure you've booked the court prior to setting up a game in the app.
                        Bookings and payments are handled outside of our platform.</p>
                </div>
            </IonContent>
            <IonButton expand="block" className="ion-padding" slot="end" routerLink="/create3">
                Next
            </IonButton>
        </IonPage >
    );
};

export default DisclaimerBookingPage;