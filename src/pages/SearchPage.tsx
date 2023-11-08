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
	useIonAlert,
	useIonLoading,
} from "@ionic/react";
import "./SearchPage.css";
import useApi, { SearchResult, SearchType } from "../hooks/useApi";
import { useEffect, useState } from "react";

const SearchPage: React.FC = () => {
	const { searchData } = useApi();

	const [searchTerm, setSearchTerm] = useState("");
	const [type, setType] = useState("");
	const [results, setResults] = useState([]);

	useEffect(() => {
		if (searchTerm === "") {
			setResults([]);
			return;
		}

		const loadData = async () => {
			const result = await searchData(searchTerm, type);
			console.log("💥~ file: Home.tsx:31 ~ loadData ~ result", result);
		};
		loadData();
	}, [searchTerm]);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>SearchPage</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">SearchPage</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonSearchbar
					value={searchTerm}
					debounce={300}
					onIonChange={(e) => setSearchTerm(e.detail.value!)}
					placeholder="Search for Games"
				></IonSearchbar>

				<IonItem>
					<IonLabel>Select Searhtype</IonLabel>
					<IonSelect
						value={type}
						onIonChange={(e) => setType(e.detail.value!)}
					>
						<IonSelectOption value="">All</IonSelectOption>
						<IonSelectOption value="movie">Movie</IonSelectOption>
						<IonSelectOption value="series">Series</IonSelectOption>
						<IonSelectOption value="episode">episode</IonSelectOption>
					</IonSelect>
				</IonItem>
			</IonContent>
		</IonPage>
	);
};

export default SearchPage;
