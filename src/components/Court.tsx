//Samuel
// Component used to on the courts list when choosing a game,

import React, { useState } from "react";
import "./CardNextGame.css";
import "./Court.css";
import CourtFetcher from "./CourtFetcher";

import {
	IonCard,
	IonCardContent,
	IonCardTitle,
	IonItem,
	IonLabel,
	IonChip,
	IonIcon,
	IonAvatar,
	IonImg,
} from "@ionic/react";
import {
	checkmarkDoneCircle,
	peopleOutline,
	pinOutline,
	timeOutline,
} from "ionicons/icons";

export type CourtInfo = {
	id: number;
	courtName: string;
	courtImage: string;
	location: string;
	courtType: "Indoor" | "Outdoor";
};

type CourtProps = {
	courtInfo: CourtInfo;
};

const Court: React.FC<CourtProps> = ({ courtInfo }) => {
	return (
		<IonCard>
			<IonCardContent>
				<IonItem
					className="tag-container no-margin"
					lines="none"
				>
					<IonChip
						className="custom-chip"
						color="secondary"
						outline={true}
					>
						{courtInfo.courtType}
					</IonChip>
				</IonItem>

				<IonItem lines="full">
					<IonCardTitle>{courtInfo.courtName}</IonCardTitle>
				</IonItem>
				<IonItem lines="full">
					<IonIcon
						className="label-icon"
						aria-hidden="true"
						icon={pinOutline}
						slot="start"
					></IonIcon>
					<IonLabel>{courtInfo.location}</IonLabel>
				</IonItem>
			</IonCardContent>
		</IonCard>
	);
};

export default Court;
