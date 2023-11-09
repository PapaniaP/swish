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

export type SearchInfo = {
	id: string;
	gameName: string;
	skillLevel: string;
	gameDescription: string;
	court: {
		courtImage: string;
		location: string;
		gameType: "Indoor" | "Outdoor";
	};
	gameSize: number;
	availableSpots: number;
	time: string;
	organiser: {
		image: string;
		name: string;
	};
};

type CardSearchGameProps = {
	searchInfo: SearchInfo;
};

const CardSearchGame: React.FC<CardSearchGameProps> = ({ searchInfo }) => {
	const history = useHistory();

	const numberOfPeople = searchInfo.gameSize - searchInfo.availableSpots;
	return (
		<IonCard
			className="ion-card-click"
			key={searchInfo.id}
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
						{searchInfo.court && searchInfo.court.gameType}
					</IonChip>
					<IonChip
						className="custom-chip"
						color="secondary"
						outline={true}
					>
						{searchInfo.skillLevel}
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
						{`${numberOfPeople} / ${searchInfo.gameSize}`}
					</IonChip>
				</IonItem>

				<IonItem lines="full">
					<IonCardTitle>{searchInfo.gameName}</IonCardTitle>
				</IonItem>

				<IonItem lines="none">
					<IonIcon
						className="label-icon"
						aria-hidden="true"
						icon={timeOutline}
						slot="start"
					></IonIcon>
					<IonLabel className="time-label">{searchInfo.time}</IonLabel>
				</IonItem>
				<IonItem lines="full">
					<IonIcon
						className="label-icon"
						aria-hidden="true"
						icon={pinOutline}
						slot="start"
					></IonIcon>
					<IonLabel>{searchInfo.court && searchInfo.court.gameType}</IonLabel>
				</IonItem>
			</IonCardContent>
		</IonCard>
	);
};

export default CardSearchGame;
