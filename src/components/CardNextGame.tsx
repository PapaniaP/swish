import React from "react";
import "./CardNextGame.css";
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
	IonIcon,
} from "@ionic/react";
import { peopleOutline, pinOutline, timeOutline } from "ionicons/icons";

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
	const numberOfPeople = gameInfo.gameSize - gameInfo.availableSpots;
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
						{gameInfo.gameType}
					</IonChip>
					<IonChip
						className="custom-chip"
						color="secondary"
						outline={true}
					>
						{gameInfo.gameSize}
					</IonChip>

					<IonChip
						className="custom-chip"
						color="secondary"
						outline={true}
						slot="end"
					>
						<IonIcon
							className="custom-icon"
							aria-hidden="true"
							icon={peopleOutline}
						/>
						{`${numberOfPeople} / ${gameInfo.gameSize}`}
					</IonChip>
				</IonItem>

				<IonItem lines="full">
					<IonCardTitle>{gameInfo.gameName}</IonCardTitle>
				</IonItem>

				<IonItem lines="none">
					<IonIcon
						className="label-icon"
						aria-hidden="true"
						icon={timeOutline}
						slot="start"
					></IonIcon>
					<IonLabel className="time-label">{gameInfo.time}</IonLabel>
				</IonItem>
				<IonItem lines="full">
					<IonIcon
						className="label-icon"
						aria-hidden="true"
						icon={pinOutline}
						slot="start"
					></IonIcon>
					<IonLabel>{gameInfo.location}</IonLabel>
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
