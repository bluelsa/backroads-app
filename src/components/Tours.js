import React from "react";
import Title from "./partialComponents/Title";
import ToursTemplate from "./partialComponents/ToursTemplate";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <ToursTemplate />
    </section>
  );
};

export default Tours;
