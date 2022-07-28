import React from "react";
export default function Drink({ image, name }) {
  return (
    <section>
      <div className="box">
        <img src={image} alt={name} />
        <h1>hello</h1>
      </div>
      <h2>{name} </h2>
    </section>
  );
}
