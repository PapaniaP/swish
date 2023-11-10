import React, { useState, useEffect } from "react";
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonSearchbar,
	IonItem,
	IonLabel,
	IonSelect,
	IonSelectOption,
	IonList,
} from "@ionic/react";
import "./SearchPage.css";
import CardSearchGame from "../components/CardSearchGame";

export type SearchInfo = {
	id: string;
	gameName: string;
	skillLevel: string;
	gameDescription: string;
	court: {
		courtImage: string;
		location: string;
		gameType: "Indoor" | "Outdoor";
		id: string;
	};
	gameSize: string;
	availableSpots: number;
	time: string;
};

const SearchPage: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filter, setFilter] = useState("");
	const [games, setGames] = useState<SearchInfo[]>([]);
	const [filteredGames, setFilteredGames] = useState<SearchInfo[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = `https://swish-cc699-default-rtdb.europe-west1.firebasedatabase.app/games.json`;
				const response = await fetch(url);

				if (!response.ok) {
					throw new Error("Network response was not ok");
				}

				const data = await response.json();
				const loadedGames = Object.keys(data).map((key) => ({
					id: key,
					...data[key],
				}));
				setGames(loadedGames);
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const filtered = games.filter((game) => {
			const gameNameLower = game.gameName ? game.gameName.toLowerCase() : "";
			return (
				gameNameLower.includes(searchTerm.toLowerCase()) &&
				(filter === "" || game.court.gameType === filter)
			);
		});
		setFilteredGames(filtered);
	}, [searchTerm, filter, games]);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Search</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonSearchbar
					value={searchTerm}
					debounce={300}
					onIonChange={(e) => setSearchTerm(e.detail.value ?? "")}
					placeholder="Search for Games"
				></IonSearchbar>

				<IonItem>
					<IonLabel>Game Type</IonLabel>
					<IonSelect
						value={filter}
						placeholder="Select Type"
						onIonChange={(e) => setFilter(e.detail.value)}
					>
						<IonSelectOption value="">All</IonSelectOption>
						<IonSelectOption value="Indoor">Indoor</IonSelectOption>
						<IonSelectOption value="Outdoor">Outdoor</IonSelectOption>
					</IonSelect>
				</IonItem>

				<IonList>
					{filteredGames.map((game) => (
						<CardSearchGame key={game.id} searchInfo={game} />
					))}
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default SearchPage;
