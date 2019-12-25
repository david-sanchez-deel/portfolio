import React from "react";
import PropTypes from 'prop-types';

const New = ({
  author,
  content,
  description,
  title,
  url,
  urlToImage,
  source
}) => {
  const img = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : null;
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {img}
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn"
          >
            Ver noticia completa
          </a>
        </div>
      </div>
    </div>
  );
};
New.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  source: PropTypes.object.isRequired,
}
export { New };
