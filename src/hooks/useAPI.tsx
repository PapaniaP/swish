export enum SearchType {
	all = "",
	movie = "movie",
	series = "series",
	episode = "episode",
}

export interface SearchResult {
	gameName: string;
	skillLeven: string;
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
}

export interface SearchError {
	Response: string;
	Error: string;
}

export interface DetailsResult {
	id: string;
	gameName: string;
	skillLeven: string;
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
}

export const useApi = () => {
	const url = `https://swish-cc699-default-rtdb.europe-west1.firebasedatabase.app/games.json`;

	const searchData = async (
		title: string,
		type: SearchType
	): Promise<SearchResult[] | SearchError> => {
		const result = await fetch(`${url}?s=${encodeURI(title)}&type=${type}`);
		return result.json();
	};

	const getDetails = async (id: string): Promise<DetailsResult> => {
		const result = await fetch(`${url}?i=${id}&plot=full`);
		return result.json();
	};

	return {
		searchData,
		getDetails,
	};
};

export default useApi;
