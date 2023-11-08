export enum SearchType {
  all = "",
  movie = "movie",
  series = "series",
  episode = "episode",
}

export interface DetailsResult {
  Genre: string;
  Title: string;
  Year: string;
  Poster: string;
  Plot: string;
  imdbRating: string;
  Directors: string;
  Actors: string;
  Website: string;
}

export const useApi = () => {
  const url = `https://swish-cc699-default-rtdb.europe-west1.firebasedatabase.app/games.json`;

  const searchData = async (title: string, type: SearchType): Promise<any> => {
    const result = await fetch(`${url}`);
  };
};
