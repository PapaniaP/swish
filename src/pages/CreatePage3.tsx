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
import React, { useState, useEffect } from "react";
import "./CreatePage2.css";
import "../styles.css";
import "../theme/variables.css";

// Define a Court interface if you have specific properties for a court
interface Court {
    id: string;
    courtImage: string;
    gameType: string;
    location: string;
    courtName: string;
    // ... other properties of a court
}

interface GameFormState {
    gameName: string;
    gameDescription: string;
    skillLevel: string;
    gameSize: string;
    court: Court | null; // Use the Court interface here
    availableSpots: number;
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
        court: null,
        availableSpots: 10,
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

    // Below this is fetching data for displaying courts in dropdown
    const [courts, setCourts] = useState<Court[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://swish-cc699-default-rtdb.europe-west1.firebasedatabase.app/Courts.json`;
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                const loadedCourts = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                }));
                setCourts(loadedCourts);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

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
                        <IonSelectOption value="Skilled">Skilled</IonSelectOption>
                        <IonSelectOption value="Experienced">Experienced</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Court</IonLabel>
                    <IonSelect
                        value={formData.court?.id} // Assuming the court object has an id
                        onIonChange={e => handleInputChange('court', courts.find(court => court.id === e.detail.value))}
                    >
                        {courts.map((court) => (
                            <IonSelectOption key={court.id} value={court.id}>
                                {court.courtName} {/* Assuming the court object has a name */}
                            </IonSelectOption>
                        ))}
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
