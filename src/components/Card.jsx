import React, { Fragment } from "react";

function Card({ emoji, name, definition }) {
  return (
    <Fragment>
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {emoji}
          </span>
          <span className="name">{name}</span>
        </dt>
        <dd className="definition">{definition}</dd>
      </div>
    </Fragment>
  );
}

export default Card;
