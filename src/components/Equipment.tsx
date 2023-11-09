import { IonCheckbox, IonItem } from "@ionic/react";
import "./Equipment.css"

const Equipment: React.FC = () => {
    return (
        <div>
            <div className="text">
                <strong>Equipment</strong>
                <p>Check off equipment you have. Players who join your game will have the same option</p>
            </div>
            <IonItem>
                <IonCheckbox justify="space-between">Ball</IonCheckbox>
            </IonItem>
            <IonItem>
                <IonCheckbox justify="space-between">Pump</IonCheckbox>
            </IonItem>
        </div>
    )
}

export default Equipment;