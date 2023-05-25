import React, { useContext, useState } from "react";
import { MyContext } from "../services/Context";

export const Home = () => {
  const { dados, pages, setPages } = useContext(MyContext);
  if (dados === null) return null;
  return (
    <section className="container home">
      <div className="btnMenu">
        {pages > 1 ? (
          <button
            type="button"
            title="pages"
            onClick={() => setPages((prev) => prev - 1)}
          >
            Return Page {pages - 1}
          </button>
        ) : null}
        {pages < 20 ? (
          <button
            type="button"
            title="pages"
            onClick={() => setPages((prev) => prev + 1)}
          >
            Next Page {pages + 1}
          </button>
        ) : null}
      </div>
      <div className="inline-img">
        {dados.map(({ id, largeImageURL }) => (
          <div key={id}>
            <img src={largeImageURL} alt={largeImageURL} />
          </div>
        ))}
      </div>
    </section>
  );
};
