import Hero from "./hero";
import MovieCard from "./MovieCard";

const SearchView = ({ keyword, searchResult }) => {
  const val = `you are searching for ${keyword}`;

  const resultHtml = searchResult.map((obj, i) => {
    return (
      // <movieCard>
      //   movie={obj} key={i}
      // </movieCard>

      <MovieCard movie={obj} key={i}></MovieCard>
    );
  });

  return (
    <>
    
      <Hero texts={val} />

      <div className="container">
        <div className="row">{resultHtml}</div>
      </div>

    </>
  );
};

export default SearchView;
