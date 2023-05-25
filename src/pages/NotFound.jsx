import React from "react";
import NotFoundImg from "../assets/img3.svg"

export const NotFound = () => {
  return (
    <section className="container pageNot">
      <h1>Error: 404 - <span>Page Not Found</span></h1>

      <img src={NotFoundImg} alt="Not Found" />
    </section>
  );
};
