import React from "react";
import { useHistory } from "react-router";
import "./CardSearchGame.css";
import {
	IonCard,
	IonCardContent,
	IonCardTitle,
	IonItem,
	IonLabel,
	IonChip,
	IonIcon,
} from "@ionic/react";
import { peopleOutline, pinOutline, timeOutline } from "ionicons/icons";

export type GameInfo = {
	id: string;
	gameName: string;
	skillLevel: string;
	gameDescription: string;
	court: { courtImage: string; location: string; gameType: "Indoor" | "Outdoor" };
	gameSize: number;
	availableSpots: number;
	time: string;
	organiser: {
		image: string;
		name: string;
	};
};

type CardSearchGameProps = {
	gameInfo: GameInfo;
};

const CardSearchGame: React.FC<CardSearchGameProps> = ({ gameInfo }) => {
	const history = useHistory();

	const handleCardClick = (id: string) => {
		history.push(`/gamedetails/${gameInfo.id}`);
	};

	const numberOfPeople = gameInfo.gameSize - gameInfo.availableSpots;
	return (
		<IonCard
			className="ion-card-click"
			key={gameInfo.id}
			onClick={() => handleCardClick(gameInfo.id)}
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
					<IonLabel>{gameInfo.court.location}</IonLabel>
				</IonItem>
			</IonCardContent>
		</IonCard>
	);
};

export default CardSearchGame;
