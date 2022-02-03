import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, medium_cover_image, title, summary, genres }) {
  return (
    <div>
      <img src={medium_cover_image} alt={title} />
      <h3>
        <Link to={`./movie${id}`}>{title}</Link>
      </h3>
      <p>{summary}</p>
      <ul>
        {genres
          ? genres.map((genre) => {
              return <li key={genre}>{genre}</li>;
            })
          : null}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  medium_cover_image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};
export default Movie;
