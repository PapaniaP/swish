import {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonTextarea,
    IonSelect,
    IonSelectOption,
    IonDatetime,
    IonCheckbox,
    IonItem,
    IonLabel
} from "@ionic/react";
import React, { useState } from "react";
import "./CreatePage2.css";
import "../styles.css";
import "../theme/variables.css";

interface GameFormState {
    gameName: string;
    gameDescription: string;
    skillLevel: string;
    gameSize: string;
    time: string;
    equipment: {
        ball: boolean;
        pump: boolean;
    };
}

const CreatePage3: React.FC = () => {
    const [formData, setFormData] = useState<GameFormState>({
        gameName: '',
        gameDescription: '',
        skillLevel: '',
        gameSize: '',
        time: '',
        equipment: {
            ball: false,
            pump: false
        }
    });

    const handleInputChange = (name: keyof GameFormState, value: any) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (name: keyof GameFormState['equipment']) => {
        setFormData({
            ...formData,
            equipment: { ...formData.equipment, [name]: !formData.equipment[name] }
        });
    };

    const handleSaveAndCreate = async () => {
        try {
            const response = await fetch('https://swish-cc699-default-rtdb.europe-west1.firebasedatabase.app/games.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            // Handle the response here. For example, clear the form or show a success message.
            console.log('Game created:', await response.json());
        } catch (error) {
            console.error('Failed to create game:', error);
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Create Game</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding">
                <IonItem>
                    <IonLabel position="stacked">Name of your game</IonLabel>
                    <IonTextarea value={formData.gameName} onIonChange={e => handleInputChange('gameName', e.detail.value!)} autoGrow={true}></IonTextarea>
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Game description</IonLabel>
                    <IonTextarea value={formData.gameDescription} onIonChange={e => handleInputChange('gameDescription', e.detail.value!)} autoGrow={true}></IonTextarea>
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Skill level</IonLabel>
                    <IonSelect value={formData.skillLevel} onIonChange={e => handleInputChange('skillLevel', e.detail.value)}>
                        <IonSelectOption value="Beginner">Beginner</IonSelectOption>
                        <IonSelectOption value="Casual">Casual</IonSelectOption>
                        <IonSelectOption value="Professional">Professional</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Game size</IonLabel>
                    <IonSelect value={formData.gameSize} onIonChange={e => handleInputChange('gameSize', e.detail.value)}>
                        <IonSelectOption value="1 vs 1">1 vs 1</IonSelectOption>
                        <IonSelectOption value="2 vs 2">2 vs 2</IonSelectOption>
                        <IonSelectOption value="3 vs 3">3 vs 3</IonSelectOption>
                        <IonSelectOption value="4 vs 4">4 vs 4</IonSelectOption>
                        <IonSelectOption value="5 vs 5">5 vs 5</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Date and Time</IonLabel>
                    <IonDatetime value={formData.time} onIonChange={e => handleInputChange('time', e.detail.value!)}></IonDatetime>
                </IonItem>
                <IonItem>
                    <IonLabel>Ball</IonLabel>
                    <IonCheckbox checked={formData.equipment.ball} onIonChange={() => handleCheckboxChange('ball')} />
                </IonItem>
                <IonItem>
                    <IonLabel>Pump</IonLabel>
                    <IonCheckbox checked={formData.equipment.pump} onIonChange={() => handleCheckboxChange('pump')} />
                </IonItem>
                <IonButton expand="block" onClick={handleSaveAndCreate}>
                    Save and Create
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default CreatePage3;
