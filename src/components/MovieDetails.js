import Actor from "./Actor";

const MovieDetails = ({ cast }) => {
  return (
    <div className="mt-6 mx-14">
      <h1 className="font-bold text-xl">Actors:</h1>
      <div className="flex flex-wrap m-4">
        {cast?.map((actor) => (
          <Actor cast={actor} key={actor?.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;
