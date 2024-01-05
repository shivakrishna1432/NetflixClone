import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/moviesSlice";

const useTrailerVideo = (videoId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTrailerMovie();
    // eslint-disable-next-line
  }, []);

  const getTrailerMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        videoId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const trailer = json?.results?.filter(
      (trailer) => trailer?.type === "Trailer"
    );
    const trailerVideo = trailer[0];
    dispatch(addTrailer(trailerVideo));
  };
};

export default useTrailerVideo;
