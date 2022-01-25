


 const MovieCard = ({ movie }) => {

    //   https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  console.log(posterUrl);

  return (


    <div className="col-lg-2 col-md-3 col-sm-1 my-4">

    <div className="card">
      <img
        className="card-img-top"
        src={posterUrl}
        alt={movie.original_title}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>
        <a href="#" className="btn btn-primary">
          show details
        </a>
      </div>
    </div>
    </div>


  );
};
export default MovieCard;
