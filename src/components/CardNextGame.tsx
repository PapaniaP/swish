import React, { useState, useEffect } from "react";
import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonItem,
	IonLabel,
	IonAvatar,
	IonImg,
	IonChip,
} from "@ionic/react";

export type GameInfo = {
	id: number;
	gameName: string;
	gameType: "Indoor" | "Outdoor";
	gameSize: number;
	availableSpots: number;
	time: string;
	location: string;
	organiser: {
		image: string;
		name: string;
	};
};

type CardNextGameProps = {
	gameInfo: GameInfo;
};

const CardNextGame: React.FC<CardNextGameProps> = ({ gameInfo }) => {
	return (
		<IonCard>
			<IonCardContent>
				<IonChip color="secondary">{gameInfo.gameType}</IonChip>
				<IonChip color="primary">{`Size: ${gameInfo.gameSize} players`}</IonChip>
				<IonChip color="tertiary">{`Available Spots: ${gameInfo.availableSpots}`}</IonChip>

				<IonCardHeader>
					<IonCardSubtitle>{gameInfo.time}</IonCardSubtitle>
					<IonCardTitle>{gameInfo.gameName}</IonCardTitle>
				</IonCardHeader>

				<IonItem lines="full">
					<IonLabel>Location</IonLabel>
					<IonLabel slot="end">{gameInfo.location}</IonLabel>
				</IonItem>
				<IonItem>
					<IonAvatar slot="start">
						<IonImg src={gameInfo.organiser.image} />
					</IonAvatar>
					<IonLabel>{gameInfo.organiser.name}</IonLabel>
				</IonItem>
			</IonCardContent>
		</IonCard>
	);
};

export default CardNextGame;
