import React, { useState } from "react";
import "./CardNextGame.css";
import "./Court.css";
import GameFetcher from "./GameFetcher";

import {
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonItem,
    IonLabel,
    IonChip,
    IonIcon,
} from "@ionic/react";
import { pinOutline } from "ionicons/icons";

export type CourtInfo = {
    id: number;
    courtName: "string"
    courtImage: string;
    location: string;
    gameType: "Indoor" | "Outdoor";
};

type CourtProps = {
    CourtInfo: CourtInfo;
};

const Court: React.FC<CourtProps> = ({ CourtInfo }) => {
    const [court, setCourt] = useState<CourtInfo[]>([])
    const handleGameDataFetched = (data: CourtInfo[]) => {
        setCourt(data);
    };

    return (
        <IonCard>
            <IonCardContent>
                <IonItem className="tag-container no-margin" lines="full">
                    <IonCardTitle slot="start">{CourtInfo.courtName}</IonCardTitle>
                    <IonChip slot="end" className="custom-chip" color="secondary" outline={true}>
                        {CourtInfo.gameType}
                    </IonChip>
                </IonItem>
                <IonItem lines="none">
                    <IonIcon
                        className="label-icon"
                        aria-hidden="true"
                        icon={pinOutline}
                        slot="start"
                    ></IonIcon>
                    <IonLabel>{CourtInfo.location}</IonLabel>
                </IonItem>
            </IonCardContent >
        </IonCard >
    );
};

export default Court;