import React, { Fragment } from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function App() {
  return (
    <Fragment>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((emoji, index) => {
          return (
            <Card
              key={index}
              emoji={emoji.emoji}
              name={emoji.name}
              definition={emoji.meaning}
            />
          );
        })}
      </dl>
    </Fragment>
  );
}

export default App;
