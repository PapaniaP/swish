// Paolo
// Component used on the Home page for your games. different styling to CardNextGame
import React from "react";
import { useHistory } from "react-router";
import "./CardYourGames.css";
import {
	IonCard,
	IonCardContent,
	IonCardTitle,
	IonItem,
	IonLabel,
	IonAvatar,
	IonImg,
	IonChip,
	IonIcon,
} from "@ionic/react";
import {
	checkmarkDoneCircle,
	peopleOutline,
	pinOutline,
	timeOutline,
} from "ionicons/icons";

export type GameInfo = {
	id: string;
	gameName: string;
	skillLevel: string;
	gameDescription: string;
	court: {
		courtImage: string;
		location: string;
		gameType: "Indoor" | "Outdoor";
	};
	gameSize: string;
	availableSpots: number;
	time: string;
	organiser: {
		image: string;
		name: string;
	};
};

type CardYourGamesProps = {
	gameInfo: GameInfo;
};

const CardYourGames: React.FC<CardYourGamesProps> = ({ gameInfo }) => {
	const history = useHistory();
	const handleCardClick = () => {
		history.push(`/gamedetails/${gameInfo.id}`);
	};

	// const numberOfPeople = gameInfo.gameSize - gameInfo.availableSpots;
	// const numberOfOthers = numberOfPeople - 1;
	return (
		<IonCard
			className="ion-card-click"
			onClick={handleCardClick}
		>
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
						{gameInfo.court.gameType}
					</IonChip>
					<IonChip
						className="custom-chip"
						color="secondary"
						outline={true}
					>
						{gameInfo.skillLevel}
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
						{gameInfo.availableSpots}
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
					<IonLabel>{gameInfo.court.location}</IonLabel>
				</IonItem>

				<IonItem lines="none">
					<IonIcon
						className="label-icon"
						aria-hidden="true"
						color="success"
						icon={checkmarkDoneCircle}
						slot="start"
					></IonIcon>
					<IonLabel color="success">Double confirmation</IonLabel>
				</IonItem>
			</IonCardContent>
		</IonCard>
	);
};

export default CardYourGames;
