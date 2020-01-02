import React from "react";

const Event = ({ name, url, images }) => {
  return (
    <div>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top uk-text-center">
          {images.length ? (
            <img src={images[0].url} alt={name} height="100px" />
          ) : null}
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">{name}</h3>
        </div>
        <div className="uk-card-footer">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="uk-button uk-button-secondary"
          >
            Más información
          </a>
        </div>
      </div>
    </div>
  );
};

export default Event;
