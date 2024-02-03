import { useState } from "react";
import Card from "../Card";

const ContainerCard = ({ title }) => {
  const service = ["Adestramento", "Passeio", "Taxi Pet"];

  return (
    <>
      <div>{title}</div>
      <Card service={service} />
    </>
  );
};

export default ContainerCard;
